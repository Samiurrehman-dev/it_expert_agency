type CaseStudyBase = {
  slug: string;
  category: string;
  industry: string;
  title: string;
  subtitle: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  relatedService: {
    label: string;
    href: string;
    heading: string;
    description: string;
  };
};

export type StructuredCaseStudy = CaseStudyBase & {
  format: "structured";
  publishedDate: string;
  publishedLabel: string;
  readTime: string;
  introduction: string[];
  snapshot: string;
  challenge: string[];
  rootCauses: string[];
  solutionIntroduction: string;
  solutionItems: string[];
  result: string[];
  pullQuote: string;
  keyTakeawaysIntroduction: string;
  keyTakeaways: string[];
  conclusion: string[];
  closingEmphasis: string;
  relatedContent: {
    label: string;
    href: string;
    category: string;
    description: string;
  };
};

export type NarrativeCaseStudy = CaseStudyBase & {
  format: "narrative";
  clientProfile: string;
  sections: Array<{
    id: string;
    title: string;
    paragraphs: string[];
  }>;
  results: Array<{
    label: string;
    detail: string;
  }>;
  pullQuote: string;
};

export type CaseStudy = StructuredCaseStudy | NarrativeCaseStudy;

// MIGRATED TO DATABASE — kept here only for the idempotent one-time importer
// and instant rollback. Public pages do not read this array.
export const caseStudies: CaseStudy[] = [
  {
    format: "structured",
    slug: "backups-are-only-useful-when-recovery-is-tested",
    category: "E-Commerce — Backup & Disaster Recovery",
    industry: "E-Commerce",
    title: "Backups Are Only Useful When Recovery Is Tested",
    image: "/images/updates/case-study-tested-recovery.jpg",
    imageAlt:
      "Server room equipment and network cabling prepared for a recovery test",
    subtitle:
      "How a growing e-commerce company turned an untested backup into a reliable recovery plan.",
    publishedDate: "2026-08-22",
    publishedLabel: "August 22, 2026",
    readTime: "5 min read",
    excerpt:
      "How a growing e-commerce company discovered its nightly backups couldn't actually be restored — and built a tested recovery process before the next failure hit.",
    introduction: [
      "A backup can give an organization a false sense of security. Having files stored safely is important, but a backup is only truly valuable when those files can be recovered quickly, completely, and reliably when something goes wrong.",
      "This case study explores why backup recovery testing is an essential part of any business continuity and disaster recovery strategy.",
    ],
    snapshot:
      "An e-commerce company performing automatic nightly backups of its website and database, confident its data was protected — until a server failure put that assumption to the test.",
    challenge: [
      "Imagine an e-commerce company that performs automatic backups of its website and database every night. The team believes its data is protected.",
      "One day, a server failure causes the website and customer database to become unavailable. The team immediately attempts to restore the latest backup.",
      "That is when the problems begin.",
      "The backup file is corrupted, the restoration process has never been tested, and critical application dependencies were not included. Instead of recovering within an hour, the company spends several days trying to rebuild its environment.",
      "The backups existed — but they were not actually proven to be recoverable.",
    ],
    rootCauses: [
      "Backups were created automatically but never regularly restored for testing.",
      "The team did not have a documented recovery procedure.",
      "Some application configurations and dependencies were missing.",
      "Recovery times had never been measured.",
      "Employees were unsure who was responsible for each recovery task.",
    ],
    solutionIntroduction:
      "The company introduced a regular backup recovery testing program. Every month, the IT team selected a recent backup and restored it in an isolated environment. They verified:",
    solutionItems: [
      "Whether the backup could actually be restored.",
      "Whether databases and files were complete.",
      "Whether applications worked correctly after restoration.",
      "How long recovery took.",
      "Whether the documented recovery procedure was accurate.",
    ],
    result: [
      "After several recovery tests, the company discovered and fixed issues that would otherwise have remained hidden until a real disaster occurred.",
      "When another server failure eventually happened, the team was able to follow its tested recovery procedure with far less disruption.",
    ],
    pullQuote:
      "A successful backup is not the same thing as a successful recovery.",
    keyTakeawaysIntroduction:
      "Backups should be treated as part of a complete recovery strategy — not as an isolated task.",
    keyTakeaways: [
      "Automate regular backups.",
      "Keep backups in secure, separate locations.",
      "Test restoration regularly.",
      "Document recovery procedures.",
      "Measure recovery time and data loss.",
      "Review and update the process after every test.",
    ],
    conclusion: [
      "A backup that has never been tested is an assumption, not a guarantee.",
      "Businesses invest heavily in protecting their data, but the real test comes when that data needs to be restored. Regular recovery testing turns backups from files sitting in storage into a reliable business continuity tool.",
    ],
    closingEmphasis:
      "Remember: Backup completed ≠ Recovery guaranteed. Test your recovery before you actually need it.",
    relatedService: {
      label: "View our Backup & Disaster Recovery services",
      href: "/services/managed-services-msp-toolchain/#backup-disaster-recovery",
      heading: "Make recovery readiness part of your backup strategy.",
      description:
        "Protect critical systems with resilient backups, tested restoration procedures, and practical recovery planning.",
    },
    relatedContent: {
      label:
        "Read the full guide: Backups Are Only Useful When Recovery Is Tested",
      href: "/blog/backups-are-only-useful-when-recovery-is-tested",
      category: "Related guide",
      description:
        "Explore the wider framework for recovery objectives, backup resilience, documentation, testing, and continuous improvement.",
    },
  },
  {
    format: "narrative",
    slug: "turn-infrastructure-signals-into-faster-smarter-action",
    category: "Professional Services — Monitoring & AIOps",
    industry: "Professional Services",
    title: "Turn Infrastructure Signals Into Faster, Smarter Action",
    image: "/images/updates/case-study-aiops-monitoring-v3.jpg",
    imageAlt:
      "Operations engineer reviewing alerts and system data across a wall of monitors",
    subtitle:
      "How One Growing Company Stopped Reacting to IT Problems and Started Preventing Them",
    excerpt:
      "How a growing professional services firm connected its existing monitoring, prioritized critical alerts, automated predictable fixes, and moved from reacting to outages to preventing them.",
    clientProfile:
      "Growing professional services firm, ~80 employees, two offices",
    sections: [
      {
        id: "how-they-found-us",
        title: "How They Found Us",
        paragraphs: [
          "The client — a growing professional services firm with close to 80 employees across two offices — reached out after a particularly bad week. A server had gone down mid-afternoon on a Wednesday, right in the middle of a client deadline, and it took almost four hours for anyone on their small internal IT team to even realize something was wrong. By the time it was fixed, half the office had lost an afternoon of work, and leadership was asking a question nobody could answer confidently: how long had this actually been building up, and why didn't anyone catch it sooner?",
          "That incident wasn't really the problem. It was the symptom that finally got noticed. When we sat down with their IT lead, it became clear this wasn't a one-off — it was the fourth unplanned outage in six months, and each time, the pattern was the same: something failed, someone eventually noticed, and the team scrambled to fix it after the damage was already done.",
        ],
      },
      {
        id: "understanding-what-was-actually-happening",
        title: "Understanding What Was Actually Happening",
        paragraphs: [
          "Before proposing anything, we spent the first two weeks just watching and listening — reviewing their existing monitoring setup, talking to the IT team about their day-to-day, and quietly logging how alerts were actually being handled in practice versus how they were supposed to be handled on paper.",
          "What we found matched what the client suspected, but with more detail than they expected. They did have monitoring tools running — servers, network, and applications were all technically being watched. But every tool operated in its own bubble, with no shared view across them. Alerts landed in a general IT inbox alongside routine notifications, so a critical server failure and a minor disk-space warning showed up looking identical, with nothing to tell the team which one actually needed attention right now. There was no automation at all — even the most routine, predictable issues, the kind with a known fix every single time, still required someone to manually notice, diagnose, and resolve them by hand. And nobody had ever gone back and looked at the four outages together to ask whether they shared a root cause.",
          "We walked the client through these findings directly, using their own recent incidents as examples, so the problem wasn't abstract — it was their Wednesday afternoon, explained.",
        ],
      },
      {
        id: "what-we-built-with-them",
        title: "What We Built With Them",
        paragraphs: [
          "Rather than replacing their existing tools, we worked with their internal IT team to connect and reconfigure what they already had — partly because it was faster, and partly because their team already knew those systems and didn't need to learn something entirely new under pressure.",
          "We consolidated their server, network, and application monitoring into a single unified view, so for the first time, an issue on one system could be seen in context with what else was happening across their environment at the same time. We then built a severity scoring system into their alerting, so a critical failure would immediately stand out and route directly to the right person's phone, while routine items would simply queue for the next business day instead of interrupting anyone.",
          "For the issues that came up repeatedly with a known, predictable fix — a specific service that occasionally needed restarting, disk space warnings on a particular server — we set those to resolve automatically, with a log kept so the team could still see what had happened without needing to act on it manually. And we went back through the four prior outages together with their IT lead, and found that two of them actually traced back to the same aging piece of network hardware, which was flagged for replacement before it caused a fifth.",
        ],
      },
      {
        id: "where-things-stand-now",
        title: "Where Things Stand Now",
        paragraphs: [
          "It's been eight months since the engagement started, and the client hasn't had an unplanned outage since the network hardware was replaced. Their IT lead now gets a same-day, prioritized notification for anything that actually matters, instead of digging through a shared inbox to figure out what's urgent. A meaningful share of what used to be manual firefighting now resolves on its own, which has freed up enough of the internal team's time that they've been able to take on projects that had been sitting on the back burner for over a year.",
          "When we followed up recently, the client's most direct feedback was simple:",
        ],
      },
      {
        id: "the-bigger-picture",
        title: "The Bigger Picture",
        paragraphs: [
          "This client didn't need more monitoring tools. They needed the ones they already had to actually talk to each other, and a way to tell the difference between something urgent and something that could wait. That distinction — not additional software — is usually what separates a business that's constantly reacting to IT problems from one that's quietly staying ahead of them.",
        ],
      },
    ],
    results: [
      {
        label: "Eight months",
        detail:
          "No unplanned outage since the aging network hardware was replaced.",
      },
      {
        label: "Prioritized alerting",
        detail:
          "Same-day notification for issues that matter, routed to the right person.",
      },
      {
        label: "Capacity recovered",
        detail:
          "Routine fixes now resolve automatically, freeing the internal team for long-delayed projects.",
      },
    ],
    pullQuote:
      "It's not that nothing ever goes wrong anymore — it's that they usually know about it before it becomes anyone else's problem.",
    relatedService: {
      label: "View our Monitoring & AIOps services",
      href: "/services/managed-services-msp-toolchain/#monitoring-aiops",
      heading: "Turn monitoring signals into faster, smarter action.",
      description:
        "Connect infrastructure visibility, alert prioritization, intelligent analysis, and automation in one practical operating model.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
