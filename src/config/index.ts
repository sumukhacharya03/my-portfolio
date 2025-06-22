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
    { text: "Github", href: "https://github.com/sumukhacharya03" },
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
        "Conducted in-depth research on Lung Cancer, machine learning techniques, visualized model results using graphs and tables, and co-authored a research paper titled Predictive Analytics for Early Lung Cancer Risk Using Machine Learning, published in IEEE Xplore.",
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
      name: "Sports Rental",
      summary: "Sports Equipment Rental Management System using MySQL and Streamlit",
      linkPreview: "/",
      linkSource: "https://github.com/sumukhacharya03/Sports-Rental",
      image: "/sports.webp",
    },
    {
      name: "Streamly Content Strategy Optimization",
      summary: "Data Analysis of Streamly Dataset to help the platform refine its content strategy",
      linkPreview: "/",
      linkSource: "https://github.com/sumukhacharya03/Streamly-Content-Strategy-Optimization",
      image: "/streamly.png",
    },
    {
      name: "Restaurant Ordering System",
      summary: "Restuarant Ordering System using Socket Programming and SSL",
      linkPreview: "/",
      linkSource: "https://github.com/sumukhacharya03/Restaurant-Ordering-System",
      image: "/restaurant.png",
    },
    

  ],
  about: {
    description: `
      Hi there! I'm Sumukh Acharya, a 6th semester Computer Science Engineering student at PES University.

      I'm deeply interested in exploring the world of Data Analytics, Machine Learning and Deep Learning. I love playing around with Data. My projects and research aim to create meaningful solutions to real-world problems, leveraging technology to make a difference.

      In my free time, I enjoy learning new technologies, exploring creative ideas, and researching new projects. I am passionate about Photography
    `,
    image: "/me2.jpg",
  },
};

// #5755ff
