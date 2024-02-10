const mongoose = require("mongoose")

const studentSchema= mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        rollno:{
            type:String,
            required:true
        },
        admno:{
            type:String,
            required:true
        },
        collegename:{
            type:String,
            required:true
        },
        parentname:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            required:true
        },
        emailid:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("studentDetails",studentSchema)