💬 Mongo x Express — Mini WhatsApp

🚀 A WhatsApp-style chat application built using MongoDB, Express, Node.js, and EJS.
This project demonstrates full CRUD operations, REST APIs, and clean UI rendering.

---

🌐 Live Demo

🔗 https://whatsapp-chatbox-clone-1.onrender.com/chats

---

✨ Features

- 🟢 Create chats
- 📄 View messages
- ✏️ Edit chats
- ❌ Delete chats
- 🕒 Timestamp display
- 🎨 WhatsApp-style UI

---

🧰 Tech Stack

Category| Tools Used
Backend| Node.js, Express
Database| MongoDB (Mongoose)
Frontend| EJS, HTML, CSS
Utilities| Method-Override, Faker

---

📁 Project Structure (Clean View)

Folder/File| Purpose
📂 models| Mongoose schemas
└── chat.js| Chat data model
📂 views| EJS templates
├── index.ejs| Display all chats
├── new.ejs| Create chat form
├── edit.ejs| Edit chat UI
📂 public| Static assets
└── style.css| Styling
📄 index.js| Main server file
📄 package.json| Dependencies

---

🧩 Visual Structure

mongo-x-express-mini-whatsapp/
│
├── 📂 models
│   └── chat.js
│
├── 📂 views
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│
├── 📂 public
│   └── style.css
│
├── 📄 index.js
├── 📄 package.json
└── 📄 README.md

---

⚙️ Setup

git clone https://github.com/Sairaj2033/Whatsapp-chatbox-Clone-.git
cd mongo-x-express-mini-whatsapp
npm install
mongod
node index.js

🌍 Open:

http://localhost:8080/chats

---

🔁 Routes

Method| Endpoint| Function
GET| /chats| Show all chats
GET| /chats/new| New chat form
POST| /chats| Create chat
GET| /chats/:id/edit| Edit chat
PUT| /chats/:id| Update chat
DELETE| /chats/:id| Delete chat

---

🧠 Concepts

- REST APIs
- CRUD operations
- Mongoose models
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
