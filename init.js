const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(() => {
    console.log("connection sucessfull")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

 
}


let  allchats = [
     {
        from:"neha",
        to:"om",
        msg:"send to u ",
        created_at:new Date(),
    },
     {
        from:"rishi",
        to:"karan",
        msg:"sentto u ",    
        created_at:new Date(),
    },
     {
        from:"sai",
        to:"raj",
        msg:"go to u ",
        created_at:new Date(),
    },
     {
        from:"bob",
        to:"adam",
        msg:"1 love to u ",
        created_at:new Date(),
    }
    
]


Chat.insertMany(allchats);
