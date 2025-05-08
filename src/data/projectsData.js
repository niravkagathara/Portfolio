// src/data/projectsData.js
import a from "../Assets/Projects/1.png";
import b from "../Assets/Projects/readews.png";
const projectsData = [
   
      {
        id: 1,
        title: "IoT-Based Smart Home Automation Project – Tech Home",
        images: [
          require("../Assets/Projects/1.JPG"),
          require("../Assets/Projects/2.JPG"),
          require("../Assets/Projects/3.JPG"),
          require("../Assets/Projects/4.jpg"),
          require("../Assets/Projects/5.jpg"),
          require("../Assets/Projects/6.jpg"),
          require("../Assets/Projects/7.JPG"),
          require("../Assets/Projects/8.jpg"),
          require("../Assets/Projects/9.jpg"),
          require("../Assets/Projects/10.jpg"),
          require("../Assets/Projects/11.jpg"),
          require("../Assets/Projects/12.jpg"),
          require("../Assets/Projects/13.jpg"),
          require("../Assets/Projects/14.jpg"),
          require("../Assets/Projects/15.jpg"),
          require("../Assets/Projects/16.png"),
          require("../Assets/Projects/17.png"),
          require("../Assets/Projects/18.png"),
          require("../Assets/Projects/19.png"),
          require("../Assets/Projects/20.png"),

         
        ],
        description: `🚀 Excited to share our Smart Home Automation Project – "Tech Home"

 📍Under the Student Startup and Innovation Policy (SSIP) at Darshan University
Darshan University

This project was a part of our college initiative where we built a Smart IoT-based Home Automation System using NodeMCU ESP8266, MQTT communication, React.js, Node.js, and Flutter. 💡📱🌐

💡 Through this project, we explored:

Motion detection with PIR sensors
Smoke detection and automatic fan control via MQ-5
Flame detection with alert system
Soil moisture detection for smart gardening
Car parking assistance using ultrasonic sensors
Day-night sensing using LDR
Temperature & humidity monitoring
Manual + app/web controlled lights & fans

🔗 All devices and sensors are controllable via web and mobile apps – built with responsive UI, user login system, and real-time MQTT communication via HiveMQ Cloud.

💻 Tech Stack Used:

IoT (NodeMCU ESP8266)
MQTT Protocol
Frontend: React.js
Backend: Node.js
Mobile App: Flutter
UI/UX Design

🔗 GitHub Repositories:
Flutter App:
https://lnkd.in/dVMxZtqP

ESP8266 IoT Code: 
https://lnkd.in/duqVGph3

React Frontend:
https://lnkd.in/djdsutt4

Node.js Backend:
https://lnkd.in/dKM5RXSn


🌐 Live Website: https://lnkd.in/dYU3vFb9

📸 Check out the circuit diagrams and working photos in the post!

 🎥 Video coming soon in the next post!

👨‍💻 Team Members:
 
Developer Team:
Nirav Kagathara 
Kashyap Bera
Devansh Gediya 

🙏 We are thankful to
Prof. Manish Sanghani, Provost, Darshan University
Dr. Gopi Sanghani, Dean, Computer Department
All our supportive faculties
Everyone who appreciated and gave valuable suggestions
And especially our mentor Prof Bhushan Joshi for constant guidance throughout the journey

📚 This has been an incredible learning experience for us. Proud to innovate, learn, and build something meaningful!`,
        features: [  `
Motion detection with PIR sensors
Smoke detection and automatic fan control via MQ-5
Flame detection with alert system
Soil moisture detection for smart gardening
Car parking assistance using ultrasonic sensors
Day-night sensing using LDR
Temperature & humidity monitoring
Manual + app/web controlled lights & fans
`,`
🔗 All devices and sensors are controllable via web and mobile apps – built with responsive UI, user login system, and real-time MQTT communication via HiveMQ Cloud.`,
"create website and mobile appliction with login and authentication",
        
        ],
        technologies: ["IoT","C/C++","MQTT","Esp8266","Reactjs", "Dart","Flutter","nodejs"],
        linkedinLink: "https://www.linkedin.com/posts/nirav-kagathara-80978124b_iot-smarthome-techhome-activity-7321776929840218112-kuyu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD3fV0kBhOoBZsvI2BCoEgkgQ9NMyxKXZb8",
        demoLink: "https://tech-home-iot.vercel.app/",
        githubLink: "https://github.com/niravkagathara/Tech_Home_app_PU.git",
      },
      {
        id: 2,
        title: "IoT-Based RFID Attendance System",
        images: [
          require("../Assets/Projects/r1.png"),
          require("../Assets/Projects/r2.png"),
          require("../Assets/Projects/r3.png"),
          require("../Assets/Projects/r4.png"),
          require("../Assets/Projects/r5.png"),
          require("../Assets/Projects/r6.png"),
          require("../Assets/Projects/r7.png"),
          require("../Assets/Projects/r8.png"),
          require("../Assets/Projects/r9.png"),
          require("../Assets/Projects/r10.png"),
          require("../Assets/Projects/r11.png"),
          require("../Assets/Projects/r12.png"),
          require("../Assets/Projects/r13.png"),
          require("../Assets/Projects/r14.jpg"),
          require("../Assets/Projects/r15.png"),
          require("../Assets/Projects/r16.jpg"),
          require("../Assets/Projects/r17.jpg"),
          require("../Assets/Projects/r18.jpg"),
          require("../Assets/Projects/r19.jpg"),
          require("../Assets/Projects/r20.jpg"),
          require("../Assets/Projects/r21.jpg"),
        ],
        description: `🚀 RFID Attendance System – My IoT Project

 📍 Developed in Semester 6 | IoT + Web Development Integration

I'm excited to share one of my key projects – a Smart RFID-based Attendance System created as part of my Semester 6 curriculum. The goal was to automate student attendance using IoT and web technologies.

🔧 Components Used:
NodeMCU ESP8266
RFID Receiver (RC522)
I2C LCD Display
Buzzer & LEDs
PHP & Node.js for backend
MySQL Database

📲 How It Works:

When a student enters the classroom and scans their RFID ID card, the system checks if the student belongs to that class.

✅ If valid: Attendance is added to the database, and the LCD shows the student's enrollment number with a "Present" status.

❌ If not valid (student from another class): Access is denied, and the display shows "Student Not Allowed".


💻 Software Highlights:

Node.js API:

Receives UID from the device
Verifies student
Adds attendance to the database
Sends response back to ESP8266

PHP Web Portal:

Login system
Admin Dashboard
Student Management: Add/Edit/View students
Live Student Info: Displays details of recently scanned cards
Assign New Card: Add student details for new cards
Attendance Records: Full records with advanced filters (independent filtering for every field)


📸 Prototype Built Step-by-Step
 👉 Check out the circuit diagram and photos below to see the physical prototype.

📂 Project Repositories:
🔗 Frontend (PHP):https://lnkd.in/d3azBi53
🔗 Node.js + MySQL API:https://lnkd.in/dTYP6-sh
🔗 ESP8266 IoT Code:
https://lnkd.in/dad3FUud

📹 Project Demo Video:https://lnkd.in/dFxBKrYr
 (Will be posted in my next LinkedIn update)

🔍 Built with a vision to digitize attendance systems and enhance classroom management through automation and IoT.`,
        features: [
            `Receives UID from the device
Verifies student
Adds attendance to the database
Sends response back to ESP8266`,
`
PHP Web Portal:
Login system
Admin Dashboard
Student Management: Add/Edit/View students
Live Student Info: Displays details of recently scanned cards
Assign New Card: Add student details for new cards
Attendance Records: Full records with advanced filters (independent filtering for every field)`,
        
        ],
        technologies: ["IoT","C/C++","RC522-Rfid","Esp8266","PHP", "MySQL",],
        linkedinLink: "https://www.linkedin.com/posts/nirav-kagathara-80978124b_iot-rfid-attendancesystem-activity-7319710883725631489-D5XM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD3fV0kBhOoBZsvI2BCoEgkgQ9NMyxKXZb8",
        demoLink: null,
        githubLink: "https://github.com/niravkagathara/RFID_Frontend_PHP.git",
      },
      {
        id: 3,
        title: "E-commerce website",
        images: [
          require("../Assets/Projects/e1.png"),
          require("../Assets/Projects/e2.png"),
          require("../Assets/Projects/e3.png"),
          require("../Assets/Projects/e4.png"),
          require("../Assets/Projects/e5.png"),
          require("../Assets/Projects/e6.png"),
          require("../Assets/Projects/e7.png"),
          require("../Assets/Projects/e8.png"),
          require("../Assets/Projects/e9.png"),
          require("../Assets/Projects/e10.png"),
          require("../Assets/Projects/e11.png"),
          require("../Assets/Projects/e12.png"),
          require("../Assets/Projects/e13.png"),
          require("../Assets/Projects/e14.png"),
        ],
        description: `🚀 Excited to announce the deployment of my new MERN stack e-commerce website! 🎉
  
   Features & Technologies:
  
  - Frontend: React, Redux Toolkit, React Router, MUI, Styled Components, Bootstrap
  - Backend: Node.js, Express, MongoDB, Mongoose
  - UI/UX: Emotion, Formik, React Icons, React Feather, React Multi Carousel, React Modal, React Toastify
  - Security & Authentication: Helmet, JSON Web Token, Validator
  - File Handling: Multer
  - Environment Configuration: Dotenv
  - Logging & Debugging: Morgan
  - Testing: Jest, Testing Library
  - Other Tools: Web Vitals, React Pro Sidebar, CORS
  - cookies manage 
  
  Check out the source code on GitHub:https://lnkd.in/drvxthvP
  
  Visit the live site:https://lnkd.in/dCn-jPDt
  
  Thanks to everyone who supported this project. Looking forward to your feedback! 🙌
  
  hashtag#MERN hashtag#Ecommerce hashtag#React hashtag#NodeJS hashtag#WebDevelopment hashtag#FullStack hashtag#MongoDB hashtag#Express hashtag#JavaScript hashtag#Deployment hashtag#UIUX hashtag#Security hashtag#Authentication hashtag#Logging
  `,
        features: [
          `Features (Admin, User, Cart, etc.)
  Tech Stack Used
  UI/UX Design Overview
  Component Structure (Pages and Components)
  API Integration (e.g., Product Listings, Auth, Payments)
  Database Schema (if backend is included)
  Deployment Info (Hosting, CI/CD, etc.)
  Challenges Faced & Solutions
  Project Documentation or README`,
          "Product catalog with categories",
          "User authentication and profiles",
          "Shopping cart and checkout",
          "Admin dashboard for product management"
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
        linkedinLink: "https://www.linkedin.com/posts/nirav-kagathara-80978124b_mern-ecommerce-react-activity-7206285241118842880-ZVj8?utm_source=share&utm_medium=member_desktop",
        demoLink: "https://ecommerce-nk.vercel.app/",
        githubLink: "https://github.com/niravkagathara/Final.git"
      },
    {
      id: 4,
      title: "Doctor-Appointment Management",
      images: [
        require("../Assets/Projects/d1.jpg"),
        require("../Assets/Projects/d2.jpg"),
        require("../Assets/Projects/d3.jpg"),
        require("../Assets/Projects/d4.jpg"),
        require("../Assets/Projects/d5.jpg"),
        require("../Assets/Projects/d6.jpg"),
        require("../Assets/Projects/d7.jpg"),
        require("../Assets/Projects/d8.jpg"),
        require("../Assets/Projects/d9.jpg"),
        require("../Assets/Projects/d10.jpg"),
        require("../Assets/Projects/d11.jpg"),
        require("../Assets/Projects/d12.jpg"),
        require("../Assets/Projects/d13.jpg"),
        require("../Assets/Projects/d14.jpg"),
        require("../Assets/Projects/d16.jpg"),
        require("../Assets/Projects/d17.jpg"),
        require("../Assets/Projects/d18.jpg"),
        require("../Assets/Projects/d19.jpg"),
        require("../Assets/Projects/d20.jpg"),
        require("../Assets/Projects/d21.jpg"),
      ],
      description: `🚀 Excited to Showcase My Doctor Appointment Management System! 🚀

I'm thrilled to introduce my latest project, a Doctor Appointment Management System designed to enhance hospital operations. Built with PHP and SQL, this system features a responsive design and offers comprehensive functionalities for patients, doctors, and admins.
Full video upload in YouTube:https://lnkd.in/dTx-enEE

🔑 Demo Credentials:
- Admin Login: 
 - Email: admin@gmail.com
 - Password: admin123

- Doctor Login: 
 - Email: doctor@gmail.com
 - Password: doctor123

This project has been an incredible journey in web development and responsive design. I'm excited to share these features and look forward to further enhancements!

[Note: open link in any browser show some SSL error , use website click on advanced button and press unsafe to open site and u can try and check it my project]
🔗 hashtag#WebDevelopment hashtag#PHP hashtag#SQL hashtag#ResponsiveDesign hashtag#AdminPanel hashtag#UserExperience hashtag#HealthcareTech hashtag#ProjectManagement`,
      features: [
        `- Admin Panel:
 - Patient Management: View, edit, and manage patient accounts and profiles.
 - Doctor Management: Manage doctor information, including adding new doctors.
 - Appointment Management: View and update appointment statuses.
 - Schedule Management: Manage all schedules, including adding new ones and editing their status.
 - View All Appointments: Detailed overview of all appointments, including patient details and appointment times.
`,`
- Doctor Functionality:
 - View All Schedules: Access and manage schedules specific to each doctor.
 - Add New Schedule: Doctors can add their own availability.
 - Appointment Management: View patient appointments, including times and details.
`,`
- Patient Functionality:
 - Register as New Patient: Easy process to create a new patient account.
 - Login: Secure access to patient accounts.
 - Add Appointment: Schedule new appointments with specific doctors.
 - Manage Appointments: View, modify, and cancel existing appointments.
 - View Past Appointments: Access a history of all past appointments and meetings.`,
    
      ],
      technologies: ["PHP", "SQL", "Bootstrap", "JavaScript"],
      linkedinLink: "https://www.linkedin.com/posts/nirav-kagathara-80978124b_webdevelopment-php-sql-activity-7230564598725132288-BlJ8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD3fV0kBhOoBZsvI2BCoEgkgQ9NMyxKXZb8",
      demoLink: "http://doctor-app.infinityfreeapp.com/DAM",
      githubLink: "https://github.com/niravkagathara/Doctor-appointment-management-PHP.git"
    },
    {
        id: 5,
        title: "DU Games",
        images: [
          require("../Assets/Projects/g1.jpg"),
          require("../Assets/Projects/g2.jpg"),
          require("../Assets/Projects/g3.jpg"),
          require("../Assets/Projects/g4.jpg"),
          require("../Assets/Projects/g5.jpg"),
          require("../Assets/Projects/g6.jpg"),
          require("../Assets/Projects/g7.jpg"),
          require("../Assets/Projects/g8.jpg"),
          require("../Assets/Projects/g9.jpg"),
          require("../Assets/Projects/g10.jpg"),
          require("../Assets/Projects/g11.jpg"),
        ],
        description: `🚀 Introducing DU Games – Darshan University 🎮✨
I'm thrilled to share DU Games, an interactive online gaming platform developed by students of Darshan University! This project beautifully combines web development and game development, offering a fun and engaging experience for users while showcasing innovative features.

🔑 Key Highlights:
🎲 Games Library: Dive into exciting games like 2048, Car Chase, Flappy Bird, and more – crafted for players of all ages.
📝 Feedback System: Share your valuable thoughts to help us enhance the platform.
👩‍💻 Developer Profiles: Meet the talented creators behind DU Games with links to their professional profiles.
🔧 Admin Panel: Effortlessly manage games and user feedback for a seamless experience.
👤 User Profiles: Personalized dashboards for registered users.
🛠 Tech Stack:
Frontend: HTML, CSS, JavaScript, Bootstrap
Backend: PHP & MySQL

We initially developed the platform using HTML, but later redeveloped it in PHP and MySQL, making it more dynamic and robust. This transformation enhanced the site's functionality and scalability, enabling seamless integration of features like user authentication and data management.
This project wouldn't have been possible without the incredible guidance and mentorship of Prof. Vijay Shekhat — thank you for your unwavering support and insightful suggestions! 🙏 

📂 Explore the project on GitHub: https://lnkd.in/dahHsEcS

It's been an amazing journey of learning, collaboration, and growth. I'm excited to keep improving and expanding this platform. Your feedback and ideas for future developments are most welcome! 🌟`,
        features: [
            `🎲 Games Library: Dive into exciting games like 2048, Car Chase, Flappy Bird, and more – crafted for players of all ages.`,
`📝 Feedback System: Share your valuable thoughts to help us enhance the platform.`,
`👩‍💻 Developer Profiles: Meet the talented creators behind DU Games with links to their professional profiles.`,
`🔧 Admin Panel: Effortlessly manage games and user feedback for a seamless experience.`,
`👤 User Profiles: Personalized dashboards for registered users`,
        
        ],
        technologies: ["PHP", "MySQL", "HTM", "CSS","JavaScript","Bootstrap"],
        linkedinLink: "https://www.linkedin.com/posts/nirav-kagathara-80978124b_darshanuniversity-webdevelopment-gamedevelopment-activity-7275125983735676929-Pcjs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD3fV0kBhOoBZsvI2BCoEgkgQ9NMyxKXZb8",
        demoLink: "https://dugames.aswdc.in/",
        githubLink: "https://github.com/niravkagathara/DU_game.git",
      },
      
    {
        id: 6,
        title: "Olx Clone App",
        images: [
          require("../Assets/Projects/o1.png"),
          require("../Assets/Projects/o2.png"),
          require("../Assets/Projects/o3.png"),
          require("../Assets/Projects/o4.png"),
          require("../Assets/Projects/o5.jpg"),
          require("../Assets/Projects/o6.jpg"),
          require("../Assets/Projects/o7.jpg"),
          
        ],
        description: `This is a mobile application developed using Flutter that serves as an OLX-style marketplace where users can post, buy, and sell used products. The app replicates core OLX features while offering a clean and simple interface for smooth user experience. Users can create accounts, browse listings by category, upload product images, and communicate with interested buyers or sellers.

🚀 Key Features:
🛒 Product Listings: Users can browse items posted for sale, categorized by type (e.g., electronics, vehicles, furniture).

➕ Add Products: Sellers can post products by providing title, description, price, category, and images.

🔐 User Authentication: Register and login using email and password.

📦 My Ads Section: View, update, or delete ads posted by the logged-in user.

🔍 Search & Filters: Keyword-based search and category filters for easier discovery.

🖼️ Image Uploading: Post ads with one or more product images (stored in Firebase or local server).

🧭 Location Support (Optional): Add product location or city to improve visibility.`,
        features: [
            "splash screen",
            "home screen",
             "detail screen",
            "profile page ",
          "Basic CRUD Operation",
          "Database SQL",
          "Shared preference login",

        ],
        technologies: ["Dart", "SQL", "Flutter", "Shared Preference"],
        linkedinLink: "https://www.linkedin.com/posts/nirav-kagathara-80978124b_flutter-appdevelopment-olxclone-activity-7159536736727973888-il1G?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD3fV0kBhOoBZsvI2BCoEgkgQ9NMyxKXZb8",
        demoLink: null,
        githubLink: "https://github.com/niravkagathara/olx_clone_flutter.git"
      },
      
  ];
  
  export default projectsData;