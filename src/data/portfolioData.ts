export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: "Full Stack" | "AI & ML" | "Web App";
  featured: boolean;
  highlight: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  branch?: string;
  period: string;
  score?: string;
  location: string;
  details: string[];
  current?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "Hackathon" | "Research" | "Development" | "Activity";
  description: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: "Academic" | "Research" | "Hackathon" | "Technical";
  date: string;
  issuer: string;
  description: string;
  badgeText: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const personalInfo = {
  name: "K Mokshith",
  roleHeadline: "Software Engineering Aspirant",
  tagline: "Computer Science Engineering Student | Aspiring Frontend / Full-Stack Developer | React.js & Next.js | Building Practical Projects",
  email: "moxithkulal07@gmail.com",
  github: "https://github.com/moxithkulal07",
  linkedin: "https://www.linkedin.com/in/mokshith-k-937410384/",
  location: "Mangalore, Karnataka, India",
  college: "Sahyadri College of Engineering and Management, Mangalore",
  branch: "Computer Science and Engineering",
  graduationYear: "2029",
  profileImage: "/profile.jpg",
  academicHighlights: "Scored 94.83% in PUC and 92.96% in SSLC.",
  bio: `I am a second-year Computer Science and Engineering student at Sahyadri College of Engineering and Management, Mangalore. I am passionate about web development, software engineering, and exploring new technologies.

I enjoy building practical projects, solving problems, participating in hackathons, and learning through hands-on experience. I have experience working with frontend technologies and am also exploring backend development to become a well-rounded developer.`,
  careerObjective: "My goal is to become a skilled Frontend / Full-Stack Developer by building useful, user-friendly, and efficient web applications. I aim to improve my technical skills through real-world projects, internships, hackathons, and collaborative development.",
  interests: [
    { title: "Frontend & Full-Stack Development", desc: "Crafting modern, accessible, responsive web experiences with React and Next.js" },
    { title: "Software Development", desc: "Architecting clean, maintainable, and high-performance software solutions" },
    { title: "Artificial Intelligence & Emerging Tech", desc: "Exploring generative AI, prompt engineering, and intelligent assistants" },
    { title: "Hackathons & Team Collaboration", desc: "Rapid prototyping, brainstorming under pressure, and delivering impactful MVPs" },
    { title: "Problem-Solving & Continuous Learning", desc: "Mastering algorithms, data structures, and evolving modern tech stacks" },
  ],
};

export const projectsData: Project[] = [
  {
    id: "campusloop",
    title: "CampusLoop",
    subtitle: "Campus Activity Management Platform",
    description: "A centralized platform designed to bring college events, workshops, hackathons, and club activities together in one place. Enables students to discover opportunities, bookmark events, and track upcoming activities seamlessly.",
    longDescription: "Built to streamline student campus life, CampusLoop solves information fragmentation across campus clubs and departments. Features intuitive event exploration, category filtering, bookmarking, and responsive dashboards.",
    technologies: ["Next.js", "React.js", "TypeScript", "CSS", "Tailwind CSS"],
    githubUrl: "https://github.com/valarxdhn/CampusLoop-.git",
    category: "Full Stack",
    featured: true,
    highlight: "Centralized Campus Hub",
  },
  {
    id: "medilens",
    title: "MediLens",
    subtitle: "AI-Powered Medical Report Simplifier",
    description: "An AI-based platform designed to translate complex medical diagnostic reports into easy-to-understand explanations, empowering patients to comprehend medical terminology and lab details with clarity.",
    longDescription: "Developed for the Versathon hackathon, MediLens tackles the barrier of complex medical jargon. Utilizing intelligent summarization and clear metric breakdowns, it translates laboratory metrics into actionable human insights.",
    technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "SQLite", "AI Integration"],
    githubUrl: "https://github.com/maheshwaraks13/Versathon-2.0.git",
    category: "AI & ML",
    featured: true,
    highlight: "Versathon 2.0 Hackathon Project",
  },
  {
    id: "dynamic-train-eta",
    title: "Dynamic Train ETA",
    subtitle: "Real-Time Train Arrival Forecasting System",
    description: "A smart railway-focused platform engineered to predict dynamic arrival times of coaching trains by accounting for real-time delays, weather conditions, track congestion, and multi-factor parameters.",
    longDescription: "Addresses inefficiencies in conventional fixed railway schedules by evaluating live data feeds and dynamic delay patterns to offer travelers and administrators reliable, dynamically forecasted ETAs.",
    technologies: ["React.js", "JavaScript", "Node.js", "REST APIs", "CSS"],
    githubUrl: "https://github.com/praptha-gatty/dynamic-train-eta.git",
    category: "Web App",
    featured: true,
    highlight: "Real-Time Forecasting",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Foundational & systems programming languages",
    skills: [
      { name: "C", level: "Proficient" },
      { name: "C++", level: "Proficient" },
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
    ],
  },
  {
    category: "Frontend Development",
    description: "Crafting modern, responsive user interfaces",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Proficient" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3 / Tailwind", level: "Advanced" },
    ],
  },
  {
    category: "Backend Development",
    description: "Server architecture, APIs and databases",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "SQL", level: "Proficient" },
      { name: "REST APIs", level: "Proficient" },
    ],
  },
  {
    category: "Development Tools",
    description: "Productivity, version control and environments",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "VS Code", level: "Advanced" },
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "be-cse",
    institution: "Sahyadri College of Engineering and Management, Mangalore",
    degree: "Bachelor of Engineering (B.E.)",
    branch: "Computer Science and Engineering",
    period: "2025 – 2029 (Expected)",
    location: "Mangalore, Karnataka",
    current: true,
    details: [
      "Currently in Second Year pursuing Bachelor of Engineering in Computer Science.",
      "Focusing on Data Structures & Algorithms, Object-Oriented Programming, Database Systems, and Web Engineering.",
      "Active participant in technical symposiums, hackathons, and research paper presentations.",
    ],
  },
  {
    id: "puc",
    institution: "Vivekananda Pre-University College, Puttur",
    degree: "Pre-University Course (PUC)",
    period: "Completed",
    score: "94.83%",
    location: "Puttur, Karnataka",
    details: [
      "Achieved an outstanding score of 94.83% in the Karnataka State Board examinations.",
      "Strong foundation in Physics, Chemistry, and Mathematics (PCMB/M stream).",
      "Demonstrated academic excellence and disciplined analytical problem-solving.",
    ],
  },
  {
    id: "sslc",
    institution: "Government High School, Vittal",
    degree: "Secondary School Leaving Certificate (SSLC)",
    period: "Completed",
    score: "92.96%",
    location: "Vittal, Karnataka",
    details: [
      "Graduated with Distinction scoring 92.96% in the Class 10 State Board examination.",
      "Consistently recognized for top academic merit and active school participation.",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "hackathons",
    role: "Hackathon Participant & Team Developer",
    organization: "Versathon & College Technical Hackathons",
    period: "2024 – Present",
    type: "Hackathon",
    description: "Collaborated in multidisciplinary teams to ideate, prototype, and build practical technological solutions under tight hackathon deadlines.",
    highlights: [
      "Engineered MediLens in Versathon 2.0 to translate complex medical diagnostics into patient-friendly summaries.",
      "Built CampusLoop to centralize disparate university event streams and student opportunities.",
      "Spearheaded frontend component architecture, responsive styling, and API integration.",
    ],
  },
  {
    id: "research",
    role: "Research Paper Author & Presenter",
    organization: "Mentored by Kiran P. Acharya",
    period: "2024 – 2025",
    type: "Research",
    description: "Conducted technical literature research and authored a scientific research paper under expert faculty mentorship.",
    highlights: [
      "Conducted domain investigation and synthesis under guidance from faculty mentor Kiran P. Acharya.",
      "Presented methodology and findings at academic presentation forum with peer review.",
      "Honed rigorous technical writing, scholarly research, and public presentation skills.",
    ],
  },
  {
    id: "web-dev",
    role: "Frontend & Full-Stack Web Projects",
    organization: "Independent & Collaborative Engineering",
    period: "2023 – Present",
    type: "Development",
    description: "Designing and engineering responsive, component-driven web applications leveraging the modern React and Next.js ecosystem.",
    highlights: [
      "Implemented modular reusable UI architectures with TypeScript and Tailwind CSS.",
      "Integrated REST APIs and relational database layers with Node.js/Express.",
      "Focused on responsive mobile-first layouts, performance, and accessible UI patterns.",
    ],
  },
  {
    id: "ai-exploration",
    role: "AI & Emerging Technologies Explorer",
    organization: "Applied AI Projects",
    period: "2024 – Present",
    type: "Activity",
    description: "Hands-on exploration of generative AI application workflows, prompt engineering, and intelligent developer tooling.",
    highlights: [
      "Investigated LLM integration for automated data simplification in healthcare contexts.",
      "Experimented with modern AI SDKs and prompt chaining workflows.",
    ],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "academic-excellence",
    title: "Outstanding Academic Merit",
    category: "Academic",
    date: "PUC & SSLC",
    issuer: "Karnataka State Board",
    description: "Achieved stellar academic records with 94.83% in Pre-University Course (PUC) and 92.96% in Secondary School Leaving Certificate (SSLC).",
    badgeText: "94.83% PUC | 92.96% SSLC",
  },
  {
    id: "research-paper",
    title: "Research Paper Presentation",
    category: "Research",
    date: "Academic Year 2024-2025",
    issuer: "Guided by Kiran P. Acharya",
    description: "Successfully prepared and delivered a technical research paper presentation under the mentorship of Kiran P. Acharya.",
    badgeText: "Presented Research",
  },
  {
    id: "versathon-hackathon",
    title: "Versathon 2.0 Hackathon Project",
    category: "Hackathon",
    date: "Hackathon 2024",
    issuer: "Versathon Hackathon",
    description: "Developed MediLens — an AI-powered medical report simplifier — addressing real-world healthcare accessibility for everyday citizens.",
    badgeText: "Team Innovation",
  },
  {
    id: "campus-platform",
    title: "CampusLoop Development",
    category: "Technical",
    date: "2025",
    issuer: "Campus Engineering Project",
    description: "Engineered a centralized student activity hub using Next.js and TypeScript to empower college peers to discover and attend academic and extracurricular activities.",
    badgeText: "Next.js & TypeScript",
  },
];
