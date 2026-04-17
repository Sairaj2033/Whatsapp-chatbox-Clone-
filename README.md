💬 Mongo x Express — Mini WhatsApp

🚀 A WhatsApp-style chat application built using MongoDB, Express, Node.js, and EJS.
This project showcases full-stack CRUD operations, REST APIs, and clean UI rendering with server-side templating.

---

🌐 Live Demo

🔗 Try it here:
https://whatsapp-chatbox-clone-1.onrender.com/chats

---

✨ Key Features

✔ Create new chats
✔ View all messages
✔ Edit existing chats
✔ Delete chats
✔ Timestamp (date & time) display
✔ Clean WhatsApp-inspired UI

---

🧰 Tech Stack

Layer| Technology Used
Backend| Node.js, Express.js
Database| MongoDB (Mongoose ODM)
Frontend| EJS, HTML, CSS
Utilities| Method-Override, Faker

---

📁 Project Structure

mongo-x-express-mini-whatsapp/
│
├── models/          # Mongoose schemas
│   └── chat.js
│
├── views/           # EJS templates
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│
├── public/          # Static files (CSS)
│   └── style.css
│
├── index.js         # Main server file
├── package.json
└── README.md

---

⚙️ Installation & Setup

# Clone repository
git clone https://github.com/Sairaj2033/Whatsapp-chatbox-Clone-.git

# Navigate into project
cd mongo-x-express-mini-whatsapp

# Install dependencies
npm install

# Start MongoDB locally
mongod

# Run server
node index.js

🌍 Open in browser:

http://localhost:8080/chats

---

🔁 API Routes

Method| Route| Purpose
GET| /chats| Fetch all chats
GET| /chats/new| New chat form
POST| /chats| Create chat
GET| /chats/:id/edit| Edit chat
PUT| /chats/:id| Update chat
DELETE| /chats/:id| Delete chat

---

🧠 Concepts Demonstrated

- RESTful Routing
- MongoDB CRUD Operations
- Mongoose Models & Schema Design
- Server-side Rendering (EJS)
- Form Handling & Middleware
- Method Override (PUT & DELETE support)

---

🚧 Future Enhancements

- 🔐 Authentication & Authorization
- 💬 Real-time messaging (Socket.io)
- 📱 Responsive & modern UI
- ☁️ Advanced deployment (Docker, CI/CD)

---

👨‍💻 Author

Sairaj Patil
🎓 B.E AI & Data Science
💻 MERN Stack Developer

---

⭐ Support

If you found this useful, consider giving a ⭐ on GitHub — it really helps!
