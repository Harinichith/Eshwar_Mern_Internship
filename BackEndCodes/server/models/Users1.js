const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    empid:Number,
    empname: String,
    salary: Number,
    contact: Number,
})

const UserModel=mongoose.model("Emp1",UserSchema)  //name of the model-users(collection)
module.exports=UserModel