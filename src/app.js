console.log("starting the server");

const express = require("express");
const app = express();


app.use("/newuser",(req,res)=>{
    res.send("hi newuser welcome");
});

app.use((req,res)=>{
    res.send("hi kamalatha nodemon installed");
});

app.listen(3000,()=>{
    console.log("server running over port 3000");
})

