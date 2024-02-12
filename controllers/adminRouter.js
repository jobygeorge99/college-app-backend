const express = require("express")
const studentModel = require("../models/studentModel")
const marksModel = require("../models/marksModel")
const bcrypt = require("bcryptjs")



const router = express.Router()

router.post("/add-stud",async(req,res)=>{

    hashedPasswordGenerator= async(pass)=>{
        let salt = await bcrypt.genSalt(10)
        return bcrypt.hash(pass,salt)
    }

    let {data} = { "data":req.body}
    let password = data.password

    hashedPasswordGenerator(password).then((hashedPassword)=>{
        console.log(hashedPassword)
        data.password=hashedPassword
        
        let studentModelObj = new studentModel(data)
        let result = studentModelObj.save()
        res.json({
            "status":"success"
        })
    })

    
})

router.post("/viewall-stud",async(req,res)=>{
    let result = await studentModel.find()
    console.log(result)
    res.json(result)
})

router.get("/view-stud-with-marks",async(req,res)=>{
    let result = await marksModel.find()    
    .populate("userid","name rollno admno -_id")
    .exec()
    res.json(result)
})


module.exports=router