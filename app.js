const express = require('express')

const app = express();

app.get("/profile",(req,res)=>{
    res.send("Welcome to profile page")
})

app.post("/adduser",(req,res)=>{
    res.send("Added user uuccessfully")
})

app.use("/",(req,res)=>{
    res.send("Welcome to Main page")
})

app.listen(8000,()=>{
    console.log("Server started running on port 8000");
})