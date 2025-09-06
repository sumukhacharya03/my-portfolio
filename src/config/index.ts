import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sumukh Acharya Portfolio",
  author: "Sumukh Acharya",
  description:
    "Sumukh Acharya Portfolio",
  lang: "en",
  siteLogo: "/me1.jpg",
  
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "My Projects", href: "#projects" },
    { text: "About Me", href: "#about" },
  ],
  socialLinks: [
    
    { text: "LinkedIn", href: "https://www.linkedin.com/in/sumukh-acharya-6859ab312/" },
    { text: "GitHub", href: "https://github.com/sumukhacharya03" },
    { text: "VSCO", href: "https://vsco.co/sumukhacharya/gallery" },
  ],
  socialImage: "/me1.jpg",
  canonicalURL: "https://sumukh-acharya.vercel.app",
};


export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sumukh Acharya",
    specialty: "Final Year CSE Student",
    summary:
      "Karnataka",
    email: "sumukh.acharya@email.com",
  },
  experience: [
    {
      company: "Tvam Technologies Pvt. Ltd.",
      position: "AI Intern",
      startDate: "September 2025",
      endDate: "Present",

      summary: [
        "Engaged in a structured training program focused on the company’s Python development standards and applied AI methodologies.",
        "Preparing to contribute to a full-stack AI project, focusing on design and scalability.",
      ],
    },
{
      company: "PES University",
      position: "Teaching Assistant (Python & Databases)",
      startDate: "August 2025",
      endDate: "Present",
      summary: [
        "Mentoring undergraduate students in Python Programming and Database Management Systems fundamentals.",
        "Assisting faculty in grading assignments, preparing course materials, and conducting lab sessions.",
      ],
    },
{
      company: "CODMAV",
      position: "Data Science Intern",
      startDate: "June 2024",
      endDate: "August 2024",
      repoLink: "https://github.com/sumukhacharya03/Lung-Cancer-ML",
      summary: [
        "Led the development of a Lung Cancer Risk Prediction System.",
        "Performed data cleaning and preprocessing using Python, applied advanced feature selection techniques such as PCA, BSO, RFE, and SelectKBest to enhance model performance.",
        "Implemented machine learning models including XGBoost, CatBoost, SVM, KNN, and an Ensemble Model combining all models on the transformed datasets, achieving a peak accuracy of 98.75% and recall of 96.25% with RFE-selected features.",
        "Conducted in-depth research on Lung Cancer, machine learning techniques, visualized model results using graphs and tables, and co-authored a research paper titled Predictive Analytics for Early Lung Cancer Risk using Machine Learning, published in IEEE Xplore.",
      ],
    }
    
  ],
  projects: [
    {
      name: "Senior-Vision-AI",
      summary: "An Elderly-AI-Assistant that simplifies supermarket shopping by speaking product summaries",
      linkSource: "https://github.com/sumukhacharya03/Senior-Vision-AI",
      image: "/senior.jpg",
      tools: ["Python", "Flask", "Gunicorn", "JavaScript", "HTML/CSS", "Google Vision API", "Gemini API", "Render", "Vercel"]
    },
    {
      name: "DFOS",
      summary: "Distributed File Orchestration and Synchronization: Multi-Node Data-Transfer-Framework for Linux",
      linkSource: "https://github.com/sumukhacharya03/DFOS",
      image: "/dfos.png",
      tools: ["socket", "TCP Protocol", "ThreadPoolExecutor", "Multi-Threading", "Client-Server Architecture"]
    },
    {
      name: "Dynamic-Fare-Engine",
      summary: "Ensemble Forecasting Model to help RideWave implement Dynamic Pricing",
      linkSource: "https://github.com/sumukhacharya03/Dynamic-Fare-Engine",
      image: "/fare.webp",
      tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Statsmodels", "XGBoost", "Matplotlib", "Seaborn"]
    },
    {
      name: "Synapse",
      summary: "From Transcript to Insight, powered by your Instructions",
      linkSource: "https://github.com/sumukhacharya03/Synapse",
      image: "/synapse.png",
      tools: ["JavaScript", "HTML", "npm", "Node.js", "GeminiAPI"]
    },
    {
      name: "URL-Shortener",
      summary: "Load Balanced URL Shortener using Docker, Kubernetes and Redis",
      linkSource: "https://github.com/sumukhacharya03/URL-Shortener",
      image: "/url.png",
      tools: ["Docker", "Kubernetes", "Redis", "Flask", "Python", "NGINX", "Minikube", "Kubectl"]
    },
    

  ],
about: {
  description: `
  I'm a final-year Computer Science student at PES University, fascinated by the stories data can tell. My main interest lies in Data Analytics and Machine Learning, and I'm always looking for opportunities to apply what I'm learning to solve interesting problems. I also have a growing curiosity for web development, big data and database systems, aiming to build a broad skill set. Outside of the tech world, I enjoy capturing moments through photography and the strategic challenge of chess.
  `,
  image: "/me2.jpg",

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "PES University, Bengaluru",
      year: "2022 – 2026",
      cgpa: "7.4"
    },
    {
      degree: "PUC (Class 11-12)",
      institution: "BASE PU College, Bengaluru",
      year: "2020 – 2022",
      percentage: '95'
    },
    {
      degree: "CBSE (Class 1-10)",
      institution: "Sri Kumaran Children's Home, Bengaluru",
      year: "2009 – 2020",
      percentage: '90'
    },
  ],

  skills: {
    Languages: ["Python", "C", "Java"],

    "Data Science": [
      "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"
    ],

    "Frameworks and Tools": ["MySQL", "Kafka", "Spark", "Docker", "Kubernetes", "FastAPI", "Streamlit", "Git"],


  "College Coursework": [
  "Machine Learning",
  "Databases",
  "Deep Learning",
  "Software Engineering",
  "Cloud Computing",
  "Big Data",
  "Data Analytics",
  "Statistics for Data Science",
  "C/Java",
  "Data Structures and Algorithms",
  "Operating Systems",
  "Computer Networks"
]
  },
  achievements: [
  "IBM Data Science Professional Course by Coursera.",
  "Secured 7th place out of 364 teams in a Kaggle Data Analytics Hackathon.",
],

}


};
