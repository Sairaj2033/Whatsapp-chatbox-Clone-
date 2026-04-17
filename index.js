const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

// Set views folder
app.set("views", path.join(__dirname, "views"));

// Set EJS as view engine
app.set("view engine", "ejs");

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Support PUT and DELETE from forms
app.use(methodOverride("_method"));

// Connect to MongoDB
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    process.env.MONGO_URL || "mongodb://127.0.0.1:27017/whatsapp"
  );
}

// Root route → redirect to chats page
app.get("/", (req, res) => {
  res.redirect("/chats");
});

// INDEX ROUTE → show all chats
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    res.render("index", { chats });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error loading chats");
  }
});

// NEW ROUTE → form for new chat
app.get("/chats/new", (req, res) => {
  res.render("new");
});

// CREATE ROUTE → save new chat
app.post("/chats", async (req, res) => {
  try {
    let { from, to, msg } = req.body;

    let newChat = new Chat({
      from,
      to,
      msg,
      created_at: new Date(),
    });

    await newChat.save();
    console.log("chat was saved");

    res.redirect("/chats");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating chat");
  }
});

// EDIT ROUTE → open edit page for one chat
app.get("/chats/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit", { chat });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error loading edit page");
  }
});

// UPDATE ROUTE → update message of one chat
app.put("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { msg: newmsg } = req.body;

    let updatedchat = await Chat.findByIdAndUpdate(
      id,
      { msg: newmsg },
      { runValidators: true, new: true }
    );

    console.log(updatedchat);
    res.redirect("/chats");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating chat");
  }
});

// DELETE ROUTE → delete one chat
app.delete("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletechat = await Chat.findByIdAndDelete(id);
    console.log(deletechat);
    res.redirect("/chats");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting chat");
  }
});

// Dynamic port for Render / local
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
