const express = require("express")
const marksModel = require("../models/marksModel")
const studentModel = require("../models/studentModel")
const bcrypt = require("bcryptjs")

const router = express.Router()


router.post("/addmarks",async(req,res)=>{
    let data = req.body
    let marksModelObj = new marksModel(data)
    let result= await marksModelObj.save()
    res.json(
        {
            "status":"success"
        }
    )
})

router.post("/studentlogin",async(req,res)=>{
    let data= req.body
    let emailid = data.emailid
    let result = await studentModel.findOne({"emailid":emailid})
    if(!result){
        res.json({
            "status":"invalid username"
        })
    }
    console.log(data.password)
    console.log(result.password)

    const match= await bcrypt.compare(data.password,result.password)
    if(!match){
        res.json(
            {
                "status":"invalid password"
            }
        )
    }
    else{
        res.json(
            {
                "status":"success",
                "userData":result
            }
        )
    }


} )

module.exports=router