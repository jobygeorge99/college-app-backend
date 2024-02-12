const mongoose = require("mongoose")

const marksSchema = mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"studentDetails"
        },
        maths:{
            type:String,
            required:true
        },
        physics:{
            type:String,
            required:true
        },
        chemistry:{
            type:String,
            required:true
        },
        english:{
            type:String,
            required:true
        },
        biology:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("marks",marksSchema)