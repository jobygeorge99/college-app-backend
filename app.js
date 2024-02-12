const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const adminRouter= require("./controllers/adminRouter")
const studentRouter= require("./controllers/studentRouter")

//alias
const app = express()

//middleware
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://jobydb:joby123@cluster0.czhpkmp.mongodb.net/collegeDB?retryWrites=true&w=majority")

app.use("/api/admin",adminRouter)
app.use("/api/student",studentRouter)

app.listen("3001",()=>{
    console.log("server running")
})