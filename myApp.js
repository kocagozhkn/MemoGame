const express = require('express');
const myJson = require("./compinfo.json")

const app = express();
const port = 3000

app.get("/data",(request,response)=>{
    //response.send("Hello World"); 
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send(myJson)
})

app.listen(port,()=>{
    console.log(`Server running in port ${port}`)
})