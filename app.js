const express = require("express");

const app = express();

app.use("/greet",(req,res)=>{
    res.send("Greetings for you kamal")
})


app.use("/",(req,res)=>{
    res.send("welcome to Root page");
})


app.listen(8000,()=>{
    console.log("Server started running request to get response")
})