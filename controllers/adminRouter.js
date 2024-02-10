const express = require("express")
const studentModel = require("../models/studentModel")
const marksModel = require("../models/marksModel")



const router = express.Router()

router.post("/add-stud",async(req,res)=>{
    let data = req.body
    let studentModelObj = new studentModel(data)
    let result = await studentModelObj.save()
    res.json({
        "status":"success"
    })
})

router.post("/viewall-stud",async(req,res)=>{
    let result = await studentModel.find()
    console.log(result)
    res.json(result)
})

router.post("/view-stud-with-marks",async(req,res)=>{
    let result = await studentModel.find()
    .populate()
    .exec()
    res.json(result)
})

module.exports=router