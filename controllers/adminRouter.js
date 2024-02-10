const express = require("express")
const studentModel = require("../models/studentModel")



const router = express.Router()

router.post("/add-stud",(req,res)=>{
    let data = req.body
    let studentModelObj = new studentModel(data)
    let result = studentModelObj.save()
    res.json({
        "status":"success"
    })
})

module.exports=router