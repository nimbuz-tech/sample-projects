export type Product = {
  slug: string;
  name: string;
  category: string;
  badge: string | null;
  tagline: string;
  description: string;
  price: number;
  delivery: string;
  includes: string[];
  for: string[];
  highlights: string[];
};

export const products: Product[] = [
  {
    slug: "infra-starter-pack",
    name: "Infra Starter Pack",
    category: "Bundles",
    badge: "Best seller",
    tagline: "Credits + monitoring + deployment toolkit.",
    description:
      "Kickstart your SaaS or internal platform with a curated pack: infra credits, monitoring tools, and deploy templates.",
    price: 8999,
    delivery: "Instant email delivery",
    includes: [
      "Cloud credits from a partner provider",
      "Monitoring & alerting templates",
      "Deploy blueprints for web apps",
    ],
    for: [
      "Founders spinning up MVPs",
      "Small teams without a full-time DevOps engineer",
    ],
    highlights: [
      "Fastest way to go from local to prod",
      "Opinionated defaults with room to customize",
      "Designed for cost-aware teams",
    ],
  },
  {
    slug: "devops-ci-cd-toolkit",
    name: "DevOps CI/CD Toolkit",
    category: "DevOps",
    badge: "New",
    tagline: "Pipelines, templates, and scripts.",
    description:
      "Ready-to-use CI/CD workflows with docs, reusable actions, and guardrails your team can plug in quickly.",
    price: 4999,
    delivery: "Downloadable bundle",
    includes: [
      "GitHub Actions / GitLab templates",
      "Security & quality gates",
      "Rollout & rollback examples",
    ],
    for: [
      "Engineering teams adopting continuous delivery",
      "Teams modernizing legacy pipelines",
    ],
    highlights: [
      "Reduce failed deploys",
      "Standardize delivery across services",
      "Improve developer confidence",
    ],
  },
  {
    slug: "observability-starter-kit",
    name: "Observability Starter Kit",
    category: "Monitoring",
    badge: null,
    tagline: "Dashboards, alerts, and runbooks.",
    description:
      "A practical starting kit for visibility into your apps: dashboards, alert rules, and incident templates.",
    price: 4299,
    delivery: "Instant email delivery",
    includes: [
      "Pre-built dashboards for web APIs",
      "Alerting rules with sensible defaults",
      "Incident response templates",
    ],
    for: [
      "Teams new to SRE & observability",
      "Startups growing beyond basic logs",
    ],
    highlights: [
      "Cut time-to-detect issues",
      "Share a common view of system health",
      "Introduce on-call with less chaos",
    ],
  },
];
