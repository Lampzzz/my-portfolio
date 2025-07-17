import { IProject } from "@/types";

export const GENERAL_INFO = {
  email: "lampazaj@gmail.com",

  emailSubject: "Let's collaborate on a project",
  emailBody: "Hi James, I am reaching out to you because...",
};

export const SOCIAL_LINKS = [
  { name: "github", url: "https://github.com/Lampzzz" },
  { name: "linkedin", url: "https://www.linkedin.com/in/jlampaza" },
  { name: "facebook", url: "https://www.facebook.com/Jlampaza17" },
];

export const MY_STACK = {
  frontend: [
    {
      name: "Javascript",
      icon: "/logo/js.png",
    },
    {
      name: "Typescript",
      icon: "/logo/ts.png",
    },
    {
      name: "React",
      icon: "/logo/react.png",
    },
    {
      name: "Next.js",
      icon: "/logo/next.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/logo/tailwind.png",
    },
    {
      name: "Bootstrap",
      icon: "/logo/bootstrap.svg",
    },
    {
      name: "React Native",
      icon: "/logo/react.png",
    },
    {
      name: "GSAP",
      icon: "/logo/gsap.png",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "/logo/node.png",
    },
    {
      name: "Express.js",
      icon: "/logo/express.png",
    },
    {
      name: "PHP",
      icon: "/logo/php.png",
    },
    {
      name: "Laravel",
      icon: "/logo/laravel.png",
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: "/logo/mysql.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/logo/postgreSQL.png",
    },
    {
      name: "MongoDB",
      icon: "/logo/mongodb.svg",
    },
    {
      name: "SQLite",
      icon: "/logo/sqlite.png",
    },
    {
      name: "Firebase",
      icon: "/logo/firebase.png",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/logo/git.png",
    },
    {
      name: "GitHub",
      icon: "/logo/github.png",
    },
    {
      name: "Postman",
      icon: "/logo/postman.png",
    },
  ],
};

export const PROJECTS: IProject[] = [
  // {
  //   title: "MTI Electronics",
  //   slug: "mti-electronics",
  //   liveUrl: "https://mti-electronics.vercel.app/",
  //   year: 2025,
  //   description: `
  //     A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>

  //     Key Features:<br/>
  //     <ul>
  //       <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
  //       <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
  //       <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
  //       <li>📱 Fully Responsive: Optimized for all device sizes</li>
  //       <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
  //     </ul><br/>

  //     Technical Highlights:
  //     <ul>
  //       <li>Implemented complex slider synchronization logic using Swiper.js</li>
  //       <li>Customized Payload CMS admin panel for intuitive content management</li>
  //       <li>Developed reusable UI components with shadcn for design consistency</li>
  //       <li>Configured efficient data fetching strategies in Next.js</li>
  //     </ul>
  //     `,
  //   role: `
  //     Full-Stack Developer <br/>
  //     Owned the entire development lifecycle:
  //     <ul>
  //       <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
  //       <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
  //       <li>🔄 State Management: Implemented client-side data fetching and caching</li>
  //       <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
  //       <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
  //       <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
  //     </ul>
  //     `,
  //   techStack: [
  //     "Next.js",
  //     "Payload CMS",
  //     "Tailwind CSS",
  //     "shadcn",
  //     "Swiper.js",
  //     "React Hook Form",
  //     "Vercel",
  //   ],
  //   thumbnail: "/projects/thumbnail/mti-electronics.webp",
  //   longThumbnail: "/projects/long/mti-electronics.webp",
  //   images: [
  //     "/projects/images/mti-electronics-1.webp",
  //     "/projects/images/mti-electronics-2.webp",
  //   ],
  // },
  {
    title: "Prepwise",
    slug: "prepwise",
    techStack: [
      "Next.js",
      "Google Gemini API",
      "Vapi",
      "Tailwind CSS",
      "Firebase",
      "Aceternity",
    ],
    thumbnail: "/projects/thumbnail/ai-interviews.png",
    longThumbnail: "/projects/long/ai-interviews.png",
    images: [
      "/projects/images/ai-interviews-1.png",
      "/projects/images/ai-interviews-2.png",
      "/projects/images/ai-interviews-3.png",
      "/projects/images/ai-interviews-4.png",
    ],
    sourceCode: "https://github.com/Lampzzz/ai-mock-interviews",
    liveUrl: "https://ai-mock-interviews-flame-zeta.vercel.app/",
    year: 2025,
    description:
      "I developed AI Interview, a platform that allows users to practice mock interviews with AI-powered feedback. The platform uses Google Gemini API to generate interview questions and provide feedback on the user's performance.",
    role: ``,
    platform: "website",
  },
  {
    title: "Aora",
    slug: "aora",
    techStack: ["React Native", "Firebase", "Nativewind", "Zustand"],
    thumbnail: "/projects/thumbnail/aora.png",
    longThumbnail: "/projects/long/aora.png",
    images: [
      "/projects/images/aora-1.png",
      "/projects/images/aora-2.png",
      "/projects/images/aora-3.png",
      "/projects/images/aora-4.png",
      "/projects/images/aora-5.png",
      "/projects/images/aora-6.png",
      "/projects/images/aora-7.png",
      "/projects/images/aora-8.png",
      "/projects/images/aora-9.png",
    ],
    sourceCode: "https://github.com/Lampzzz/video-blogs-app",
    liveUrl: "",
    year: 2025,
    description:
      "Aora is a mobile video blogging platform where users can create, save, and share their own video blog posts. It also allows users to explore and watch content shared by others, fostering a creative and engaging community for visual storytelling.",
    role: ``,
    platform: "mobile",
  },
];

export const MY_EXPERIENCE = [
  {
    title: "Teaching Assistant (Software Engineer)",
    company: "University of Caloocan City",
    duration: "Feb 2025 - April 2025",
  },
  {
    title: "Software Engineer Intern",
    company: "Sollertia Inc.",
    duration: "Jun 2024 - Aug 2024",
  },
];
