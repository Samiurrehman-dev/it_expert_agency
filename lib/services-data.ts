import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AppWindow,
  Bot,
  Boxes,
  BrainCircuit,
  Braces,
  Cloud,
  ClipboardCheck,
  Database,
  DatabaseBackup,
  Eye,
  FileCheck2,
  Gauge,
  GitBranch,
  Globe2,
  Headphones,
  KeyRound,
  Laptop,
  Layers3,
  LockKeyhole,
  Mail,
  MessagesSquare,
  MonitorCog,
  Network,
  RadioTower,
  RefreshCw,
  Repeat2,
  Route,
  Scale,
  ScanSearch,
  Server,
  ShieldCheck,
  ShieldAlert,
  Siren,
  ScrollText,
  Smartphone,
  Terminal,
  Waypoints,
  Workflow,
  Zap,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  slug: string;
  description: string;
  tools: readonly string[];
  icon: LucideIcon;
  subgroup?: string;
};

export type ServiceCategory = {
  number: string;
  title: string;
  shortTitle: string;
  slug: string;
  accent: string;
  services: readonly ServiceItem[];
  extraChips?: readonly string[];
};

export const serviceCategories: readonly ServiceCategory[] = [
  {
    number: "01",
    title: "Infrastructure & Cloud Platforms",
    shortTitle: "Infrastructure & Cloud",
    slug: "infrastructure-cloud-platforms",
    accent: "bg-primary-400",
    services: [
      {
        title: "On-Premises Infrastructure",
        slug: "on-premises-infrastructure",
        description:
          "Physical and virtualised data centres, bare-metal servers, storage, and local networking.",
        tools: [
          "VMware vSphere",
          "Hyper-V",
          "KVM/QEMU",
          "Proxmox",
          "HPE/Dell Hardware",
          "NetApp/Pure Storage",
        ],
        icon: Server,
      },
      {
        title: "Public Cloud",
        slug: "public-cloud",
        description:
          "Cloud-agnostic architecture and engineering across every major hyperscaler.",
        tools: [
          "AWS",
          "Azure",
          "Google Cloud",
          "OCI",
          "Alibaba Cloud",
          "Huawei Cloud",
        ],
        icon: Cloud,
      },
      {
        title: "Hybrid & Private Cloud",
        slug: "hybrid-private-cloud",
        description:
          "Secure hybrid architectures that connect on-premises workloads to cloud and private platforms.",
        tools: [
          "Azure Arc",
          "AWS Outposts",
          "VMware Cloud",
          "OpenStack",
          "Nutanix AHV",
        ],
        icon: Layers3,
      },
      {
        title: "Networking",
        slug: "networking",
        description:
          "LAN/WAN, firewall, switching, load balancing, DNS, and zero-trust access at any scale.",
        tools: ["Cisco/Fortinet", "Palo Alto", "pfSense", "Meraki", "F5/NGINX"],
        icon: Network,
      },
      {
        title: "Containers & Kubernetes",
        slug: "containers-kubernetes",
        description:
          "Container platforms, Kubernetes operations, Helm, and service mesh for cloud-native workloads.",
        tools: ["Kubernetes/RKE2", "Docker/Podman", "Rancher", "Helm", "Istio"],
        icon: Boxes,
      },
      {
        title: "IaC & DevOps",
        slug: "iac-devops",
        description:
          "Infrastructure as Code, CI/CD, and GitOps for repeatable, auditable delivery.",
        tools: ["Terraform", "Ansible/AWX", "GitLab CI", "Jenkins", "ArgoCD"],
        icon: Workflow,
      },
    ],
  },
  {
    number: "02",
    title: "Operating Systems & Endpoint Management",
    shortTitle: "Operating Systems",
    slug: "operating-systems-endpoint-management",
    accent: "bg-primary-500",
    services: [
      {
        title: "Linux — RHEL Family",
        slug: "linux-rhel-family",
        description:
          "RHEL, Rocky, AlmaLinux, and Oracle Linux lifecycle, kernel, and package management.",
        tools: ["RHEL 8/9", "Rocky", "OL"],
        icon: Terminal,
      },
      {
        title: "Linux — Debian Family",
        slug: "linux-debian-family",
        description:
          "Ubuntu, Debian, and Kali lifecycle, systemd hardening, and unattended upgrades.",
        tools: ["Ubuntu LTS", "Debian 12", "Kali"],
        icon: Terminal,
      },
      {
        title: "Windows Server",
        slug: "windows-server",
        description:
          "Windows Server, identity, policy, clustering, IIS, ADFS, and PowerShell engineering.",
        tools: ["WS 2022", "AD DS", "PowerShell"],
        icon: MonitorCog,
      },
      {
        title: "macOS & BSD",
        slug: "macos-bsd",
        description:
          "Managed Apple endpoints plus FreeBSD and OpenBSD support for security appliances.",
        tools: ["Jamf Pro", "macOS", "FreeBSD"],
        icon: Laptop,
      },
      {
        title: "MDM (Mobile Device Management)",
        slug: "mobile-device-management",
        description:
          "Secure enrollment, policy enforcement, application deployment, compliance, and remote lifecycle management for mobile devices.",
        tools: [
          "Microsoft Intune",
          "Jamf Pro",
          "VMware Workspace ONE",
          "Kandji",
        ],
        icon: Smartphone,
      },
      {
        title: "OS-Level MSP Services",
        slug: "os-level-msp-services",
        description:
          "Unified patching, hardening, monitoring, and lifecycle operations across mixed server and endpoint estates.",
        tools: ["RMM", "Patch Orchestration", "SIEM", "ITSM"],
        icon: Server,
      },
    ],
  },
  {
    number: "03",
    title: "Application & Platform Engineering",
    shortTitle: "Application & Platform",
    slug: "application-platform-engineering",
    accent: "bg-primary-600",
    services: [
      {
        title: "ERP/CRM Systems",
        slug: "erp-crm-systems",
        description:
          "Installation, upgrades, integrations, and managed hosting for critical business platforms.",
        tools: ["Odoo", "SAP B1", "Dynamics 365"],
        icon: AppWindow,
        subgroup: "Monolithic Systems",
      },
      {
        title: "Legacy App Hosting",
        slug: "legacy-app-hosting",
        description:
          "Lifecycle, hardening, and migration planning for established Java and .NET applications.",
        tools: ["JBoss EAP", "Tomcat", "WebLogic", ".NET"],
        icon: RefreshCw,
        subgroup: "Monolithic Systems",
      },
      {
        title: "Integration Platforms",
        slug: "integration-platforms",
        description:
          "Middleware management, API gateway operations, message queues, and ESB administration.",
        tools: ["MuleSoft RTF", "IBM MQ", "WSO2"],
        icon: GitBranch,
        subgroup: "Monolithic Systems",
      },
      {
        title: "Container Orchestration",
        slug: "container-orchestration",
        description:
          "Kubernetes-native deployment, Helm chart management, and GitOps delivery workflows.",
        tools: ["K8s", "ArgoCD", "Helm", "Flux"],
        icon: Boxes,
        subgroup: "Microservices",
      },
      {
        title: "API Gateways & Service Mesh",
        slug: "api-gateways-service-mesh",
        description:
          "Traffic management, mTLS, observability, and zero-trust service authentication.",
        tools: ["Kong", "Istio", "Envoy", "Linkerd"],
        icon: Route,
        subgroup: "Microservices",
      },
      {
        title: "Serverless & PaaS",
        slug: "serverless-paas",
        description:
          "Operational support for serverless platforms and event-driven architectures.",
        tools: ["Lambda", "Azure Functions", "Cloud Run"],
        icon: Zap,
        subgroup: "Microservices",
      },
      {
        title: "Web & App Servers",
        slug: "web-app-servers",
        description:
          "SSL, hardening, reverse proxy, performance, and caching for web application tiers.",
        tools: ["Apache", "NGINX", "IIS"],
        icon: Globe2,
        subgroup: "Server Roles",
      },
      {
        title: "Mail & Collaboration",
        slug: "mail-collaboration",
        description:
          "Mail flow, DMARC, anti-spam, collaboration administration, and managed migrations.",
        tools: ["Exchange", "M365", "Postfix"],
        icon: Mail,
        subgroup: "Server Roles",
      },
      {
        title: "Identity & Directory",
        slug: "identity-directory",
        description:
          "Identity lifecycle, SSO, SAML/OIDC, federation, and privileged access management.",
        tools: ["AD/LDAP", "Keycloak", "Okta"],
        icon: KeyRound,
        subgroup: "Server Roles",
      },
      {
        title: "Relational Databases",
        slug: "relational-databases",
        description:
          "DBA services, high availability, disaster recovery, tuning, backup, and recovery.",
        tools: ["MSSQL", "PostgreSQL", "Oracle DB"],
        icon: Database,
        subgroup: "Data & Databases",
      },
      {
        title: "NoSQL & Cache",
        slug: "nosql-cache",
        description:
          "Managed clusters, index optimisation, resilience, and replication for modern data stores.",
        tools: ["MongoDB", "Redis", "Elastic"],
        icon: Braces,
        subgroup: "Data & Databases",
      },
      {
        title: "Data Pipelines",
        slug: "data-pipelines",
        description:
          "Data engineering support for batch processing, orchestration, and streaming workloads.",
        tools: ["Kafka", "Spark", "Airflow"],
        icon: Waypoints,
        subgroup: "Data & Databases",
      },
    ],
  },
  {
    number: "04",
    title: "Managed Services & MSP Toolchain",
    shortTitle: "Managed Services & MSP",
    slug: "managed-services-msp-toolchain",
    accent: "bg-accent-700",
    services: [
      {
        title: "Monitoring & AIOps",
        slug: "monitoring-aiops",
        description:
          "Continuous visibility, alerting, observability, and event intelligence across the estate.",
        tools: [
          "Splunk SIEM",
          "SolarWinds NPM/SAM",
          "PRTG",
          "Zabbix",
          "Grafana/Prometheus",
          "Datadog",
          "New Relic",
          "Dynatrace",
        ],
        icon: Activity,
      },
      {
        title: "Security & MSSP",
        slug: "security-mssp",
        description:
          "Managed detection, vulnerability management, endpoint security, and SIEM operations.",
        tools: [
          "Qualys VMDR",
          "CrowdStrike",
          "Fidelis EDR",
          "Trend Micro DSA",
          "Tenable.io",
          "Rapid7",
          "CloudGuard",
          "Wazuh",
        ],
        icon: ShieldCheck,
      },
      {
        title: "ITSM & Helpdesk",
        slug: "itsm-helpdesk",
        description:
          "Toolchain-ready service desks with structured incident, request, and change management.",
        tools: [
          "ServiceNow",
          "ConnectWise",
          "Autotask/Datto",
          "Jira Service Management",
          "Freshservice",
          "Zendesk",
          "Halo PSA",
        ],
        icon: Headphones,
      },
      {
        title: "Backup & Disaster Recovery",
        slug: "backup-disaster-recovery",
        description:
          "Protected workloads, tested restores, resilient replicas, and practical recovery planning.",
        tools: [
          "Veeam B&R",
          "Acronis",
          "Commvault",
          "Zerto",
          "Azure Backup",
          "AWS Backup",
          "Cohesity",
        ],
        icon: DatabaseBackup,
      },
      {
        title: "Automation & RMM",
        slug: "automation-rmm",
        description:
          "Automated operations, remote monitoring, configuration management, and delivery pipelines.",
        tools: [
          "Ansible AWX",
          "NinjaRMM",
          "ConnectWise Automate",
          "Puppet",
          "Chef",
          "Salt",
          "GitLab CI/CD",
        ],
        icon: Bot,
      },
      {
        title: "IAM & PAM",
        slug: "iam-pam",
        description:
          "Identity governance, privileged access control, federation, and secure authentication.",
        tools: [
          "CyberArk",
          "BeyondTrust",
          "Okta",
          "Azure AD/Entra",
          "Keycloak",
          "SailPoint",
          "Delinea",
        ],
        icon: LockKeyhole,
      },
      {
        title: "Network Security",
        slug: "network-security",
        description:
          "Next-generation firewall, zero-trust access, threat analytics, and secure remote connectivity.",
        tools: [
          "Palo Alto NGFW",
          "Fortinet",
          "Cisco FTD",
          "Cloudflare ZTNA",
          "GlobalProtect",
          "Zscaler",
          "Darktrace",
        ],
        icon: RadioTower,
      },
    ],
  },
  {
    number: "05",
    title: "Observability & Reliability Engineering",
    shortTitle: "Observability & Reliability",
    slug: "observability-reliability-engineering",
    accent: "bg-primary-400",
    services: [
      {
        title: "Full-Stack Observability",
        slug: "full-stack-observability",
        description:
          "Unified logs, metrics, and traces across infrastructure, apps, and cloud-native workloads for faster root-cause analysis.",
        tools: [
          "Grafana/Prometheus",
          "Datadog",
          "New Relic",
          "Dynatrace",
          "Elastic Observability",
          "Honeycomb",
        ],
        icon: Gauge,
      },
      {
        title: "APM & Distributed Tracing",
        slug: "apm-distributed-tracing",
        description:
          "Application performance monitoring and end-to-end tracing across microservices and API calls.",
        tools: ["OpenTelemetry", "Jaeger", "AppDynamics", "New Relic APM"],
        icon: ScanSearch,
      },
      {
        title: "SRE & Incident Response",
        slug: "sre-incident-response",
        description:
          "On-call engineering, SLO/SLA management, alert tuning, and post-incident reviews to reduce MTTR.",
        tools: ["PagerDuty", "Opsgenie", "Grafana OnCall", "Statuspage"],
        icon: Siren,
      },
      {
        title: "Log Management & Analytics",
        slug: "log-management-analytics",
        description:
          "Centralized log aggregation, retention, and analytics for compliance and troubleshooting.",
        tools: ["Splunk", "ELK/Elastic Stack", "Graylog", "Loki"],
        icon: ScrollText,
      },
    ],
  },
  {
    number: "06",
    title: "Governance, Risk & Compliance (GRC)",
    shortTitle: "Governance, Risk & Compliance",
    slug: "governance-risk-compliance",
    accent: "bg-primary-500",
    services: [
      {
        title: "Compliance Automation",
        slug: "compliance-automation",
        description:
          "Continuous control monitoring and automated evidence collection for audit readiness.",
        tools: ["Drata", "Vanta", "OneTrust", "ServiceNow GRC"],
        icon: ClipboardCheck,
      },
      {
        title: "Risk Management & Assessments",
        slug: "risk-management-assessments",
        description:
          "Enterprise and IT risk register management, vendor risk assessments, and third-party risk scoring.",
        tools: ["LogicGate", "Archer (RSA)", "MetricStream"],
        icon: ShieldAlert,
      },
      {
        title: "Framework & Standards Alignment",
        slug: "framework-standards-alignment",
        description:
          "Implementation and audit support for major security, privacy, and industry frameworks and standards.",
        tools: [
          "ISO 27001",
          "SOC 2",
          "NIST CSF",
          "HIPAA",
          "PCI-DSS",
          "GDPR",
          "NCA/SAMA (GCC)",
        ],
        icon: Scale,
      },
      {
        title: "Policy & Audit Support",
        slug: "policy-audit-support",
        description:
          "Policy authoring, control mapping, internal audit preparation, and auditor liaison support.",
        tools: [],
        icon: FileCheck2,
      },
    ],
  },
  {
    number: "07",
    title: "AI & Intelligent Automation",
    shortTitle: "AI & Intelligent Automation",
    slug: "ai-intelligent-automation",
    accent: "bg-primary-600",
    services: [
      {
        title: "AI-Powered MSP Operations",
        slug: "ai-powered-msp-operations",
        description:
          "AIOps for noise reduction, anomaly detection, and predictive alerting layered on existing monitoring stacks.",
        tools: ["Moogsoft", "BigPanda", "Grafana AI", "Datadog Watchdog"],
        icon: BrainCircuit,
      },
      {
        title: "AI Observability & Governance",
        slug: "ai-observability-governance",
        description:
          "Visibility and control over AI and LLM tool usage, including model inventory, data-access tracking, and audit trails for AI-assisted workflows.",
        tools: ["Fiddler AI", "Zenity", "Arize"],
        icon: Eye,
      },
      {
        title: "Intelligent Helpdesk & Chatbots",
        slug: "intelligent-helpdesk-chatbots",
        description:
          "AI-assisted ticket triage, auto-categorization, and L1 chatbot deflection integrated with ITSM platforms.",
        tools: ["ServiceNow AI", "Freshservice Freddy", "Microsoft Copilot"],
        icon: MessagesSquare,
      },
      {
        title: "RPA & Workflow Automation",
        slug: "rpa-workflow-automation",
        description:
          "Robotic process automation for repetitive back-office and IT operations tasks.",
        tools: ["UiPath", "Power Automate", "n8n"],
        icon: Repeat2,
      },
    ],
  },
] as const;

export function getServiceHref(categorySlug: string, serviceSlug: string) {
  return categorySlug === "operating-systems-endpoint-management"
    ? `/services/${categorySlug}/${serviceSlug}`
    : `/services/${categorySlug}#${serviceSlug}`;
}

export const markets = [
  {
    name: "United States",
    detail: "NOC, SOC, helpdesk, and L2/L3 engineering",
  },
  {
    name: "United Kingdom",
    detail: "Managed services back-office, cloud ops, and ITSM support",
  },
  {
    name: "Canada",
    detail: "Infrastructure ops, security compliance, and DevOps staffing",
  },
  {
    name: "GCC / Saudi Arabia",
    detail: "NCA/SAMA compliance, OCI cloud ops, and Arabic-speaking staff",
  },
] as const;

export const valueProps = [
  "60–70% cost savings vs onshore hiring",
  "Pre-certified AWS, Azure, OCI, Qualys, CISSP, and CCNP staff",
  "24×7 NOC/SOC shift coverage across time zones",
  "Dedicated or shared team models",
  "English-fluent and toolchain-ready from Day 1",
  "NDA-bound, ISO 27001-aligned security practices",
  "Fast onboarding with talent deployed in 1–2 weeks",
  "Contract, permanent, or augmentation models",
] as const;
