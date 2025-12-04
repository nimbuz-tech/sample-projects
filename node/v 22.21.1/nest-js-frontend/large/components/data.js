export const courses = [
  {
    slug: "fullstack-nextjs-kubernetes",
    title: "Full‑Stack Apps with Next.js & Kubernetes",
    category: "Web Dev",
    level: "Intermediate",
    duration: "6h 30m",
    lessons: 34,
    price: 2499,
    instructor: "Priya Sharma",
    description:
      "Build, containerize, and deploy a full‑stack Next.js application on Kubernetes step by step.",
    highlights: [
      "Structure production-ready Next.js apps",
      "Containerize apps with Docker",
      "Deploy to a managed Kubernetes cluster",
    ],
    curriculum: [
      { title: "Project overview & architecture", type: "Video", length: "18 min" },
      { title: "Next.js app setup & routing", type: "Video", length: "42 min" },
      { title: "Dockerizing the application", type: "Video", length: "35 min" },
      { title: "Kubernetes manifests & config", type: "Video", length: "50 min" },
      { title: "CI/CD pipeline overview", type: "Video", length: "28 min" },
    ],
  },
  {
    slug: "aws-for-developers",
    title: "AWS for Modern Application Developers",
    category: "Cloud",
    level: "Beginner",
    duration: "5h 10m",
    lessons: 27,
    price: 1999,
    instructor: "Rahul Iyer",
    description:
      "Learn the core AWS services you actually use when building real-world web applications.",
    highlights: [
      "Understand core AWS building blocks",
      "Host secure web applications",
      "Use managed databases effectively",
    ],
    curriculum: [
      { title: "AWS fundamentals for developers", type: "Video", length: "22 min" },
      { title: "VPC, subnets & networking basics", type: "Video", length: "31 min" },
      { title: "EC2 & auto scaling groups", type: "Video", length: "29 min" },
      { title: "RDS & managed databases", type: "Video", length: "36 min" },
      { title: "S3, CloudFront & static hosting", type: "Video", length: "33 min" },
    ],
  },
  {
    slug: "devops-ci-cd-pipelines",
    title: "DevOps Foundations: CI/CD Pipelines",
    category: "DevOps",
    level: "Intermediate",
    duration: "4h 45m",
    lessons: 24,
    price: 1799,
    instructor: "Sarah Lee",
    description:
      "Design and implement CI/CD pipelines that keep your deployments fast, safe, and repeatable.",
    highlights: [
      "Model practical CI/CD workflows",
      "Automate testing & quality checks",
      "Ship changes with confidence",
    ],
    curriculum: [
      { title: "CI/CD concepts in practice", type: "Video", length: "20 min" },
      { title: "Pipeline design patterns", type: "Video", length: "32 min" },
      { title: "Integrating automated testing", type: "Video", length: "37 min" },
      { title: "Blue‑green & canary deployments", type: "Video", length: "41 min" },
      { title: "Maintaining pipelines at scale", type: "Video", length: "26 min" },
    ],
  },
];

export const instructors = [
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "Senior Platform Engineer",
    bio: "Designs scalable PaaS solutions and helps teams ship faster on Kubernetes and cloud.",
    courses: 5,
    experience: 9,
  },
  {
    name: "Rahul Iyer",
    initials: "RI",
    role: "Cloud Architect",
    bio: "Works with startups to build reliable, cost‑efficient infrastructure on AWS.",
    courses: 4,
    experience: 11,
  },
  {
    name: "Sarah Lee",
    initials: "SL",
    role: "DevOps Consultant",
    bio: "Helps engineering teams adopt continuous delivery and modern DevOps practices.",
    courses: 6,
    experience: 8,
  },
];
