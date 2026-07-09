# 💬 Mini WhatsApp Clone

> A CRUD-based WhatsApp-inspired chat application built with Express.js, MongoDB, and EJS to demonstrate RESTful routing, server-side rendering, and database integration.

<p align="center">

<a href="https://whatsapp-chatbox-clone-1.onrender.com/chats">
<img src="https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=render&logoColor=white"/>
</a>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"/>
<img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black"/>
<img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black"/>

</p>

---

# 📖 About

**Mini WhatsApp Clone** is a full-stack CRUD application inspired by WhatsApp's messaging interface. It demonstrates how to build server-rendered applications using **Node.js**, **Express.js**, **MongoDB**, and **EJS** while following RESTful architecture.

Users can create, edit, view, and delete chat messages stored in a MongoDB database.

---

# ✨ Features

- 💬 Create New Chats
- 📄 View All Messages
- ✏️ Edit Existing Chats
- ❌ Delete Chats
- 🕒 Automatic Timestamp Display
- 📱 Responsive WhatsApp-inspired UI
- ⚡ RESTful CRUD Operations
- 🗄 MongoDB Database Integration

---

# ⚙️ How It Works

```text
User Request
      │
      ▼
Express Routes
      │
      ▼
Controller
      │
      ▼
MongoDB Database
      │
      ▼
Mongoose Models
      │
      ▼
Render EJS Templates
      │
      ▼
Response to Browser
```

---

# 🛠 Tech Stack

<p align="center">

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,html,css,js,git,github,vscode,npm"/>

</p>

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Frontend

- EJS
- HTML5
- CSS3

### Utilities

- Method Override
- Faker.js

### Deployment

- Render

---

# 📂 Project Structure

```text
📦 Whatsapp-chatbox-Clone
├── 📁 models
│   └── chat.js
│
├── 📁 views
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── 📁 public
│   └── style.css
│
├── 📄 index.js
├── 📄 init.js
├── 📄 package.json
└── 📄 README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Sairaj2033/Whatsapp-chatbox-Clone-.git
cd Whatsapp-chatbox-Clone-
```

## Install Dependencies

```bash
npm install
```

## Start MongoDB

```bash
mongod
```

## Run the Application

```bash
node index.js
```

Visit:

```
http://localhost:8080/chats
```

---

# 📌 REST API Routes

| Method | Route | Description |
|:------:|-------|-------------|
| GET | `/chats` | Display all chats |
| GET | `/chats/new` | New chat form |
| POST | `/chats` | Create chat |
| GET | `/chats/:id/edit` | Edit chat |
| PUT | `/chats/:id` | Update chat |
| DELETE | `/chats/:id` | Delete chat |

---

# 📚 Concepts Covered

- RESTful Routing
- CRUD Operations
- Express.js
- MongoDB
- Mongoose ODM
- Server-side Rendering (EJS)
- Middleware
- Method Override
- MVC Pattern

---

# 🔮 Future Improvements

- 🔐 User Authentication
- 💬 Real-time Messaging using Socket.io
- 😊 Emoji Support
- 📎 File & Image Sharing
- 🌙 Dark Mode
- 📱 Mobile Responsive Enhancements

---

# 📸 Preview

> Add screenshots or GIFs of your application here.

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to improve this project:

- Fork the repository
- Create a feature branch
- Submit a Pull Request
- Open an Issue

---

# 👨‍💻 Author

**Sairaj Patil**

- 📧 sairajpatil035@gmail.com
- 🌐 https://github.com/Sairaj2033

---

# ⭐ Support

If you found this project useful, consider giving it a **⭐** to support its development.
