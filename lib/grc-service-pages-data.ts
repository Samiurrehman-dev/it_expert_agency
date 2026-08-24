export const grcCategorySlug = "governance-risk-compliance";

export type GRCCoverageItem = {
  title: string;
  description: string;
};

export type GRCFaq = {
  question: string;
  answer: string;
};

export type GRCSource = {
  label: string;
  href: string;
  detail: string;
};

export type GRCServicePageContent = {
  slug: string;
  navTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: readonly string[];
  coverageIntro: string;
  coverage: readonly GRCCoverageItem[];
  toolsLabel: string;
  tools: readonly string[];
  faqs?: readonly GRCFaq[];
  sources?: readonly GRCSource[];
};

export const grcServicePages: readonly GRCServicePageContent[] = [
  {
    slug: "compliance-automation",
    navTitle: "Compliance Automation",
    title: "Compliance Automation Services",
    metaTitle: "Compliance Automation Services | IT Experts Agency",
    metaDescription:
      "Compliance automation support for control monitoring, evidence mapping, gap reporting and audit-ready documentation across global and Saudi frameworks.",
    eyebrow: "Control evidence and readiness",
    intro: [
      "Compliance automation brings control ownership, evidence requests, gap reporting and remediation tracking into one repeatable operating process. IT Experts Agency configures and operates compliance platforms, validates evidence at agreed review points and produces readiness reports for management and independent assessors.",
      "For Saudi organisations, applicability must be established against the governing source. NCA ECC-2:2024 applies to Saudi government entities and their affiliates, and to private-sector entities that own, operate or host Critical National Infrastructure; each in-scope entity applies the controls relevant to it. Saudi Aramco's third-party standard uses supplier classification to determine additional requirements, so evidence scope follows the contractual classification rather than a generic checklist. [1][2]",
    ],
    coverageIntro:
      "A controlled evidence workflow that makes ownership and gaps visible without treating a platform connection as proof that a control works.",
    coverage: [
      {
        title: "Continuous Control Monitoring",
        description:
          "Configure control-status signals and scheduled reviews so owners can see exceptions early. Each signal is validated before it is treated as verified evidence.",
      },
      {
        title: "Evidence Collection & Mapping",
        description:
          "Define evidence requests, owners, review dates and source systems, then map approved artifacts to the requirements they support.",
      },
      {
        title: "Compliance Readiness Reporting",
        description:
          "Produce traceable status and gap reports for management and assessors, clearly separating supplied evidence from unresolved or unverified claims.",
      },
      {
        title: "Framework-to-Control Mapping",
        description:
          "Link one internal control to the applicable requirements across multiple frameworks while preserving the wording, scope and test criteria of each source.",
      },
      {
        title: "Third-Party Compliance Tracking",
        description:
          "Track supplier obligations, evidence, exceptions and review dates according to the vendor's service, data access and contractual classification.",
      },
      {
        title: "Audit-Ready Documentation",
        description:
          "Organise policies, test records, screenshots, approvals and remediation evidence into an indexed package for independent review.",
      },
      {
        title: "Compliance Dashboards",
        description:
          "Give control owners and leaders a current view of evidence state, overdue actions, open gaps and upcoming review milestones.",
      },
    ],
    toolsLabel: "Platforms and tools",
    tools: ["Vanta", "Drata", "OneTrust", "Secureframe"],
    faqs: [
      {
        question: "Do you support ISO 27001 audit readiness?",
        answer:
          "Yes. Specialists can help define the control set, organise evidence, map ownership, track gaps and prepare stakeholders for an ISO 27001 assessment. Certification decisions remain with an accredited independent certification body; IT Experts Agency provides implementation and readiness support.",
      },
      {
        question:
          "Can you support SOC 2, NIST, HIPAA, PCI DSS and GDPR programmes?",
        answer:
          "Yes. The service supports control mapping and readiness work for SOC 2, NIST CSF, HIPAA, PCI DSS and GDPR. Scope is tailored to the organisation's systems, data and contractual obligations rather than treating a generic checklist as legal or audit advice.",
      },
      {
        question: "Do you cover Saudi frameworks such as NCA and SAMA?",
        answer:
          "Yes. GRC staffing includes NCA and SAMA alignment support. Specialists can structure evidence, policies, risks and remediation tracking while the client and its authorised assessors determine formal applicability and status.",
      },
      {
        question: "Can your team operate our compliance automation platform?",
        answer:
          "Yes. Specialists can configure workflows in Drata, Vanta, OneTrust and Secureframe, coordinate evidence requests, maintain mappings and prepare gap reports. A platform connection is treated as a source of potential evidence, not as independent verification of a control.",
      },
      {
        question: "Does a compliance platform make us compliant?",
        answer:
          "No. A platform helps organise requirements, evidence and workflows. Management owns the controls and risk decisions, while an authorised or independent assessor determines the formal assessment outcome where one is required.",
      },
      {
        question: "Can one item of evidence support several frameworks?",
        answer:
          "Often, yes. When the same internal control and evidence satisfy multiple requirements, we map and reuse that evidence while retaining each framework's scope and test criteria. A mapping does not erase meaningful differences between requirements.",
      },
      {
        question:
          "How do you distinguish claimed controls from verified controls?",
        answer:
          "We use three explicit evidence states: Potential means the capability exists but is not configured or enforced; Claimed means it is reported as configured and enforced but has not been independently confirmed; Verified means an independent review has confirmed it with suitable evidence.",
      },
      {
        question: "Who issues a certification or formal compliance opinion?",
        answer:
          "Only the appropriate authorised or independent assessor issues a certification, attestation or formal opinion. IT Experts Agency prepares evidence, maps controls, reports gaps and supports remediation; it does not certify its own implementation work.",
      },
    ],
    sources: [
      {
        label: "[1] NCA Essential Cybersecurity Controls (ECC-2:2024)",
        href: "https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf#page=10",
        detail:
          "Introduction, p. 7; Scope of Work and Applicability, p. 9; Domains and Structure, pp. 10–12.",
      },
      {
        label:
          "[2] Saudi Aramco SACS-002 Third Party Cybersecurity Standard (February 2022 edition)",
        href: "https://standardtouch.com/wp-content/uploads/2023/10/SACS-002-Third-Party-Cybersecurity-Standard.pdf#page=5",
        detail:
          "Purpose and Scope, p. 5; Control Instructions, pp. 6–7; General and Specific Requirements, pp. 8–18. Readable mirror of the Saudi Aramco source document; the former official PDF URL has been retired.",
      },
      {
        label:
          "[3] Saudi Aramco Cybersecurity Compliance Certificate programme",
        href: "https://www.aramco.com/en/what-we-do/suppliers/supplier-resources/cybersecurity-compliance-certificate-program",
        detail:
          "Current programme page and SACS-210 download. Confirm the contractually applicable standard and supplier classification before assessment.",
      },
    ],
  },
  {
    slug: "risk-management-assessments",
    navTitle: "Risk Management & Assessments",
    title: "Risk Management & Assessment Services",
    metaTitle: "IT Risk Assessment Services | IT Experts Agency",
    metaDescription:
      "IT risk management and risk assessment services covering registers, scoring, vendor risk, business impact and remediation planning.",
    eyebrow: "Decisions grounded in risk",
    intro: [
      "Risk assessment services turn technical findings and business dependencies into decisions that owners can act on. IT Experts Agency supports IT risk management from identification and scoring through vendor risk assessment, treatment planning and recurring review.",
      "The result is a maintained risk record with clear ownership, rationale and next actions—not a one-time spreadsheet that loses relevance after the assessment closes.",
    ],
    coverageIntro:
      "A practical risk lifecycle that connects assets, threats, vulnerabilities, suppliers and business impact.",
    coverage: [
      {
        title: "Risk Identification & Register Management",
        description:
          "Identify risks in context, record causes and consequences, assign accountable owners and keep review dates and status current.",
      },
      {
        title: "Risk Scoring & Prioritisation",
        description:
          "Apply an agreed likelihood-and-impact method so leaders can compare exposures and direct effort to the most material risks.",
      },
      {
        title: "Vulnerability-to-Risk Correlation",
        description:
          "Connect technical findings to affected services, exposure, exploitability and business importance instead of ranking by severity alone.",
      },
      {
        title: "Third-Party & Vendor Risk Assessments",
        description:
          "Assess suppliers according to data access, service criticality and control evidence, with gaps and follow-up actions tracked to closure.",
      },
      {
        title: "Business Impact Analysis",
        description:
          "Document critical processes, dependencies, recovery priorities and the operational impact of disruption with business owners.",
      },
      {
        title: "Risk Treatment & Remediation Planning",
        description:
          "Translate risk decisions into owned mitigation, transfer, avoidance or acceptance actions with dates and approval records.",
      },
      {
        title: "Ongoing Risk Reviews",
        description:
          "Revisit risks on an agreed cadence and after material changes so scores, evidence and treatment decisions remain relevant.",
      },
    ],
    toolsLabel: "Platforms and tools",
    tools: ["RSA Archer", "ServiceNow GRC", "LogicGate", "Excel / GRC-lite"],
  },
  {
    slug: "framework-standards-alignment",
    navTitle: "Framework & Standards Alignment",
    title: "Framework & Standards Alignment Services",
    metaTitle: "ISO 27001 & SOC 2 Readiness Support | IT Experts Agency",
    metaDescription:
      "ISO 27001 readiness, SOC 2 support, NIST framework alignment and HIPAA, PCI DSS and GDPR control mapping and gap assessment services.",
    eyebrow: "Requirements translated into action",
    intro: [
      "Framework and standards alignment turns external requirements into an internal control set that teams can own and demonstrate. We support ISO 27001 readiness, SOC 2 compliance support, NIST framework alignment and HIPAA, PCI DSS and GDPR readiness activities without conflating implementation support with independent assurance.",
      "Specialists map the applicable scope, identify gaps and build a prioritised roadmap while management retains control ownership and assessors retain responsibility for certification or attestation decisions.",
    ],
    coverageIntro:
      "Structured alignment from applicability and gaps through remediation evidence and assessor preparation.",
    coverage: [
      {
        title: "Framework Gap Assessments",
        description:
          "Compare the current control environment with applicable ISO 27001, NIST CSF, SOC 2, HIPAA, PCI DSS or GDPR requirements and document evidence-backed gaps.",
      },
      {
        title: "Multi-Framework Control Mapping",
        description:
          "Map common internal controls across frameworks while retaining requirement-specific scope, language and evidence expectations.",
      },
      {
        title: "Roadmap & Remediation Planning",
        description:
          "Prioritise gaps by risk, dependency and assessment timeline, then assign owners, milestones and evidence requirements.",
      },
      {
        title: "Framework Readiness Reviews",
        description:
          "Review control design, implementation claims and supporting artifacts before an independent assessment begins.",
      },
      {
        title: "Certification & Attestation Support",
        description:
          "Prepare stakeholders and evidence for an independent assessor without making certification or attestation claims on the assessor's behalf.",
      },
      {
        title: "Cross-Framework Harmonisation",
        description:
          "Create a coherent internal control library that reduces duplicate work and makes differences between overlapping requirements explicit.",
      },
    ],
    toolsLabel: "Frameworks covered",
    tools: ["ISO 27001", "NIST CSF", "SOC 2", "HIPAA", "PCI DSS", "GDPR"],
  },
  {
    slug: "policy-audit-support",
    navTitle: "Policy & Audit Support",
    title: "Policy & Audit Support Services",
    metaTitle: "IT Policy & Audit Preparation Support | IT Experts Agency",
    metaDescription:
      "IT policy management, compliance policy development and audit preparation support for evidence, findings, training and attestations.",
    eyebrow: "Clear policy, organised evidence",
    intro: [
      "IT policy management connects written expectations with the people, approvals and evidence needed to operate them. IT Experts Agency provides compliance policy development and audit preparation support for organisations that need current documentation and a controlled response to assessor requests.",
      "We help owners draft, review, approve and communicate policies, then organise artifacts and remediation records for independent audits while keeping management and assurance responsibilities clearly separated.",
    ],
    coverageIntro:
      "Policy and audit workflows that preserve version history, ownership, approvals and evidence from first draft through finding closure.",
    coverage: [
      {
        title: "Policy Development & Review",
        description:
          "Draft and review practical policies that reflect the organisation's risks, obligations, operating model and approved control decisions.",
      },
      {
        title: "Policy Lifecycle Management",
        description:
          "Maintain owners, versions, approvals, review dates, exceptions and publication records through a controlled lifecycle.",
      },
      {
        title: "Internal & External Audit Preparation",
        description:
          "Coordinate scope, request lists, owners, timelines and readiness checks before internal or independent audit fieldwork.",
      },
      {
        title: "Evidence & Artifact Organisation",
        description:
          "Index policies, approvals, tickets, screenshots, reports and test records so each artifact has a clear source and requirement mapping.",
      },
      {
        title: "Audit Finding Remediation Tracking",
        description:
          "Record findings, root causes, owners, due dates and closure evidence, with management visibility into overdue actions and accepted risk.",
      },
      {
        title: "Employee Policy Training & Attestation",
        description:
          "Coordinate policy communication, role-relevant training and acknowledgement records while tracking exceptions and follow-up.",
      },
    ],
    toolsLabel: "Platforms and tools",
    tools: [
      "Confluence",
      "Policy management tools",
      "AuditBoard",
      "E-signature & attestation tools",
    ],
  },
];

export function getGRCServicePage(slug: string) {
  return grcServicePages.find((page) => page.slug === slug);
}
