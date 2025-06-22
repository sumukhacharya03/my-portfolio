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
    specialty: "Final Year CSE Student  Bengaluru, Karnataka",
    summary:
      "Software Developer | AI Enthusiast | Photographer",
    email: "sumukh.acharya@email.com",
  },
  experience: [
    {
      company: "CODMAV",
      position: "Research Intern",
      startDate: "June 2024",
      endDate: "July 2024",
      repoLink: "https://github.com/sumukhacharya03/Lung-Cancer-ML",
      summary: [
        "Led the development of a Lung Cancer Risk Prediction System.",
        "Performed data cleaning and preprocessing using Python, applied advanced feature selection techniques such as PCA, BSO, RFE, and SelectKBest to enhance model performance.",
        "Implemented machine learning models including XGBoost, CatBoost, SVM, KNN, and an Ensemble Model combining all models on the transformed datasets, achieving a peak accuracy of 98.75% and recall of 96.25% with RFE-selected features.",
        "Conducted in-depth research on Lung Cancer, machine learning techniques, visualized model results using graphs and tables, and co-authored a research paper titled Predictive Analytics for Early Lung Cancer Risk using Machine Learning, published in IEEE Xplore.",
      ],
    },
    
  ],
  projects: [
    {
      name: "DFOS",
      summary: "Distributed File Orchestration and Synchronization: Multi-Node Data-Transfer-Framework for Linux",
      linkSource: "https://github.com/sumukhacharya03/DFOS",
      image: "/dfos.png",
    },
    {
      name: "My Portfolio",
      summary: "Portfolio Website using Astro and TailwindCSS",
      linkPreview: "/",
      linkSource: "https://github.com/sumukhacharya03/my-portfolio",
      image: "/portfolio.png",
    },
    {
      name: "Fare Forecasting in Quahog City",
      summary: "Data Analysis of RideWave Dataset in Quahog City to help RideWave implement dynamic pricing",
      linkPreview: "/",
      linkSource: "https://github.com/sumukhacharya03/Fare-Forecasting-in-Quahog-City",
      image: "/ridewave.webp",
    },
    {
      name: "URL Shortener",
      summary: "Load Balanced URL Shortener using Docker, Kubernetes and Redis",
      linkPreview: "/",
      linkSource: "https://github.com/sumukhacharya03/URL-Shortener",
      image: "/url.png",
    },
    {
      name: "Sports Rental",
      summary: "Sports Equipment Rental Management System using MySQL and Streamlit",
      linkPreview: "/",
      linkSource: "https://github.com/sumukhacharya03/Sports-Rental",
      image: "/sports.webp",
    },

  ],
about: {
  description: `
    Hey, I'm Sumukh Acharya, currently surviving as a Final Year CSE student at PES University.

    I love playing around with Data. I am passionate about Data Analytics, Machine Learning, Deep Learning. Most of my interests lies in this field. I'm prolly trying to make it spill all it's secrets. I am also interested in the fields of Databases, Big Data and Web-Dev and aim to work on becoming a good Full Stack Developer.

    When I am not convincing my ML model to behave, you'll find me diving into new tech, or starting a new project or maybe researching on something that tingles me.

    Outside the Tech world, I love capturing the world through my camera lens, or battling imaginary Grandmasters on the chessboard (spoiler: I win... sometimes).
  `,
  image: "/me2.jpg",

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "PES University, Bengaluru",
      year: "2022 – 2026",
    },
    {
      degree: "PUC (Class 11-12)",
      institution: "BASE PU College, Bengaluru",
      year: "2020 – 2022",
    },
    {
      degree: "CBSE (Class 1-10)",
      institution: "Sri Kumaran Children's Home, Bengaluru",
      year: "2009 – 2020",
    },
  ],

  skills: {
    Languages: ["Python", "R"],

    "Machine Learning & Deep Learning": [
      "Pandas", "NumPy", "TensorFlow", "Scikit-learn", "Matplotlib", "Seaborn",
      "PyTorch", "Keras", "Librosa", "Statsmodels", "LightGBM", "Joblib",
      "OpenCV", "Random Forest", "PCA", "RFE", "SelectK", "BSO", "XGBoost",
      "SVM", "CatBoost", "KNN", "Ensemble", "CNN", "LSTM", "Siamese Networks", "Autoencoders"
    ],

    "Databases & Big Data": ["MySQL", "Hadoop", "Kafka", "Spark"],

    "Operating Systems": ["Windows", "Linux"],

    "Web Development": [
      "HTML", "CSS", "TypeScript", "JavaScript", "React", "Astro", "TailwindCSS"
    ],

    "Tools & Others": [
      "Git", "GitHub", "Blender", "Docker", "Kubernetes", "VSCode", "MS Office",
      "Vercel", "Streamlit", "Figma", "Canva"
    ],
  "College Coursework": [
  "Machine Learning",
  "Databases",
  "Deep Learning",
  "Software Engineering",
  "Cloud Computing",
  "Big Data",
  "Data Analysis",
  "Statistics for Data Science",
  "C/Java",
  "Data Structures and Algorithms",
  "Operating Systems",
  "Computer Networks"
]
  },
  achievements: [
  "IBM Data Science Professional Course by Coursera.",
  "Learn Photorealism with Blender Course by PESU I/O.",
  "Secured 7th place out of 364 teams in a Kaggle Data Analytics Hackathon.",
  "Participated in HackNight organised by ACM and contributed to Open-Source.",
],

}


};

// #5755ff
