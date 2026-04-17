<div align="center">💬 Mongo x Express — Mini WhatsApp

""Node.js" (https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white)" (https://nodejs.org/)
""Express.js" (https://img.shields.io/badge/Express.js-Framework-000000?logo=express&logoColor=white)" (https://expressjs.com/)
""MongoDB" (https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)" (https://mongodb.com/)
""EJS" (https://img.shields.io/badge/EJS-Templating-B4CA65?logo=ejs&logoColor=black)" (https://ejs.co/)
""Render" (https://img.shields.io/badge/Render-Deployed-5C4EE5?logo=render&logoColor=white)" (https://render.com/)

</div>🚀 A WhatsApp-style chat app built using MongoDB, Express, Node.js & EJS

🔗 Live Demo
https://whatsapp-chatbox-clone-1.onrender.com/chats

</div>---

✨ Features

- 🟢 Create new chats
- 📄 View all chats
- ✏️ Edit messages
- ❌ Delete chats
- 🕒 Timestamp (date & time)
- 🎨 Clean WhatsApp-style UI

---

🛠️ Tech Stack

Layer| Technology
Backend| Node.js, Express.js
Database| MongoDB (Mongoose)
Frontend| EJS, HTML, CSS
Utilities| Method-Override, Faker

---

📁 Project Structure

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
├── init.js
├── package.json
└── README.md

---

⚙️ Setup Guide

1️⃣ Clone Repository

git clone https://github.com/Sairaj2033/Whatsapp-chatbox-Clone-.git

2️⃣ Go to Project Folder

cd Whatsapp-chatbox-Clone-

3️⃣ Install Dependencies

npm install

4️⃣ Start MongoDB

mongod

5️⃣ Run Project

node index.js

6️⃣ Open in Browser

http://localhost:8080/chats

---

🔁 Routes

Method| Route| Description
GET| /chats| Show all chats
GET| /chats/new| Create chat form
POST| /chats| Add new chat
GET| /chats/:id/edit| Edit chat
PUT| /chats/:id| Update chat
DELETE| /chats/:id| Delete chat

---

🧠 Concepts Used

- REST APIs
- CRUD operations
- Express routing
- MongoDB + Mongoose
- EJS templating
- Middleware (Method Override)

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
