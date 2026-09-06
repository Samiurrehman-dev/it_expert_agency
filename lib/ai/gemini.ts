import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

import { generateSlug } from "@/lib/generateSlug";

export const contentTypes = ["BLOG", "CASE_STUDY", "EBOOK"] as const;
export type AiContentType = (typeof contentTypes)[number];
export type CategoryOption = { id: number; name: string };

const nullableString = z.string().nullable();
const relatedServiceSchema = z.object({
  label: z.string(),
  href: z.string(),
  heading: z.string(),
  description: z.string(),
});
const relatedContentSchema = z.object({
  label: z.string(),
  href: z.string(),
  category: z.string(),
  description: z.string(),
});
const blogBlockSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("paragraph"), text: z.string() }),
  z.object({ type: z.literal("checklist"), items: z.array(z.string()) }),
  z.object({ type: z.literal("subheading"), title: z.string() }),
  z.object({
    type: z.literal("callout"),
    text: z.string(),
    label: z.string().optional(),
    compact: z.boolean().optional(),
  }),
  z.object({
    type: z.literal("contrast"),
    items: z.array(
      z.object({ title: z.string(), text: z.string().optional() }),
    ),
  }),
  z.object({
    type: z.literal("highlights"),
    items: z.array(
      z.object({ title: z.string(), text: z.string().optional() }),
    ),
  }),
  z.object({
    type: z.literal("priorities"),
    items: z.array(z.object({ label: z.string(), detail: z.string() })),
    columns: z.union([z.literal(2), z.literal(3)]).optional(),
  }),
  z.object({
    type: z.literal("steps"),
    items: z.array(z.object({ label: z.string(), detail: z.string() })),
  }),
  z.object({
    type: z.literal("metrics"),
    items: z.array(z.object({ label: z.string(), detail: z.string() })),
  }),
]);
const blogBodySchema = z.object({
  intro: z.array(z.string()),
  introBlocks: z.array(blogBlockSchema).optional(),
  sections: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      blocks: z.array(blogBlockSchema),
      showInToc: z.boolean().optional(),
    }),
  ),
});
const commonSchema = {
  title: z.string().min(1).max(255),
  slug: z.string().min(1).max(191),
  excerpt: z.string().min(1),
  metaTitle: z.string().min(1).max(255),
  metaDescription: z.string().min(1),
  categoryId: z.number().int().positive(),
};
const blogOutputSchema = z.object({
  ...commonSchema,
  subtitle: nullableString,
  publishedDate: z.string(),
  publishedLabel: z.string().max(100),
  readTime: z.string().max(50),
  image: z.literal(""),
  imageAlt: z.string().max(500),
  body: blogBodySchema,
  relatedService: relatedServiceSchema,
  relatedCaseStudy: relatedServiceSchema.nullable(),
});
const structuredBodySchema = z.object({
  introduction: z.array(z.string()),
  snapshot: z.string(),
  challenge: z.array(z.string()),
  rootCauses: z.array(z.string()),
  solutionIntroduction: z.string(),
  solutionItems: z.array(z.string()),
  result: z.array(z.string()),
  pullQuote: z.string(),
  keyTakeawaysIntroduction: z.string(),
  keyTakeaways: z.array(z.string()),
  conclusion: z.array(z.string()),
  closingEmphasis: z.string(),
});
const narrativeBodySchema = z.object({
  sections: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      paragraphs: z.array(z.string()),
    }),
  ),
  results: z.array(z.object({ label: z.string(), detail: z.string() })),
  pullQuote: z.string(),
});
const caseStudyBase = {
  ...commonSchema,
  industry: z.string().max(191),
  subtitle: z.string(),
  image: z.literal(""),
  imageAlt: z.string().max(500),
  publishedDate: nullableString,
  publishedLabel: nullableString,
  readTime: nullableString,
  clientProfile: nullableString,
  relatedService: relatedServiceSchema,
  relatedContent: relatedContentSchema.nullable(),
};
const caseStudyOutputSchema = z.discriminatedUnion("format", [
  z.object({
    ...caseStudyBase,
    format: z.literal("STRUCTURED"),
    body: structuredBodySchema,
  }),
  z.object({
    ...caseStudyBase,
    format: z.literal("NARRATIVE"),
    body: narrativeBodySchema,
  }),
]);
const ebookOutputSchema = z.object({
  ...commonSchema,
  body: blogBodySchema,
  promotionalDescription: z.string(),
  fileUrl: z.literal(""),
  meta: z.string().max(100),
  color: z.string().max(191),
  icon: z.string().max(100),
  publishedDate: nullableString,
});

export type GeneratedContent =
  | z.infer<typeof blogOutputSchema>
  | z.infer<typeof caseStudyOutputSchema>
  | z.infer<typeof ebookOutputSchema>;

const schemas = {
  BLOG: blogOutputSchema,
  CASE_STUDY: caseStudyOutputSchema,
  EBOOK: ebookOutputSchema,
};

const blockSchemaDescription = `
Blog and Ebook body: {"intro":string[],"introBlocks"?:Block[],"sections":[{"id":string,"title":string,"blocks":Block[],"showInToc"?:boolean}]}.
Block is exactly one of:
{"type":"paragraph","text":string}
{"type":"checklist","items":string[]}
{"type":"subheading","title":string}
{"type":"callout","text":string,"label"?:string,"compact"?:boolean}
{"type":"contrast","items":[{"title":string,"text"?:string}]}
{"type":"highlights","items":[{"title":string,"text"?:string}]}
{"type":"priorities","items":[{"label":string,"detail":string}],"columns"?:2|3}
{"type":"steps","items":[{"label":string,"detail":string}]}
{"type":"metrics","items":[{"label":string,"detail":string}]}.
STRUCTURED Case Study body: {"introduction":string[],"snapshot":string,"challenge":string[],"rootCauses":string[],"solutionIntroduction":string,"solutionItems":string[],"result":string[],"pullQuote":string,"keyTakeawaysIntroduction":string,"keyTakeaways":string[],"conclusion":string[],"closingEmphasis":string}.
NARRATIVE Case Study body: {"sections":[{"id":string,"title":string,"paragraphs":string[]}],"results":[{"label":string,"detail":string}],"pullQuote":string}.`;

function jsonSchemaFor(contentType: AiContentType) {
  const string = { type: "string" };
  const nullable = { type: ["string", "null"] };
  const related = {
    type: "object",
    properties: {
      label: string,
      href: string,
      heading: string,
      description: string,
    },
    required: ["label", "href", "heading", "description"],
  };
  const block = {
    anyOf: [
      {
        type: "object",
        properties: {
          type: { type: "string", enum: ["paragraph"] },
          text: string,
        },
        required: ["type", "text"],
      },
      {
        type: "object",
        properties: {
          type: { type: "string", enum: ["checklist"] },
          items: { type: "array", items: string },
        },
        required: ["type", "items"],
      },
      {
        type: "object",
        properties: {
          type: { type: "string", enum: ["subheading"] },
          title: string,
        },
        required: ["type", "title"],
      },
      {
        type: "object",
        properties: {
          type: { type: "string", enum: ["callout"] },
          text: string,
          label: string,
          compact: { type: "boolean" },
        },
        required: ["type", "text"],
      },
      {
        type: "object",
        properties: {
          type: { type: "string", enum: ["contrast"] },
          items: {
            type: "array",
            items: {
              type: "object",
              properties: { title: string, text: string },
              required: ["title"],
            },
          },
        },
        required: ["type", "items"],
      },
      {
        type: "object",
        properties: {
          type: { type: "string", enum: ["highlights"] },
          items: {
            type: "array",
            items: {
              type: "object",
              properties: { title: string, text: string },
              required: ["title"],
            },
          },
        },
        required: ["type", "items"],
      },
      {
        type: "object",
        properties: {
          type: { type: "string", enum: ["priorities"] },
          items: {
            type: "array",
            items: {
              type: "object",
              properties: { label: string, detail: string },
              required: ["label", "detail"],
            },
          },
          columns: { type: "integer", enum: [2, 3] },
        },
        required: ["type", "items"],
      },
      {
        type: "object",
        properties: {
          type: { type: "string", enum: ["steps"] },
          items: {
            type: "array",
            items: {
              type: "object",
              properties: { label: string, detail: string },
              required: ["label", "detail"],
            },
          },
        },
        required: ["type", "items"],
      },
      {
        type: "object",
        properties: {
          type: { type: "string", enum: ["metrics"] },
          items: {
            type: "array",
            items: {
              type: "object",
              properties: { label: string, detail: string },
              required: ["label", "detail"],
            },
          },
        },
        required: ["type", "items"],
      },
    ],
  };
  const blogBody = {
    type: "object",
    properties: {
      intro: { type: "array", items: string },
      introBlocks: { type: "array", items: block },
      sections: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: string,
            title: string,
            blocks: { type: "array", items: block },
            showInToc: { type: "boolean" },
          },
          required: ["id", "title", "blocks"],
        },
      },
    },
    required: ["intro", "sections"],
  };
  const common = {
    title: string,
    slug: string,
    excerpt: string,
    metaTitle: string,
    metaDescription: string,
    categoryId: { type: "integer" },
  };
  if (contentType === "BLOG")
    return {
      type: "object",
      properties: {
        ...common,
        subtitle: nullable,
        publishedDate: string,
        publishedLabel: string,
        readTime: string,
        image: { type: "string", enum: [""] },
        imageAlt: string,
        body: blogBody,
        relatedService: related,
        relatedCaseStudy: { anyOf: [related, { type: "null" }] },
      },
      required: [
        ...Object.keys(common),
        "subtitle",
        "publishedDate",
        "publishedLabel",
        "readTime",
        "image",
        "imageAlt",
        "body",
        "relatedService",
        "relatedCaseStudy",
      ],
    };
  if (contentType === "EBOOK")
    return {
      type: "object",
      properties: {
        ...common,
        body: blogBody,
        promotionalDescription: string,
        fileUrl: { type: "string", enum: [""] },
        meta: string,
        color: string,
        icon: string,
        publishedDate: nullable,
      },
      required: [
        ...Object.keys(common),
        "body",
        "promotionalDescription",
        "fileUrl",
        "meta",
        "color",
        "icon",
        "publishedDate",
      ],
    };
  const structuredBody = {
    type: "object",
    properties: {
      introduction: { type: "array", items: string },
      snapshot: string,
      challenge: { type: "array", items: string },
      rootCauses: { type: "array", items: string },
      solutionIntroduction: string,
      solutionItems: { type: "array", items: string },
      result: { type: "array", items: string },
      pullQuote: string,
      keyTakeawaysIntroduction: string,
      keyTakeaways: { type: "array", items: string },
      conclusion: { type: "array", items: string },
      closingEmphasis: string,
    },
    required: [
      "introduction",
      "snapshot",
      "challenge",
      "rootCauses",
      "solutionIntroduction",
      "solutionItems",
      "result",
      "pullQuote",
      "keyTakeawaysIntroduction",
      "keyTakeaways",
      "conclusion",
      "closingEmphasis",
    ],
  };
  const narrativeBody = {
    type: "object",
    properties: {
      sections: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: string,
            title: string,
            paragraphs: { type: "array", items: string },
          },
          required: ["id", "title", "paragraphs"],
        },
      },
      results: {
        type: "array",
        items: {
          type: "object",
          properties: { label: string, detail: string },
          required: ["label", "detail"],
        },
      },
      pullQuote: string,
    },
    required: ["sections", "results", "pullQuote"],
  };
  const relatedContent = {
    type: "object",
    properties: {
      label: string,
      href: string,
      category: string,
      description: string,
    },
    required: ["label", "href", "category", "description"],
  };
  return {
    type: "object",
    properties: {
      ...common,
      format: { type: "string", enum: ["STRUCTURED", "NARRATIVE"] },
      industry: string,
      subtitle: string,
      image: { type: "string", enum: [""] },
      imageAlt: string,
      publishedDate: nullable,
      publishedLabel: nullable,
      readTime: nullable,
      clientProfile: nullable,
      body: { anyOf: [structuredBody, narrativeBody] },
      relatedService: related,
      relatedContent: { anyOf: [relatedContent, { type: "null" }] },
    },
    required: [
      ...Object.keys(common),
      "format",
      "industry",
      "subtitle",
      "image",
      "imageAlt",
      "publishedDate",
      "publishedLabel",
      "readTime",
      "clientProfile",
      "body",
      "relatedService",
      "relatedContent",
    ],
  };
}

function promptFor(contentType: AiContentType, categories: CategoryOption[]) {
  const categoryList = categories
    .map((category) => `${category.id}: ${category.name}`)
    .join("\n");
  return `You are the content editor for IT Experts Agency, an IT/MSP company. Read all source material and transform it into a complete, professional, technically accurate, readable, SEO-optimized ${contentType.replace("_", " ")}.

Preserve factual accuracy. Polish, organize, and expand explanations only where the source supports them. Never invent clients, outcomes, quotes, statistics, certifications, claims, links, or technical facts. Use an empty string or null where the output schema permits it and the source does not support a value.

Choose categoryId only from this exact list:\n${categoryList || "No categories are available."}
Create a URL-safe lowercase ASCII slug with hyphens. Use short stable section ids in the same style. Set image and fileUrl to empty strings because a human supplies those assets. Image alt text may describe a suitable relevant cover visual without claiming the image exists. Related service links must use a conservative existing site path such as /services; do not invent deep URLs. Return related optional content as null unless the source clearly identifies a valid related item.

${blockSchemaDescription}

For an Ebook, promotionalDescription is a short marketing hook distinct from excerpt and body. Meta is a short listing label; use color "orange" and icon "book-open". For a Case Study, choose STRUCTURED unless the source is clearly a client-story narrative, and ensure body matches the selected format exactly. For dates, use ${new Date().toISOString().slice(0, 10)} only when required; otherwise null. Return only JSON conforming exactly to the supplied response schema, with no markdown fence or commentary.`;
}

async function generate(
  parts: Array<string | { inlineData: { mimeType: string; data: string } }>,
  contentType: AiContentType,
  categories: CategoryOption[],
) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is not configured.");
  if (!categories.length)
    throw new Error("No content categories are configured.");
  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: [
      {
        role: "user",
        parts: parts.map((part) =>
          typeof part === "string" ? { text: part } : part,
        ),
      },
    ],
    config: {
      systemInstruction: promptFor(contentType, categories),
      responseMimeType: "application/json",
      responseJsonSchema: jsonSchemaFor(contentType),
      temperature: 0.3,
    },
  });
  if (!response.text) throw new Error("Gemini returned an empty response.");
  let parsed: unknown;
  try {
    parsed = JSON.parse(response.text);
  } catch {
    throw new Error("Gemini returned malformed JSON.");
  }
  const validated = schemas[contentType].safeParse(parsed);
  if (!validated.success)
    throw new Error(
      `Gemini returned content that does not match the ${contentType} schema.`,
    );
  if (!categories.some((category) => category.id === validated.data.categoryId))
    throw new Error("Gemini returned an invalid category selection.");
  return {
    ...validated.data,
    slug:
      generateSlug(validated.data.slug) ||
      generateSlug(validated.data.title) ||
      "untitled",
  } as GeneratedContent;
}

export function generateContentFromText(
  input: string,
  contentType: AiContentType,
  categories: CategoryOption[],
) {
  return generate([`Source material:\n${input}`], contentType, categories);
}

export function generateContentFromPdf(
  fileBuffer: Buffer,
  contentType: AiContentType,
  categories: CategoryOption[],
) {
  return generate(
    [
      {
        inlineData: {
          mimeType: "application/pdf",
          data: fileBuffer.toString("base64"),
        },
      },
      "Read the attached PDF as the source material.",
    ],
    contentType,
    categories,
  );
}
