const express = require("express")
const app = express();
app.get("/", (req, res) => {
res.send("ola")
         })
app.listen(8080, ()=> console.log("servidor rodando"))
