💬 Mongo x Express — Mini WhatsApp

"Node.js" (https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
"Express.js" (https://img.shields.io/badge/Express.js-Framework-black?logo=express)
"MongoDB" (https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
"EJS" (https://img.shields.io/badge/EJS-Templating-yellow)
"Render" (https://img.shields.io/badge/Live-Deployed-5c6ac4?logo=render)

A WhatsApp-style chat application built with MongoDB, Express.js, Node.js, and EJS.
This project demonstrates CRUD operations, RESTful routing, and database integration with a simple and clean UI.

---

🌐 Live Demo

🔗 Deployed Link:
https://whatsapp-chatbox-clone-1.onrender.com/chats

---

✨ Features

- 🟢 Create new chats
- 📄 View all chats
- ✏️ Edit existing messages
- ❌ Delete chats
- 🕒 Display message date and time
- 🎨 WhatsApp-inspired clean interface

---

🛠️ Tech Stack

Category| Technology
Backend| Node.js, Express.js
Database| MongoDB, Mongoose
Frontend| EJS, HTML, CSS
Utilities| Method-Override, Faker

---

📂 Project Structure

Path| Description
"models/chat.js"| Mongoose schema for chats
"views/index.ejs"| Displays all chats
"views/new.ejs"| Form to create a new chat
"views/edit.ejs"| Form to edit an existing chat
"public/style.css"| Styling for the application
"index.js"| Main server and route handling
"package.json"| Project dependencies and scripts

📁 Folder Tree

Whatsapp-chatbox-Clone-/
│
├── models/
│   └── chat.js
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── public/
│   └── style.css
│
├── index.js
├── package.json
└── README.md

---

⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/Sairaj2033/Whatsapp-chatbox-Clone-.git

2. Move into the project directory

cd Whatsapp-chatbox-Clone-

3. Install dependencies

npm install

4. Start MongoDB locally

mongod

5. Run the application

node index.js

6. Open in browser

http://localhost:8080/chats

---

🔁 Routes Overview

Method| Route| Description
GET| "/chats"| Show all chats
GET| "/chats/new"| Form to create chat
POST| "/chats"| Add new chat
GET| "/chats/:id/edit"| Form to edit chat
PUT| "/chats/:id"| Update chat
DELETE| "/chats/:id"| Delete chat

---

🧠 Concepts Covered

- Express Routing
- RESTful APIs
- MongoDB CRUD Operations
- Mongoose Models
- EJS Templating
- Method Override
- Form Handling

---

🚀 Deployment

This project is deployed on Render.

GitHub push commands used for deployment updates

git add .
git commit -m "update project"
git push origin main

---

📌 Future Improvements

- 🔐 User authentication
- 💬 Real-time chat using Socket.io
- 📱 Responsive UI improvements
- ☁️ Better deployment and environment handling

---

👨‍💻 Author

Sairaj Patil
B.E. AI & DS Student | MERN Developer

---

⭐ Support

If you like this project, give it a star on GitHub.- Mongoose models
- EJS templating
- Middleware handling

---

🚧 Future

- 🔐 Authentication
- 💬 Real-time chat
- 📱 UI improvements

---

👨‍💻 Author

Sairaj Patil
B.E AI & DS | MERN Developer

---

⭐ Support

If you like it, give a ⭐ on GitHub!
