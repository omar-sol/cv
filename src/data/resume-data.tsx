import {
  TowardsAILogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Omar Solano",
  initials: "OS",
  location: "Montréal, Canada, ET",
  locationLink: "https://www.google.com/maps/place/montreal",
  about:
    "",
  summary:
    "Machine Learning Engineer skilled in computer vision and large language models. I'm passionate about using AI to improve and create novel, useful products.",
  avatarUrl: "https://avatars.githubusercontent.com/u/78120256?v=4",
  personalWebsiteUrl: "https://omarsolano.com",
  contact: {
    email: "omarsolano27@gmail.com",
    tel: "+1 (438) 505-4217",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/omar-sol",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/omar-solano1/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/test",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "École de technologie supérieure",
      degree: "Master of Engineering (M.Eng.) - Automated Manufacturing Engineering - AI",
      start: "May 2023",
      end: "Apr 2025",
    },
    {
      school: "École de technologie supérieure",
      degree: "Bachelor of Engineering (B.E.) - Automated Manufacturing Engineering ",
      start: "Sep 2017",
      end: "Dec 2021",
    },
  ],
  work: [
    {
      company: "Towards AI",
      link: "https://towardsai.net",
      badges: ["Remote"],
      title: "Machine Learning Engineer",
      logo: TowardsAILogo,
      start: "Sept 2023",
      end: "Present",
      description:
        "• Wrote 10+ educational technical articles and 2 book chapters about Large Language Models, including Fine-tuning, RAG, Agents, and more. The online courses reached an audience of over 25,000 students.\n\n• Developed and deployed two Chatbot applications using FastAPI and Python: an AI tutor (open-source) and a Job Board Assistant. The AI tutor project has been shared as part of the online courses. Deployed the APIs to Google Cloud Platform, ensuring high availability and scalability.",
        
    },
    {
      company: "designstripe",
      link: "https://designstripe.com",
      badges: ["Remote"],
      title: "Machine Learning Engineer",
      logo: TowardsAILogo,
      start: "Jan 2021",
      end: "Jul 2023",
      description:"• Fine-tuned pre-trained AI models (text-to-image and LLMs) for various applications using Hugging Face libraries and cloud computing instances, and deployed models to cloud services with REST APIs (FastAPI) and internal demos (Gradio Python library) for evaluation and improvement.\n\n• Designed and developed applications of machine learning algorithms for new products, including a color palette generator (GAN) and a color extraction tool from images (k-means), and participated in data acquisition and processing activities.\n\n• Collaborated with cross-functional teams to define project requirements and deliverables, conducted research on the latest AI advancements, and shared insights with the team to identify and explore creative solutions relevant to the Startup.", 
    },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Creating and testing software for LTE base stations",
    // },
  ],
  skills: [
    "Python",
    "API Development",
    "Computer Vision",
    "Machine Learning",
    "Generative AI",
    "Cloud Computing",
  ],
  // projects: [
  //   {
  //     title: "Consultly",
  //     techStack: [
  //       "Side Project",
  //       "TypeScript",
  //       "Next.js",
  //       "Vite",
  //       "GraphQL",
  //       "WebRTC",
  //     ],
  //     description: "A platform to build and grow your online business",
  //     logo: ConsultlyLogo,
  //     link: {
  //       label: "consultly.com",
  //       href: "https://consultly.com/",
  //     },
  //   },
  //   {
  //     title: "Monito",
  //     techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
  //     description:
  //       "Browser extension that records everything happening in a web application",
  //     logo: MonitoLogo,
  //     link: {
  //       label: "monito.dev",
  //       href: "https://monito.dev/",
  //     },
  //   },
  // ],
} as const;
