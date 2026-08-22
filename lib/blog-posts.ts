export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "checklist"; items: string[] }
  | { type: "subheading"; title: string }
  | { type: "callout"; text: string }
  | {
      type: "priorities";
      items: Array<{ label: string; detail: string }>;
    };

export type BlogSection = {
  id: string;
  title: string;
  blocks: BlogBlock[];
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  author: string;
  publishedDate: string;
  publishedLabel: string;
  readTime: string;
  excerpt: string;
  intro: string[];
  sections: BlogSection[];
  relatedService: {
    label: string;
    href: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "practical-security-checklist-growing-business",
    category: "Security",
    title: "A Practical Security Checklist for a Growing Business",
    author: "IT Experts Agency",
    publishedDate: "2026-08-22",
    publishedLabel: "August 22, 2026",
    readTime: "9 min read",
    excerpt:
      "A practical, no-cost-tools-required checklist covering identities, devices, data, backups, cloud apps, vendors, and incident response — the everyday controls that reduce the most common security risks as a business grows.",
    intro: [
      "As a business grows, security can quickly become more complicated. New employees, cloud applications, remote work, customer data, devices, and third-party vendors all create additional opportunities for security incidents.",
      "The good news is that improving security does not always require expensive tools or a large security team. Many of the most effective controls are simple, consistent, and practical.",
      "The goal is not to eliminate every possible threat. It is to strengthen everyday security controls, reduce avoidable risks, and make it harder for common attacks to succeed.",
    ],
    sections: [
      {
        id: "protect-every-user-account",
        title: "1. Protect Every User Account",
        blocks: [
          {
            type: "paragraph",
            text: "User accounts are one of the most common entry points for attackers.",
          },
          {
            type: "checklist",
            items: [
              "Require multi-factor authentication (MFA) for email, cloud applications, VPNs, and other critical systems.",
              "Use strong, unique passwords and a reputable password manager.",
              "Remove accounts immediately when employees leave the business.",
              "Review administrator and privileged accounts regularly.",
              "Give employees only the access they need to perform their jobs.",
              "Never share administrator credentials between employees.",
            ],
          },
          {
            type: "callout",
            text: "Start with MFA on email and administrator accounts. These accounts can provide attackers with access to a large portion of the business environment.",
          },
        ],
      },
      {
        id: "keep-devices-secure",
        title: "2. Keep Devices Secure",
        blocks: [
          {
            type: "paragraph",
            text: "Laptops, desktops, phones, and other devices can become an easy path into company systems.",
          },
          {
            type: "checklist",
            items: [
              "Keep operating systems and applications patched and up to date.",
              "Enable automatic security updates where practical.",
              "Use endpoint protection or built-in security controls.",
              "Encrypt business laptops and mobile devices.",
              "Enable screen locks with short inactivity periods.",
              "Maintain an inventory of company-owned devices.",
              "Have a process for lost or stolen devices.",
            ],
          },
          {
            type: "callout",
            text: "Do not allow an unknown or unmanaged device to become a permanent part of the business environment. Know what devices exist, who uses them, and whether they are protected.",
          },
        ],
      },
      {
        id: "secure-email",
        title: "3. Secure Email and Reduce Phishing Risk",
        blocks: [
          {
            type: "paragraph",
            text: "Phishing remains a major everyday security problem because attackers often target people rather than technology.",
          },
          {
            type: "checklist",
            items: [
              "Enable spam and phishing protection.",
              "Configure email authentication controls such as SPF, DKIM, and DMARC.",
              "Train employees to recognize suspicious links, attachments, and requests.",
              "Establish a simple process for reporting suspicious emails.",
              "Verify unusual payment, password, or account-change requests through a separate channel.",
            ],
          },
          {
            type: "callout",
            text: "Create a culture where employees can report suspicious messages without fear of being blamed. Early reporting can prevent a small mistake from becoming a major incident.",
          },
        ],
      },
      {
        id: "control-data-access",
        title: "4. Control Access to Business Data",
        blocks: [
          {
            type: "paragraph",
            text: "Not every employee needs access to every file, system, or customer record.",
          },
          {
            type: "checklist",
            items: [
              "Classify important business information.",
              "Restrict sensitive data based on job responsibilities.",
              "Review permissions periodically.",
              "Remove unnecessary access when employees change roles.",
              "Protect confidential files stored in cloud platforms.",
              "Avoid storing sensitive information in personal accounts or unmanaged devices.",
            ],
          },
          {
            type: "callout",
            text: "Apply the principle of least privilege: employees should have the minimum access required to do their jobs.",
          },
        ],
      },
      {
        id: "back-up-critical-information",
        title: "5. Back Up Critical Information",
        blocks: [
          {
            type: "paragraph",
            text: "Backups are essential for recovering from ransomware, accidental deletion, hardware failure, or other incidents.",
          },
          {
            type: "checklist",
            items: [
              "Identify critical systems and data.",
              "Automate backups wherever possible.",
              "Keep more than one backup copy.",
              "Maintain at least one backup that attackers cannot easily modify or delete.",
              "Test backups regularly.",
              "Document how systems and data would be restored.",
            ],
          },
          {
            type: "callout",
            text: "A backup that has never been tested is not a reliable recovery plan. Perform restoration tests regularly to confirm that critical data can actually be recovered.",
          },
        ],
      },
      {
        id: "secure-cloud-applications",
        title: "6. Secure Cloud Applications",
        blocks: [
          {
            type: "paragraph",
            text: "Growing businesses often depend heavily on Microsoft 365, Google Workspace, SaaS platforms, CRM systems, accounting software, and other cloud services.",
          },
          {
            type: "checklist",
            items: [
              "Maintain an inventory of cloud applications.",
              "Enable MFA and security features provided by each platform.",
              "Review external sharing settings.",
              "Remove inactive users and unnecessary integrations.",
              "Review third-party applications connected to business accounts.",
              "Assign application administrators carefully.",
            ],
          },
          {
            type: "callout",
            text: "Know which cloud services contain your most sensitive information and prioritize security controls on those systems first.",
          },
        ],
      },
      {
        id: "manage-employees-contractors",
        title: "7. Manage Employees and Contractors",
        blocks: [
          {
            type: "paragraph",
            text: "Security should be part of the employee lifecycle, not something considered only after an incident.",
          },
          { type: "subheading", title: "When someone joins:" },
          {
            type: "checklist",
            items: [
              "Provide security awareness training.",
              "Create only the accounts and access they require.",
              "Explain how to report security concerns.",
            ],
          },
          { type: "subheading", title: "When someone changes roles:" },
          {
            type: "checklist",
            items: [
              "Review their existing permissions.",
              "Remove access they no longer need.",
            ],
          },
          { type: "subheading", title: "When someone leaves:" },
          {
            type: "checklist",
            items: [
              "Disable accounts promptly.",
              "Revoke remote access and sessions.",
              "Recover company devices and credentials.",
              "Review access to shared systems and applications.",
            ],
          },
          {
            type: "callout",
            text: "Use a documented joiner-mover-leaver process so security does not depend on someone remembering to perform these tasks.",
          },
        ],
      },
      {
        id: "secure-vendors",
        title: "8. Secure Your Vendors",
        blocks: [
          {
            type: "paragraph",
            text: "Your business may depend on accountants, software providers, IT companies, consultants, payment providers, and other third parties.",
          },
          {
            type: "checklist",
            items: [
              "Maintain a list of important vendors.",
              "Understand what information each vendor can access.",
              "Limit vendor access to what is necessary.",
              "Use contracts that address security and data protection where appropriate.",
              "Review security requirements for high-risk vendors.",
              "Remove vendor access when the relationship ends.",
            ],
          },
          {
            type: "callout",
            text: "Treat third-party access as part of your security perimeter. A trusted vendor should still receive only the access they need.",
          },
        ],
      },
      {
        id: "prepare-for-incidents",
        title: "9. Prepare for Security Incidents",
        blocks: [
          {
            type: "paragraph",
            text: "Even strong security controls cannot guarantee that an incident will never happen. Preparation can significantly reduce the impact.",
          },
          {
            type: "paragraph",
            text: "Create a simple incident response plan covering:",
          },
          {
            type: "checklist",
            items: [
              "Who should be contacted?",
              "Who has authority to make decisions?",
              "How should compromised accounts be disabled?",
              "How should affected devices be isolated?",
              "Who communicates with customers, employees, vendors, or regulators?",
              "How will systems be restored?",
            ],
          },
          {
            type: "callout",
            text: "Keep emergency contact information and recovery procedures accessible even if your normal systems are unavailable.",
          },
        ],
      },
      {
        id: "ongoing-security-process",
        title: "10. Make Security an Ongoing Process",
        blocks: [
          {
            type: "paragraph",
            text: "Security should not be treated as a once-a-year exercise. As the business grows, its risks change.",
          },
          { type: "paragraph", text: "At least periodically:" },
          {
            type: "checklist",
            items: [
              "Review administrator accounts.",
              "Review user permissions.",
              "Check that former employees no longer have access.",
              "Review critical software and devices for missing updates.",
              "Test backups.",
              "Review important vendors.",
              "Check security logs and alerts where available.",
              "Refresh employee security awareness.",
              "Review and update the incident response plan.",
            ],
          },
        ],
      },
      {
        id: "simple-priority-model",
        title: "A Simple Priority Model for Growing Businesses",
        blocks: [
          {
            type: "paragraph",
            text: "If your business is starting from a low security baseline, do not try to implement everything at once.",
          },
          {
            type: "paragraph",
            text: "Start with the controls that reduce the greatest everyday risks:",
          },
          {
            type: "priorities",
            items: [
              {
                label: "Protect identities",
                detail: "MFA, strong passwords, least privilege",
              },
              {
                label: "Protect devices",
                detail: "Patching, encryption, endpoint security",
              },
              {
                label: "Protect data",
                detail: "Access controls, secure cloud storage, backups",
              },
              {
                label: "Protect people",
                detail: "Security awareness and phishing reporting",
              },
              {
                label: "Prepare to recover",
                detail: "Tested backups and an incident response plan",
              },
              {
                label: "Manage third parties",
                detail: "Vendor access and security requirements",
              },
              {
                label: "Review continuously",
                detail: "Regular security checks and improvements",
              },
            ],
          },
        ],
      },
      {
        id: "final-thought",
        title: "Final Thought",
        blocks: [
          {
            type: "paragraph",
            text: "For a growing business, effective cybersecurity is less about having the most expensive security technology and more about consistently applying the right basic controls.",
          },
          {
            type: "paragraph",
            text: "A practical security program should make everyday activities safer: employees should know how to protect their accounts, devices should be updated, sensitive information should be restricted, backups should work, and the business should know what to do when something goes wrong.",
          },
          {
            type: "paragraph",
            text: "Small, repeatable security controls can significantly reduce risk when they are applied consistently across the business.",
          },
          {
            type: "paragraph",
            text: "The best time to strengthen these controls is before the business experiences a security incident — not after.",
          },
        ],
      },
    ],
    relatedService: {
      label: "View our Security & MSSP services",
      href: "/services/managed-services-msp-toolchain/#security-mssp",
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
