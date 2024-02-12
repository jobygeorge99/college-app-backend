const express = require("express")
const marksModel = require("../models/marksModel")

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

module.exports=router