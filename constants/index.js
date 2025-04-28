import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      link: "https://cplusplus.com/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    }
  ],
  fundamentals: [
    {
      name: "OOP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      link: "https://en.wikipedia.org/wiki/Object-oriented_programming",
    },
    // {
    //   name: "DSA",
    //   icon: "https://cdn.worldvectorlogo.com/logos/algorithm.svg",
    //   link: "https://www.geeksforgeeks.org/data-structures/",
    // },
    {
      name: "DBMS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      link: "https://en.wikipedia.org/wiki/Database",
    },
    {
      name: "Operating Systems",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      link: "https://en.wikipedia.org/wiki/Operating_system",
    },
    {
      name: "Networking",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      link: "https://en.wikipedia.org/wiki/Computer_network",
    }
  ],
  frontend: [
    {
      name: "HTML",
      icon: "/assets/tech/html5.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: "/assets/tech/css3.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "React.js",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Tailwind CSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      link: "https://getbootstrap.com/",
    }
  ],
  backend: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "REST APIs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      link: "https://restfulapi.net/",
    }
  ],
  devops: [
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      name: "GitHub Actions",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      link: "https://github.com/features/actions",
    },
    {
      name: "CI/CD",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      link: "https://en.wikipedia.org/wiki/CI/CD",
    },
    {
      name: "Nginx",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      link: "https://www.nginx.com/",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      link: "https://www.linux.org/",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      link: "https://aws.amazon.com/",
    }
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      link: "https://github.com/",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Vercel",
      icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
      link: "https://vercel.com/",
    }
  ],
  others: [
    {
      name: "Responsive Design",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      link: "https://en.wikipedia.org/wiki/Responsive_web_design",
    },
    {
      name: "API Integration",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      link: "https://en.wikipedia.org/wiki/API",
    },
    {
      name: "SSR",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering",
    },
    {
      name: "JWT Auth",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      link: "https://jwt.io/",
    },
    {
      name: "Agile Development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      link: "https://agilemanifesto.org/",
    }
  ]
};

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Zemuria , Pondicherry",
    icon: "/assets/company/zemuria-logo.svg",
    iconBg: "#ffffff",
    date: "Sep 2024 - Present",
    points: [
      "Spearheaded development of a modern, responsive e-commerce platform using Next.js, TypeScript, and Tailwind CSS.",
      "Implemented advanced features like product filtering, search autocomplete, wishlist, and real-time inventory updates.",
      "Optimized Lighthouse scores to above 90 through image lazy loading, SSR caching, and tree shaking.",
      "Built and maintained component libraries with reusable design patterns ensuring faster development cycles.",
      "Ensured web accessibility (WCAG 2.0 compliance) and mobile responsiveness across all devices.",
      "Integrated Razorpay and Stripe payment gateways with secure token-based authentication.",
    ],
    deployed_link: "https://zemuria.com/zbiz",
  },
  {
    title: "MERN Stack Developer",
    company_name: "Trando  : (IT Services & Consulting), Noida",
    icon: "/assets/company/trando-logo.svg",
    iconBg: "#ffffff",
    date: "Jan 2023 - Aug 2024",
    points: [
      "Developed and deployed a full-stack UPSC learning platform catering to over 5K+ users.",
      "Integrated dynamic test modules with auto evaluation, rankings, and detailed analytics using MongoDB aggregations.",
      "Designed role-based dashboards for Admin, Faculty, and Students to manage content, tests, and feedback.",
      "Wrote optimized RESTful APIs in Node.js to handle concurrent student submissions with 10K+ daily requests.",
      "Enhanced performance by indexing queries, introducing pagination, and leveraging async processing.",
      "Collaborated using GitHub Projects and agile sprints to deliver new features weekly.",
    ],
    deployed_link: "https://app.upschindi.online",
  },
  {
    title: "Freelance Full Stack Developer",
    company_name: "Disease Predictor Web App - Alinze Predictor",
    icon: "/assets/icons/freelance.svg",
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Oct 2022",
    points: [
      "Built a medical data prediction platform where users submit health symptoms and personal info through an interactive UI built in React.js and Tailwind CSS.",
      "Developed a backend using Node.js and Express.js that securely routed the data to a transcriber ML model API, which identified potential diseases based on user inputs.",
    ],
    deployed_link: "https://disease-predictor-app.vercel.app",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fullstack Blog Post Website",
    description:
      "A dynamic blog platform with user authentication, rich-text formatting, and comprehensive blog management features. Built with React Quill for content editing, JWT for secure authentication, and MongoDB for data storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "jwt",
        color: "yellow-text-gradient",
      }
    ],
    image: "/assets/projects/blog-post.png",
    deployed_link: "https://github.com/yaddv-sonu/blog",
  },
  {
    name: "MERN BookStore Platform",
    description:
      "A full-stack digital library management system featuring book and author management, issue/return tracking, and secure user authentication. Includes an admin panel for comprehensive system management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "jwt",
        color: "yellow-text-gradient",
      }
    ],
    image: "/assets/projects/bookstore.jpg",
    deployed_link: "https://github.com/yaddv-sonu/mern-bookstore",
  },
  {
    name: "React WebSeries App",
    description:
      "A React Single Page Application for browsing and searching web series using the TVmaze API. Features include live search, show previews, and detailed episode navigation, built with React Hooks and styled-components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "tvmaze-api",
        color: "pink-text-gradient",
      },
      {
        name: "react-hooks",
        color: "orange-text-gradient",
      }
    ],
    image: "/assets/projects/webseries.png",
    deployed_link: "https://tv-shows-ecru-sigma.vercel.app/",
  }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/yaddv-sonu",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/sonu-yadav-1758221b7/",
  },
 
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
