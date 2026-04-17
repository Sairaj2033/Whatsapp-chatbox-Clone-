const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override")


app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));



main()
.then(() => {
    console.log("connection sucessfull")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('await mongoose.connect(process.env.MONGO_URL));

 
}


//INDEX ROUTE 
app.get("/chats", async (req, res) => {
 let chats = await Chat.find();
 //console.log(chats);
 res.render("index.ejs",{chats});

});

//NEW ROUTE 
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
      
})

//CREATE ROUTE 
app.post("/chats", (req,res) => {
    let{from, to, msg} = req.body;
    let newChat =new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat
    .save()
    .then((res)=> {
        console.log("chat was saved");
    }).catch((err) => {
        console.log(err);
    });
    
    res.redirect("/chats" ) ;
});

//EDIT ROUTE 
app.get("/chats/:id/edit", async (req,res) => {
    
      let { id } = req.params;
    let chat = await Chat.findById(id);

    res.render("edit.ejs" ,{chat});
   
});

//////////////UPDATE ROUTE ////////////////
app.put("/chats/:id", async (req,res) => {
     let { id } = req.params;
     let { msg:newmsg } = req.body;
     let updatedchat = await Chat.findByIdAndUpdate(
         id,
         {msg: newmsg},
        {runValidators : true, new: true}
     );
     console.log(updatedchat);
     res.redirect("/chats");
});
 ////////////////DESTORY ROUTE //////////////////
app.delete("/chats/:id", async (req,res) => {
      let { id } = req.params;
      let deletechat= await Chat.findByIdAndDelete(id);
      console.log(deletechat);
      res.redirect("/chats");   
});


app.get("/", (req, res) => {
    res.redirect("/chats");
});




chat1.save().then((res) => {
    console.log(res);
})



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});
