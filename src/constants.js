// ================= SKILLS LOGOS =================
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import pythonLogo from "./assets/tech_logo/python.png";
import javaLogo from "./assets/tech_logo/java.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import flaskLogo from "./assets/tech_logo/flask.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import javaScriptLogo from "./assets/tech_logo/javascript.png"; // duplicate JS
import materialuiLogo from "./assets/tech_logo/materialui.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import sassLogo from "./assets/tech_logo/sass.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import tailwindLogo from "./assets/tech_logo/tailwindcss.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import postgresqlLogo from "./assets/tech_logo/postgre.png";
import clogo from "./assets/tech_logo/c.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import djangoLogo from "./assets/tech_logo/django.png";
import eclipseLogo from "./assets/tech_logo/eclipse.png";
import restapiLogo from "./assets/tech_logo/restapi.png";

import jupyterLogo from "./assets/tech_logo/jupyter.png";
import colabLogo from "./assets/tech_logo/googlecolab.png";
import opencvLogo from "./assets/tech_logo/opencv.png";







// ================= SKILLS =================
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
    
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
       { name: "Bootstrap", logo: bootstrapLogo },
        { name: "Tailwind CSS", logo: tailwindLogo },
      {name:"Next JS", logo: nextjsLogo},
      {name:"Material UI", logo: materialuiLogo},

      
    ],
  },
  
    {
  title: "Backend",
  skills: [
    { name: "Node JS", logo: nodejsLogo },
    { name: "Express JS", logo: expressjsLogo },
    { name: "Django", logo: djangoLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "PostgreSQL", logo: postgresqlLogo },
    { name: "MySQL", logo: mysqlLogo },
  ],
},


          
    
  
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Java", logo: javaLogo },
      { name: "C++", logo: csharpLogo },
      {name:"C", logo: clogo},
    ],
  },
  
   {
  title: "Tools & Platforms",
  skills: [
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "VS Code", logo: vscodeLogo },
    { name: "Eclipse", logo: eclipseLogo },

    { name: "Postman", logo: postmanLogo },
    { name: "REST APIs", logo: restapiLogo },
    

    { name: "Firebase", logo: firebaseLogo },
    { name: "Vercel", logo: vercelLogo },

    { name: "Jupyter Notebook", logo: jupyterLogo },
    { name: "Google Colab", logo: colabLogo },
    { name: "OpenCV", logo: opencvLogo },
  ],
},

     
    ]





// ================= PROJECT LOGOS =================
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import carrentalLogo from "./assets/work_logo/car_rental.png";
import fitnessLogo from "./assets/work_logo/fitness_assistant.png";
import ecommerceLogo from "./assets/work_logo/ecommerce.png";
import hotelLogo from "./assets/work_logo/hotel_booking.png";

// ================= PROJECTS =================
export const projects = [
  {
    id: 1,
    title: "CS Prep",
    description: "A full-stack quiz-based learning platform for GATE and UGC NET aspirants.",
    image: csprepLogo,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description: "Movie recommendation platform using external APIs with modern UI.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "Car Rental Platform",
    description: "MERN-based car rental platform with booking and management features.",
    image: carrentalLogo,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
  },
  {
    id: 4,
    title: "AI Fitness Assistant",
    description: "AI-powered fitness assistant with voice interaction and workout tracking.",
    image: fitnessLogo,
    tags: ["MERN", "Voice AI", "MongoDB"],
  },
  {
    id: 5,
    title: "Hotel Booking App",
    description: "MERN hotel booking system with room availability and admin dashboard.",
    image: hotelLogo,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
  },
  {
    id: 6,
    title: "E-Commerce App",
    description: "Full-stack MERN e-commerce app with payments and order management.",
    image: ecommerceLogo,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
  },
  // ===== AI / ML PROJECTS (NO IMAGE) =====
  {
    id: 7,
    title: "RAG AI Teaching Assistant",
    description: "Retrieval-Augmented Generation based AI teaching assistant using LangChain, FAISS vector database, OpenAI GPT, Whisper and Streamlit.",
    image: null,
    tags: ["Python", "LangChain", "RAG", "OpenAI GPT", "Whisper", "FAISS", "Streamlit"],
  },
  {
    id: 8,
    title: "House Price Prediction",
    description: "Machine learning system for predicting house prices using Linear Regression with interactive Streamlit dashboard.",
    image: null,
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit"],
  },
  {
    id: 9,
    title: "Sales Forecasting System",
    description: "Time-series sales forecasting system using ARIMA model for future demand prediction.",
    image: null,
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "ARIMA"],
  },
  {
    id: 10,
    title: "Movie Recommendation System (ML)",
    description: "Content-based movie recommendation system using cosine similarity and ML techniques with Streamlit UI.",
    image: null,
    tags: ["Python", "Pandas", "Scikit-learn", "Content Based Filtering", "Streamlit"],
  },
  {
    id: 11,
    title: "Credit Card Fraud Detection",
    description: "Machine learning model to detect fraudulent credit card transactions using classification algorithms and data visualization.",
    image: null,
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Seaborn", "Streamlit"],
  },
  {
    id: 12,
    title: "Visual Pattern Recognition Model",
    description: "Deep learning-based visual pattern recognition model using CNNs for image understanding (project under development).",
    image: null,
    tags: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
  },
];
