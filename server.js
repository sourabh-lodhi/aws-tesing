const express = require("express")

const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("hitting get request")
})




app.listen(8000, ()=>{
    console.log("server is running at 8080")
})