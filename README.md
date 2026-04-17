<div align="center">💬 Mongo x Express — Mini WhatsApp

""Node.js" (https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)" (https://nodejs.org/)
""Express.js" (https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)" (https://expressjs.com/)
""MongoDB" (https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)" (https://mongodb.com/)
""EJS" (https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)" (https://ejs.co/)
""Render" (https://img.shields.io/badge/Render-5C4EE5?style=for-the-badge&logo=render&logoColor=white)" (https://render.com/)

🚀 A WhatsApp-style chat application built using MongoDB, Express, Node.js & EJS

🔗 Live Demo
https://whatsapp-chatbox-clone-1.onrender.com/chats

</div>---

📌 Project Overview

Feature| Description
💬 Chat System| Create, edit & delete chats
📄 Data View| View all chats in UI
🕒 Timestamp| Shows message date & time
🎨 UI| Clean WhatsApp-inspired design
⚡ Backend| REST API with Express

---

🚀 Features

- 🟢 Create new chats
- 📄 View all chats
- ✏️ Edit messages
- ❌ Delete chats
- 🕒 Timestamp display
- 🎨 Simple & clean UI

---

🛠️ Tech Stack

Layer| Technology
🧠 Backend| Node.js, Express.js
🗄️ Database| MongoDB (Mongoose)
🎨 Frontend| EJS, HTML, CSS
⚙️ Tools| Method-Override, Faker

---

📁 Project Structure

Whatsapp-chatbox-Clone-/
│
├── 📂 models
│   └── chat.js
│
├── 📂 views
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── 📂 public
│   └── style.css
│
├── 📄 index.js
├── 📄 init.js
├── 📄 package.json
└── 📄 README.md

---

🔄 Application Flow (Flowchart)

User Request
     ↓
Route (/chats)
     ↓
Controller (Express)
     ↓
Database (MongoDB)
     ↓
Fetch Data
     ↓
Render EJS View
     ↓
Send Response to User

---

⚙️ Setup Guide

Step| Command
1️⃣ Clone Repo| "git clone https://github.com/Sairaj2033/Whatsapp-chatbox-Clone-.git"
2️⃣ Enter Folder| "cd Whatsapp-chatbox-Clone-"
3️⃣ Install| "npm install"
4️⃣ Start MongoDB| "mongod"
5️⃣ Run App| "node index.js"

🌍 Open:

http://localhost:8080/chats

---

🔁 Routes Overview

Method| Route| Description
GET| /chats| Show all chats
GET| /chats/new| Create chat form
POST| /chats| Add new chat
GET| /chats/:id/edit| Edit chat
PUT| /chats/:id| Update chat
DELETE| /chats/:id| Delete chat

---

🧠 Concepts Covered

Concept| Usage
REST APIs| Routing & CRUD
MongoDB| Data storage
Mongoose| Schema modeling
EJS| Server-side rendering
Middleware| Method Override

---

🚀 Deployment

Hosted on Render

git add .
git commit -m "update"
git push origin main

---

👨‍💻 Author

Sairaj Patil
B.E AI & DS | MERN Developer

---

⭐ Support

If you like this project, give it a ⭐ on GitHub!
