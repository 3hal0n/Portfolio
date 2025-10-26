export const myProjects = [
  
  {
  id: 2,
  title: "🎮Avyra Game Download Platform",
  description:
    "Avyra is a fullstack game download web application inspired by platforms like Steam. Built with React and Spring Boot, Avyra offers a complete gaming storefront experience — from browsing games to secure downloads after purchase. With a modern glassmorphic UI, 3D animations, AI assistant, and PayPal integration, it delivers a seamless and engaging experience for gamers.",
  subDescription: [
    "🔐 User Authentication: JWT-based secure registration, login, and password management.",
    "🛍️ Wishlist & Cart: Add games to wishlist or cart with full management functionality.",
    "💳 PayPal Payments: Checkout securely with PayPal integration and sandbox testing.",
    "📥 Game Downloads: Download purchased games securely through backend validation.",
    "🗣️ AI Chatbot Assistant: Gemini-powered chatbot for support and game recommendations.",
    "⭐ Game Reviews: Submit, read, and delete reviews directly on game detail pages.",
    "📁 User Dashboard: Tabbed profile with account details, password change, and order history.",
    "🎨 Glassmorphic UI: Neon/glass-like interface with Tailwind CSS and custom animations.",
    "🧠 3D Login/Register: Animated 3D character models powered by React Three Fiber and Drei.",
  ],
  href: "https://github.com/3hal0n/Avyra",
  logo: "",
  image: "/assets/projects/Avyra.png",
  tags: [
    {
      id: 1,
      name: "React",
      path: "/assets/logos/react.svg",
    },
    {
      id: 2,
      name: "Spring Boot",
      path: "/assets/logos/springboot.svg",
    },
    {
      id: 3,
      name: "TailwindCSS",
      path: "/assets/logos/tailwindcss.svg",
    },
    {
      id: 4,
      name: "MySQL",
      path: "/assets/logos/mysql.svg",
    },
    {
      id: 5,
      name: "Three.js",
      path: "/assets/logos/threejs.svg",
    },
    {
      id: 6,
      name: "JWT",
      path: "/assets/logos/jwt.svg",
    },
    {
      id: 7,
      name: "PayPal",
      path: "/assets/logos/paypal.svg",
    },
  ],
},
  {
    id: 3,
    title: "🏥 Arogya Patient Management System",
    description:
      "Arogya is a modern, web-based Patient Management System designed to streamline healthcare workflows for clinics, hospitals, and independent medical practitioners. With a strong focus on usability, automation, and visual engagement, Arogya simplifies managing patient records, appointments, and notifications — empowering healthcare providers to deliver efficient, timely care.",
    subDescription: [
      "📝 Patient Registration: Secure and intuitive onboarding with detailed forms and file uploads.",
      "📅 Appointment Scheduling: Book, view, and manage appointments with real-time status tracking.",
      "📊 Admin Dashboard: Centralized dashboard for managing patients, appointments, and users with visual status cards and data tables.",
      "🔄 Status Tracking: Real-time appointment statuses: pending, confirmed, cancelled, and more.",
      "📲 Automated SMS Notifications: Notify patients instantly when appointments are created, updated, or cancelled.",
      "🔐 User Authentication: Secure login and verification for admins and patients using Appwrite.",
      "📱 Responsive Design: Fully responsive and optimized for desktop, tablet, and mobile.",
      "📎 File Uploads: Upload and manage patient documents and medical records.",
      "🖼️ 3D Model Integration: Interactive 3D models (Doctor, Hospital, Lab Machine, Computer) rendered via React Three Fiber and Drei on landing and success pages.",
    ],
    href: "https://github.com/3hal0n/Arogya",
    logo: "",
    image: "/assets/projects/arogya.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Next.js",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Three.js",
        path: "/assets/logos/threejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "🏥 MediWay Hospital Management System",
    description:
      "MediWay is a full-stack hospital management platform that streamlines healthcare operations through appointment scheduling, patient record management, and secure online payments. It bridges patients, doctors, and administrators while prioritizing reliability, scalability, and security with modern enterprise technologies.",
    subDescription: [
      "📅 Appointment Scheduling: Real-time doctor availability with concurrency control to prevent double bookings.",
      "🩺 Patient Records: Secure CRUD operations with QR-code-based digital health cards.",
      "💳 Payment System: PayPal Sandbox integration for secure payments and automated PDF+QR receipt generation.",
      "📊 Admin Dashboard: Interactive analytics with PDF/CSV export for revenue and performance tracking.",
      "🔐 Role-Based Access: Admin, Doctor, and Patient roles using JWT authentication and Spring Security.",
      "📦 DevOps & Testing: Docker, Docker Compose, CI/CD, and extensive unit & integration tests with JaCoCo coverage reports."
    ],
  href: "https://github.com/Y3S1-WE20/MediWay",
  deploy: "https://medi-way.vercel.app/",
    logo: "/assets/logos/sliit-logo.png",
    image: "/assets/projects/mediway.png",
    tags: [
      { id: 1, name: "Spring Boot", path: "/assets/logos/springboot.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/mysql.svg" },
      { id: 4, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 5, name: "PayPal", path: "/assets/logos/paypal.svg" },
      { id: 6, name: "JUnit 5", path: "/assets/logos/junit.svg" },
      { id: 7, name: "Mockito", path: "/assets/logos/mockito.svg" },
      { id: 8, name: "Spring Security", path: "/assets/logos/springboot.svg" }
    ],
  },
  {
    id: 4,
    title: "🧰 Item Inventory & Maintenance Management System",
    description:
      "A full-stack web application for efficient inventory tracking, usage logging, and maintenance management. Built for modern organizations, it streamlines asset handling with real-time alerts, interactive 3D models, and exportable reports — all within a secure, role-based environment.",
    subDescription: [
      "🔐 Authentication & Role-Based Access: Secure JWT-based login/registration with role-based access (Admin, Manager, Employee).",
      "📦 Inventory Management: Add, update, and delete items with tracking for quantities, categories, suppliers, and reorder thresholds.",
      "📉 Stock Monitoring: Real-time stock level tracking with configurable low-stock alerts.",
      "📝 Usage Reporting: Log item usage with project name, purpose, and date. Search/filter logs and export as CSV or PDF.",
      "🛠️ Maintenance Logs: Record maintenance events, schedule future maintenance, and track costs and history per item.",
      "📬 Notifications: Alerts for low-stock items and maintenance due.",
      "📊 Data Visualization: Realtime inventory and usage charts with Chart.js and Recharts.",
      "🖼️ 3D Model Integration: Upload and interact with .glb or .gltf inventory models with rotate, zoom, and pan functionality.",
      "📄 Export Support: Generate downloadable reports (Inventory, Usage, Maintenance) in PDF/CSV formats.",
      "📱 Responsive UI: Optimized for desktops, tablets, and mobile devices.",
    ],
    href: "https://github.com/3hal0n/InventoryManagement-Greenscape",
    logo: "",
    image: "/assets/projects/greenscape.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/microsoftsqlserver.svg",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 5,
        name: "Three.js",
        path: "/assets/logos/threejs.svg",
      },
    ],
  },{
  id: 5,
  title: "📄 PDF Chat AI",
  description:
    "PDF Chat AI is an intelligent document assistant that allows users to upload and interact with PDF files using natural language. Built with Streamlit and Hugging Face models, it leverages retrieval-augmented generation (RAG) to enable fast, context-aware question answering over document content.",
  subDescription: [
    "📤 Multi-PDF Upload: Drag and drop multiple PDF files for combined semantic analysis.",
    "🔍 Semantic Search: Uses FAISS for fast vector similarity search over document chunks.",
    "🤖 Answer Generation: Integrates Hugging Face's instructor-xl for embedding and google/flan-t5-large for answering.",
    "💬 Conversational Memory: Maintains context of previous questions for more coherent interaction.",
    "📊 Streamlit Interface: Clean and minimal UI optimized for user-friendly PDF interactions.",
    "⚙️ CPU Optimized: Designed for smooth performance without requiring GPU hardware.",
    "📚 Retrieval-Augmented Generation: Implements RAG pipeline for context-aware responses.",
    "🧠 NLP Pipeline: Query embedding → FAISS chunk retrieval → LLM response generation.",
  ],
  href: "https://github.com/3hal0n/pdfChat-ai",
  logo: "",
  image: "/assets/projects/pdfchat.png",
  tags: [
    {
      id: 1,
      name: "Python",
      path: "/assets/logos/python.svg",
    },
    {
      id: 2,
      name: "Streamlit",
      path: "/assets/logos/streamlit.svg",
    },
    {
      id: 3,
      name: "Hugging Face",
      path: "/assets/logos/huggingface.svg",
    },
    {
      id: 4,
      name: "FAISS",
      path: "/assets/logos/faiss.svg",
    },
    {
      id: 5,
      name: "NLP",
      path: "/assets/logos/nlp.svg",
    },
  ],
},

  {
  id: 1,
  title: "🚨 National AI-Optimized Disaster Platform for Sri Lanka (ResQ)",
  description:
    "ResQ is a dual-platform disaster management solution built during Codefest 2025 (1st Runner-Up) to address Sri Lanka's disaster response challenges. It includes a React Native mobile app for citizens and a React-based web dashboard for government authorities. The platform enables real-time SOS alerts, incident reporting, AI-powered safety guidance, and optimized resource allocation using WebSocket-powered live updates.",
  subDescription: [
    "📱 Mobile App (Citizens): SOS alerts with GPS location, incident reporting with photo uploads, AI Safety Assistant, risk maps with real-time weather and disaster zones, and offline-first design.",
    "💻 Web Dashboard (Government): Role-based access, live SOS signal monitoring, analytics dashboard, reports heatmap, AI-powered resource allocation, and disaster creation with severity tracking.",
    "🔐 SLUDI Authentication: Secure OAuth2-based login for both citizens and government officials.",
    "⚡ Real-Time Features: WebSocket connections for instant alerts, live monitoring, and data synchronization.",
    "🛠️ Technology Stack: React Native (mobile), React (web), Express.js backend, MongoDB Atlas (geospatial indexing), Google Maps API, Dialogflow/Rasa AI chatbot.",
    "🏆 Recognition: Codefest 2025 Hackathon – 1st Runner-Up.",
  ],
  href: "https://github.com/disaster-response-sl/national-disaster-platform",
  logo: "",
  image: "/assets/projects/resq.png",
  tags: [
    { id: 1, name: "React Native", path: "/assets/logos/reactnative.svg" },
    { id: 2, name: "React", path: "/assets/logos/react.svg" },
    { id: 3, name: "Express.js", path: "/assets/logos/javascript.svg" },
    { id: 4, name: "MongoDB Atlas", path: "/assets/logos/mongodb.svg" },
    { id: 5, name: "WebSockets", path: "/assets/logos/websockets.svg" },
    { id: 6, name: "Google Maps API", path: "/assets/logos/googlemaps.svg" },
    { id: 7, name: "Dialogflow/Rasa", path: "/assets/logos/dialogflow.svg" },
    { id: 8, name: "OAuth2", path: "/assets/logos/oauth2.svg" },
  ],
},

];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shalon-fernando-229826315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/3halon?igsh=MWdtNXQyb2kwaDl2NA==",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "Github",
    href: "https://github.com/3hal0n",
    icon: "/assets/socials/github.svg",
  },
  
];

export const experiences = [
  {
    title: "Software Engineer",
    job: "Freelance",
    date: "2025",
    contents: [
      "Hire me no experience yet"
    ],
  },
 
];
export const reviews = [
  {
    name: "Kamal",
    username: "@Kamal",
    body: "It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Shaneli",
    username: "@Shaneli",
    body: "I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Namal",
    username: "@Namal",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Nimali",
    username: "@Nimali",
    body: "aaaaaa",
    img: "https://robohash.org/alice",
  },
  {
    name: "Nimal",
    username: "@Nimal",
    body: "Incredible work!",
    img: "https://robohash.org/bob",
  },
  {
    name: "Pamal",
    username: "@Pamal",
    body: "stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Sirimal",
    username: "@Sirimal",
    body: "Simply breathtaking.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Kumari",
    username: "@Kumari",
    body: "So glad I found this.",
    img: "https://robohash.org/eve",
  },
];



export const educationExperiences = [
  {
    institution: "Maris Stella College Negombo",
    degree: "Advanced Level",
    duration: "2022",
    description: "Completed Advanced Level studies preparing for higher education in Information Technology.",
    icon: "/assets/maris-stella-logo.png", 
    animation: "Learning" 
  },
  {
    institution: "SLIIT",
    degree: "BSc (Hons) in Information Technology Specialising in Software Engineering",
    duration: "Jan 2023 - May 2027",
    description: "Pursuing a Bachelor's degree in Information Technology with a specialization in Software Engineering, focusing on modern development practices and emerging technologies.",
    icon: "/assets/sliit-logo.png", 
    animation: "Studying" 
  }
];