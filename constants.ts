import { Experience, Project, SkillCategory, Metric } from './types';
import { Brain, Shield, Server, Globe, Cpu, Code, Layers, Database } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Stephen Adegbola",
  title: "Full-Stack Software Engineer & AI Solutions Architect",
  tagline: "Bridging the gap between Executive Strategy and Technical Execution.",
  email: "theverystephen@gmail.com",
  phone: "+234 816 576 7549",
  location: "Lagos, Nigeria",
  linkedin: "https://www.linkedin.com/in/advanced-automation-developer-stephen-adegbola", // Placeholder based on name
  github: "https://github.com/SteveFunso"
};

export const METRICS: Metric[] = [
  { label: "Transactions Processed", value: 10, suffix: "M+/mo", description: "Scaled microservices for high-volume fintech ops" },
  { label: "Operational Efficiency", value: 40, suffix: "%", description: "Increase in throughput via AI automation" },
  { label: "Secure Accounts", value: 20, suffix: "M+", description: "Protected via Entrust MFA integrations" },
  { label: "Data Querying", value: 10, suffix: "TB+", description: "Proprietary RAG knowledge assistant capacity" }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "cashtoken-head",
    company: "CashToken Africa",
    role: "Head of AI and Business Efficiency",
    period: "Jan 2023 - Present",
    logoInitials: "CT",
    description: [
      "Spearheaded company-wide AI Fusion Initiative, aligning engineering roadmaps with executive growth targets.",
      "Architected a proprietary RAG-powered AI assistant enabling natural language querying of 10TB+ data, reducing bottlenecks by 40%.",
      "Championed strategic partnership with OpenAI's Creative Director to position CashToken as an AI-optimized loyalty platform.",
      "Transformed a 7-member team into certified AI specialists, increasing throughput by 40%."
    ],
    skills: ["RAG", "LLMs", "Strategic Leadership", "n8n", "Python"]
  },
  {
    id: "cashtoken-senior",
    company: "CashToken Africa",
    role: "Senior Software Engineer",
    period: "Aug 2021 - Jan 2023",
    logoInitials: "CT",
    description: [
      "Led end-to-end development of 'OneNUMBA' fintech app, delivering 15% under budget with a 6-member agile team.",
      "Architected Node.js/Docker microservices scaling to $10M+ monthly transactions.",
      "Fortified security with multi-layered protocols (JWT, rate limiting), reducing fraud to <0.01%.",
      "Launched USSD client driving 80% of user onboarding."
    ],
    skills: ["Node.js", "Microservices", "Docker", "Fintech", "Security"]
  },
  {
    id: "cbc",
    company: "CBC Gedu Technologies",
    role: "Software & RPA Developer",
    period: "Jan 2018 - Jan 2021",
    logoInitials: "CBC",
    description: [
      "Orchestrated Africa's largest Entrust MFA upgrade for 20M+ accounts across Access Bank with zero security breaches.",
      "Earned 6 UiPath certifications and automated 30+ workflows.",
      "Consulted for UBA and First Bank on critical infrastructure."
    ],
    skills: ["UiPath", "RPA", "Entrust IDG", "MFA", "Java"]
  },
  {
    id: "campuskit",
    company: "CampusKit",
    role: "Team Lead & Co-founder",
    period: "Oct 2015 - Present",
    logoInitials: "CK",
    description: [
      "Led development of an Android native edu-tech app serving 5,000+ students.",
      "Integrated payments, social forums, and localized e-commerce features.",
      "Won AYEEN award for innovation in education technology."
    ],
    skills: ["Android", "Java", "Startup Leadership", "Product Design"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "agentic-ai-odl",
    title: "Agentic AI Email Intelligence",
    role: "Lead AI Developer | Offshore Dimensions Ltd",
    category: "AI/ML",
    description: "Architected and deployed a production-grade agentic AI system that autonomously retrieves, analyzes, and responds to natural language queries across enterprise email data. The system features a multi-agent query orchestrator that autonomously decides between real-time Gmail API (via Anthropic MCP) and RAG-fallback strategies based on query context. Implemented intelligent context switching and autonomous planning for complex multi-step workflows.",
    techStack: ["Python (FastAPI)", "OpenAI GPT-4", "Next.js 16", "Anthropic MCP", "pgvector", "LangChain"],
    impact: [
      "Retrieval time reduced: 30m → 5s",
      "Processed 200+ emails with full metadata",
      "99.9% Uptime via Hybrid Fallback",
      "<1s Vector Search Latency"
    ]
  },
  {
    id: "onenumba",
    title: "OneNUMBA Fintech Platform",
    role: "Lead Architect",
    category: "Fintech",
    description: "A comprehensive banking and financial aggregation platform. Designed the microservice architecture to handle high-concurrency banking transactions.",
    techStack: ["Node.js", "Docker", "Redis", "PostgreSQL", "React"],
    impact: ["$10M+ Monthly Transactions", "99.99% Uptime", "Fraud <0.01%"]
  },
  {
    id: "ai-fusion",
    title: "Enterprise RAG Knowledge Base",
    role: "AI Architect",
    category: "AI/ML",
    description: "A Retrieval-Augmented Generation system allowing natural language querying of unstructured organizational data.",
    techStack: ["Langchain", "OpenAI API", "Vector DB", "Python", "React"],
    impact: ["65% Faster Insights", "10TB+ Data Indexed", "Zero Compliance Incidents"]
  },
  {
    id: "hapichat",
    title: "HapiChat Social Platform",
    role: "Backend Lead",
    category: "EdTech",
    description: "A social media application featuring custom WebRTC voice/video calls without third-party paid providers.",
    techStack: ["Go (Golang)", "WebRTC", "Socket.IO", "MongoDB", "Flutter"],
    impact: ["Cost-free Video Calls", "Real-time Messaging", "Scalable Microservices"]
  },
  {
    id: "bank-mfa",
    title: "Pan-African MFA Infrastructure",
    role: "Security Engineer",
    category: "Security",
    description: "Deployment and upgrade of Entrust IdentityGuard for major Nigerian banks.",
    techStack: ["Entrust IDG", "Java", "Security Protocols", "Linux"],
    impact: ["20M+ Accounts Secured", "Zero Breaches", "98% SLA Adherence"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "AI & Automation",
    icon: "Brain",
    skills: ["Agentic Workflows", "Anthropic MCP", "RAG Architecture", "Langchain", "n8n", "LLMs", "UiPath (RPA)", "Python"]
  },
  {
    name: "Backend Engineering",
    icon: "Server",
    skills: ["Node.js", "Python (FastAPI)", "Go (Golang)", "Microservices", "GraphQL", "WebSockets", "REST APIs"]
  },
  {
    name: "Cloud & DevOps",
    icon: "Globe",
    skills: ["AWS (EC2, Lambda, S3)", "Docker", "Kubernetes", "CI/CD", "Azure", "Nginx"]
  },
  {
    name: "Frontend & Mobile",
    icon: "Layers",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "Android Native"]
  },
  {
    name: "Security & Database",
    icon: "Shield",
    skills: ["MFA/2FA", "Entrust IDG", "PCI-DSS", "PostgreSQL", "pgvector", "MongoDB", "Redis"]
  }
];