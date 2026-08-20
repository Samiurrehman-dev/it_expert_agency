export const osCategorySlug = "operating-systems-endpoint-management";

export type OSCoverageItem = {
  title: string;
  description: string;
};

export type OSServicePageContent = {
  slug: string;
  navTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: readonly string[];
  coverageIntro: string;
  coverage: readonly OSCoverageItem[];
  tools: readonly string[];
};

export const osServicePages: readonly OSServicePageContent[] = [
  {
    slug: "linux-rhel-family",
    navTitle: "Linux — RHEL Family",
    title: "RHEL Family Linux Support & Management",
    metaTitle: "RHEL & Enterprise Linux Support | IT Experts Agency",
    metaDescription:
      "Managed RHEL, Rocky Linux, AlmaLinux and Oracle Linux support covering patching, hardening, monitoring, upgrades and server lifecycle operations.",
    eyebrow: "Enterprise Linux operations",
    intro: [
      "Keep enterprise Linux estates secure, stable and ready for change with experienced RHEL support and Linux server management. We operate Red Hat Enterprise Linux, Rocky Linux, AlmaLinux and Oracle Linux inside your existing ITSM, monitoring and change-control workflows.",
      "From day-to-day administration and CVE remediation to major-version upgrades, our engineers provide documented, MSP-ready coverage for business-critical workloads and mixed enterprise Linux environments.",
    ],
    coverageIntro:
      "A practical operating model for the security, reliability and lifecycle of RHEL-family servers.",
    coverage: [
      {
        title: "Infrastructure & Administration",
        description:
          "Manage packages, repositories, systemd services, storage, networking and scheduled administration across physical, virtual and cloud-hosted Linux servers.",
      },
      {
        title: "Patch & Update Management",
        description:
          "Plan tested patch cycles around approved maintenance windows, with pre-checks, dependency review, controlled rollout and rollback procedures.",
      },
      {
        title: "Vulnerability Management",
        description:
          "Assess Red Hat and vendor advisories, prioritise exploitable CVEs, remediate affected hosts and validate that risk has been removed.",
      },
      {
        title: "CIS Benchmarking & Security Baselines",
        description:
          "Compare configurations with appropriate CIS benchmarks, document gaps and implement approved baseline improvements with clear reporting.",
      },
      {
        title: "Security Hardening",
        description:
          "Strengthen SELinux, SSH, sudo, firewall, service and file-permission settings while preserving application requirements through documented exceptions.",
      },
      {
        title: "Golden Images & Configuration Baselines",
        description:
          "Build repeatable RHEL-family templates with standard packages, hardening, logging and agent configurations for consistent deployment.",
      },
      {
        title: "Monitoring & Performance",
        description:
          "Track compute, memory, storage, logs and service health, then investigate bottlenecks through evidence-led performance tuning.",
      },
      {
        title: "Identity & Access Management",
        description:
          "Integrate Linux hosts with enterprise directories and manage authentication, privileged access, keys and role-based administrative controls.",
      },
      {
        title: "Incident & Problem Management",
        description:
          "Provide L2/L3 troubleshooting, root-cause analysis and coordinated escalation for kernel, package, service and availability incidents.",
      },
      {
        title: "Lifecycle & Upgrade Management",
        description:
          "Track vendor lifecycles and plan in-place upgrades or migrations with compatibility checks, test plans and post-change validation.",
      },
    ],
    tools: [
      "RHEL 8/9",
      "Rocky Linux",
      "AlmaLinux",
      "Oracle Linux",
      "Satellite",
      "Ansible",
      "SELinux",
      "systemd",
    ],
  },
  {
    slug: "linux-debian-family",
    navTitle: "Linux — Debian Family",
    title: "Debian & Ubuntu Server Support",
    metaTitle: "Ubuntu & Debian Server Support | IT Experts Agency",
    metaDescription:
      "Ubuntu server support and Debian server management for patching, hardening, monitoring, vulnerability remediation and lifecycle upgrades.",
    eyebrow: "Open-source Linux operations",
    intro: [
      "Run dependable open-source infrastructure with managed Ubuntu server support and Debian server management. Our engineers cover stable production estates, cloud workloads and approved security use cases while working within your existing operational controls.",
      "Services include Linux patch management, AppArmor and SSH hardening, systemd administration, monitoring and carefully planned distribution upgrades for MSP and enterprise environments.",
    ],
    coverageIntro:
      "Consistent administration and risk control across Ubuntu, Debian and approved specialist builds.",
    coverage: [
      {
        title: "Infrastructure & Administration",
        description:
          "Administer APT repositories, packages, systemd units, storage, networking and core services across Ubuntu and Debian estates.",
      },
      {
        title: "Patch & Update Management",
        description:
          "Operate tested update rings, unattended-upgrade policies and maintenance windows with exception handling and reliable rollback plans.",
      },
      {
        title: "Vulnerability Management",
        description:
          "Map Ubuntu and Debian security advisories to affected assets, prioritise remediation and confirm fixed package versions after deployment.",
      },
      {
        title: "CIS Benchmarking & Security Baselines",
        description:
          "Assess applicable CIS guidance, identify configuration drift and establish measurable baselines without disrupting supported workloads.",
      },
      {
        title: "Security Hardening",
        description:
          "Harden AppArmor, SSH, sudo, nftables, services and permissions while retaining approved access paths and application compatibility.",
      },
      {
        title: "Golden Images & Configuration Baselines",
        description:
          "Maintain repeatable cloud and virtual-machine images with standard agents, repositories, security controls and deployment settings.",
      },
      {
        title: "Monitoring & Performance",
        description:
          "Monitor resources, logs and daemons, then investigate capacity, I/O, memory and process issues before they affect service.",
      },
      {
        title: "Identity & Access Management",
        description:
          "Connect hosts to directory services and govern local accounts, SSH keys, privileged roles and authentication policies.",
      },
      {
        title: "Incident & Problem Management",
        description:
          "Resolve boot, package, network and service failures with documented triage, root-cause findings and durable corrective actions.",
      },
      {
        title: "Lifecycle & Upgrade Management",
        description:
          "Plan Ubuntu LTS and Debian release upgrades around application support, repositories, test evidence and recovery requirements.",
      },
    ],
    tools: [
      "Ubuntu LTS",
      "Debian 12",
      "Kali (approved use)",
      "APT",
      "Landscape",
      "Ansible",
      "AppArmor",
      "systemd",
    ],
  },
  {
    slug: "windows-server",
    navTitle: "Windows Server",
    title: "Windows Server Management & Support",
    metaTitle: "Windows Server & Active Directory Support | IT Experts Agency",
    metaDescription:
      "Windows Server management, Active Directory support, Windows patch management, GPO hardening, monitoring and lifecycle planning for MSPs.",
    eyebrow: "Microsoft infrastructure operations",
    intro: [
      "Protect availability and identity services with structured Windows Server management and Active Directory support. Our Microsoft engineers operate server roles, Group Policy, IIS, clustering and PowerShell automation across on-premises, hybrid and cloud environments.",
      "Windows patch management, security baselines and lifecycle planning are delivered through your established maintenance windows, approval workflow and service desk for clear ownership and audit-ready evidence.",
    ],
    coverageIntro:
      "End-to-end operational coverage for Microsoft server, identity and application roles.",
    coverage: [
      {
        title: "Server & Role Administration",
        description:
          "Manage Windows Server roles, services, storage, DNS, DHCP, IIS, failover clustering and routine platform administration.",
      },
      {
        title: "Windows Patch Management",
        description:
          "Coordinate WSUS or cloud-managed update rings, test deployments, maintenance windows, restart handling and recovery actions.",
      },
      {
        title: "Vulnerability Management",
        description:
          "Prioritise Microsoft and third-party vulnerabilities, deploy mitigations or fixes and validate remediation against the affected inventory.",
      },
      {
        title: "CIS Benchmarking & GPO Baselines",
        description:
          "Assess Windows CIS benchmarks, translate approved controls into managed GPO baselines and report configuration gaps.",
      },
      {
        title: "Windows Security Hardening",
        description:
          "Harden protocols, services, Defender, firewall, permissions and administrative paths using Microsoft and approved security guidance.",
      },
      {
        title: "Golden Images & Server Builds",
        description:
          "Maintain standard server images and build procedures with approved roles, agents, policies and post-deployment validation.",
      },
      {
        title: "Monitoring & Performance",
        description:
          "Monitor event logs, services, capacity and Windows performance counters, then troubleshoot bottlenecks and recurring faults.",
      },
      {
        title: "Active Directory & Access",
        description:
          "Support AD DS, Group Policy, trusts, authentication, privileged groups and directory health with controlled administrative access.",
      },
      {
        title: "Incident & Problem Management",
        description:
          "Handle server, directory, policy and application-role incidents through triage, restoration, root-cause analysis and escalation.",
      },
      {
        title: "Lifecycle & Upgrade Management",
        description:
          "Plan server version upgrades, role migrations and end-of-support transitions with dependency mapping, testing and fallback paths.",
      },
    ],
    tools: [
      "Windows Server 2022",
      "Active Directory",
      "Group Policy",
      "WSUS",
      "PowerShell",
      "IIS",
      "Microsoft Defender",
      "Azure Arc",
    ],
  },
  {
    slug: "macos-bsd",
    navTitle: "macOS & BSD",
    title: "macOS Management & BSD Support",
    metaTitle: "macOS Management & BSD Support | IT Experts Agency",
    metaDescription:
      "Managed macOS endpoint support, Apple security hardening and FreeBSD or OpenBSD server support covering patching, monitoring and lifecycle operations.",
    eyebrow: "Apple endpoint & BSD operations",
    intro: [
      "Give Apple users consistent, secure support with managed macOS device management, while retaining specialist coverage for BSD-based servers and appliances. We combine Apple endpoint support with practical FreeBSD and OpenBSD administration for mixed technology estates.",
      "Our engineers manage enrolment, updates, security settings, packages, monitoring and version lifecycles within your established service desk and change process.",
    ],
    coverageIntro:
      "Platform-aware support spanning user-focused Apple endpoints and security-oriented BSD systems.",
    coverage: [
      {
        title: "Endpoint & System Administration",
        description:
          "Manage macOS profiles, local settings and packages alongside BSD services, ports, storage, networking and scheduled administration.",
      },
      {
        title: "Patch & Update Management",
        description:
          "Coordinate Apple OS updates and BSD package or base-system updates through tested deployment rings and maintenance windows.",
      },
      {
        title: "Vulnerability Management",
        description:
          "Review Apple and BSD security advisories, identify exposed devices, prioritise action and verify that remediation succeeded.",
      },
      {
        title: "Security Baselines",
        description:
          "Assess Apple-specific and applicable CIS guidance, document configuration gaps and apply approved settings through repeatable controls.",
      },
      {
        title: "Platform Security Hardening",
        description:
          "Strengthen FileVault, Gatekeeper, firewall, permissions, remote access and BSD service configurations without blocking legitimate workflows.",
      },
      {
        title: "Standard Builds & Configuration Baselines",
        description:
          "Create repeatable macOS enrolment profiles and BSD build baselines with required agents, packages, logging and security settings.",
      },
      {
        title: "Monitoring & Performance",
        description:
          "Track endpoint health and BSD system resources, logs, storage and services to resolve reliability or performance degradation.",
      },
      {
        title: "Identity & Access Management",
        description:
          "Integrate directories and identity providers while controlling local accounts, administrator rights, certificates and authentication.",
      },
      {
        title: "Incident & Problem Management",
        description:
          "Investigate device, update, access and BSD service incidents with user-aware restoration and documented root-cause analysis.",
      },
      {
        title: "Lifecycle & Upgrade Management",
        description:
          "Plan macOS major-version adoption and BSD upgrades around hardware support, application compatibility, testing and recovery.",
      },
    ],
    tools: [
      "macOS (current + prior)",
      "Apple Business Manager",
      "Jamf Pro",
      "Kandji",
      "FreeBSD",
      "OpenBSD",
      "FileVault",
      "Homebrew",
    ],
  },
  {
    slug: "mobile-device-management",
    navTitle: "MDM (Mobile Device Management)",
    title: "Mobile Device Management (MDM) Services",
    metaTitle: "Managed MDM & Device Management Support | IT Experts Agency",
    metaDescription:
      "Managed MDM support for secure enrolment, device policy, application delivery, posture reporting, remote actions and endpoint lifecycle management.",
    eyebrow: "Secure device operations",
    intro: [
      "Control business devices from enrolment to retirement with managed mobile device management services. We operate MDM platforms for Apple, Windows, Android and mobile fleets, aligning device settings with your security standards and employee experience.",
      "Our MDM support covers zero-touch enrolment, policy deployment, application management, device posture reporting and controlled remote actions within your approved support and access model.",
    ],
    coverageIntro:
      "A device-level operating model for secure access, consistent configuration and dependable user support.",
    coverage: [
      {
        title: "Device Enrolment & Provisioning",
        description:
          "Configure zero-touch and assisted enrolment workflows, ownership profiles and initial policies for corporate and approved BYOD devices.",
      },
      {
        title: "Policy & Configuration Management",
        description:
          "Deploy Wi-Fi, VPN, email, certificate, restriction and security settings through tested, version-controlled policy groups.",
      },
      {
        title: "Device Posture Management",
        description:
          "Measure encryption, OS version, screen lock and security posture, then route nonconforming devices through approved remediation.",
      },
      {
        title: "Security Baselines",
        description:
          "Translate approved device-security guidance into platform policies, assess gaps and report exceptions without overstating certification.",
      },
      {
        title: "Application Management",
        description:
          "Package, approve, assign, update and retire business applications with licence awareness and staged deployment rings.",
      },
      {
        title: "Identity & Conditional Access",
        description:
          "Connect MDM posture with identity providers, certificates and conditional-access policies to protect corporate resources.",
      },
      {
        title: "Inventory & Reporting",
        description:
          "Maintain trustworthy hardware, software, ownership and posture inventories with dashboards for operations and risk teams.",
      },
      {
        title: "Remote Support & Security Actions",
        description:
          "Perform authorised lock, wipe, passcode reset and lost-mode actions through identity checks and documented approvals.",
      },
      {
        title: "Incident & User Support",
        description:
          "Resolve enrolment, policy, application and access issues while coordinating escalations across service desk and security teams.",
      },
      {
        title: "Device Lifecycle Management",
        description:
          "Manage ownership changes, replacement, retirement and secure deprovisioning so access and business data do not persist unexpectedly.",
      },
    ],
    tools: [
      "Microsoft Intune",
      "Jamf Pro",
      "VMware Workspace ONE",
      "Kandji",
      "Apple Business Manager",
      "Android Enterprise",
      "Windows Autopilot",
      "Entra ID",
    ],
  },
  {
    slug: "os-level-msp-services",
    navTitle: "OS-Level MSP Services",
    title: "Cross-Platform OS-Level MSP Services",
    metaTitle: "Managed OS Services for Mixed Estates | IT Experts Agency",
    metaDescription:
      "Cross-platform managed OS services covering unified patching, monitoring, hardening, incidents and lifecycle management across server and endpoint estates.",
    eyebrow: "Unified operating system delivery",
    intro: [
      "Replace fragmented platform queues with managed OS services spanning Linux, Windows Server, macOS and enrolled endpoints. Our cross-platform server management model standardises recurring operations while retaining the specialist knowledge each operating system requires.",
      "MSPs gain one reporting rhythm for patching, vulnerability remediation, monitoring, incidents and lifecycle risk, delivered inside their existing RMM, ITSM, SIEM and change-control stack.",
    ],
    coverageIntro:
      "One coordinated service layer for mixed estates, shared controls and platform-specific execution.",
    coverage: [
      {
        title: "Cross-Platform Administration",
        description:
          "Coordinate recurring operating-system work across Linux, Windows, macOS and managed devices with clear ownership by platform.",
      },
      {
        title: "Unified Patch Orchestration",
        description:
          "Run common maintenance calendars, deployment rings, approvals and exception workflows while preserving platform-specific testing and rollback.",
      },
      {
        title: "Vulnerability Remediation",
        description:
          "Consolidate exposure data, prioritise risk across platforms, assign remediation and validate results through a shared reporting process.",
      },
      {
        title: "Baseline Management",
        description:
          "Map appropriate CIS and vendor guidance into approved platform baselines, monitor drift and document accepted exceptions.",
      },
      {
        title: "Security Hardening",
        description:
          "Coordinate access, service, protocol, firewall and endpoint controls through platform runbooks and controlled changes.",
      },
      {
        title: "Golden Images & Standard Builds",
        description:
          "Govern image and build baselines across cloud, virtual, server and endpoint deployment workflows for consistent outcomes.",
      },
      {
        title: "Unified Monitoring & Reporting",
        description:
          "Normalise health, log, capacity, patch and lifecycle signals into useful dashboards without losing platform context.",
      },
      {
        title: "Access & Privilege Operations",
        description:
          "Apply joiner, mover, leaver and privileged-access processes across directories, local accounts, keys and administrative roles.",
      },
      {
        title: "Incident & Escalation Management",
        description:
          "Provide a common intake and escalation model backed by platform specialists, documented handoffs and root-cause ownership.",
      },
      {
        title: "Lifecycle & Service Improvement",
        description:
          "Maintain end-of-support roadmaps, upgrade plans and recurring improvement backlogs based on operational evidence and business priorities.",
      },
    ],
    tools: [
      "RMM Platforms",
      "Patch Orchestration",
      "ITSM / PSA",
      "SIEM & Logging",
      "Ansible",
      "Microsoft Intune",
      "Jamf Pro",
      "PowerShell",
    ],
  },
] as const;

export function getOSServicePage(slug: string) {
  return osServicePages.find((page) => page.slug === slug);
}
