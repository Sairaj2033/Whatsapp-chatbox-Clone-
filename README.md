# 📱 Mongo x Express (Mini WhatsApp)

A simple **WhatsApp-style chat application** built using **MongoDB, Express, Node.js, and EJS**.
This project demonstrates full CRUD operations with a clean UI and backend integration.

---

## 🚀 Features

* 🟢 Create new chats
* 📄 View all chats
* ✏️ Edit existing messages
* ❌ Delete chats
* 🕒 Display message time & date
* 🎨 Simple WhatsApp-style UI

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Frontend:** EJS, HTML, CSS
* **Other Tools:** Method-Override, Faker

---

## 📂 Project Structure

```
mongo-x-express-mini-whatsapp/
│
├── models/
│   └── chat.js
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│
├── public/
│   └── style.css
│
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository:

```
git clone https://github.com/Sairaj2033/Whatsapp-chatbox-Clone-.git
```

2️⃣ Navigate to project folder:

```
cd mongo-x-express-mini-whatsapp
```

3️⃣ Install dependencies:

```
npm install
```

4️⃣ Start MongoDB locally:

```
mongod
```

5️⃣ Run the server:

```
node index.js
```

6️⃣ Open browser:

```
http://localhost:8080/chats
```

---

## 🔁 Routes Overview

| Method | Route           | Description          |
| ------ | --------------- | -------------------- |
| GET    | /chats          | Show all chats       |
| GET    | /chats/new      | Create new chat form |
| POST   | /chats          | Add new chat         |
| GET    | /chats/:id/edit | Edit chat            |
| PUT    | /chats/:id      | Update chat          |
| DELETE | /chats/:id      | Delete chat          |

---

## 🧠 Concepts Covered

* Express Routing
* RESTful APIs
* MongoDB CRUD Operations
* Mongoose Models
* EJS Templating
* Method Override
* Form Handling

---

## 📌 Future Improvements

* 🔐 User authentication
* 💬 Real-time chat (Socket.io)
* 📱 Better UI/UX
* ☁️ Deployment

---

## 🙌 Author

**Sairaj Patil**
B.E AI & DS Student | MERN Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
