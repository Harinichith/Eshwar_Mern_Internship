const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModel=mongoose.model("mycoll",UserSchema)  //name of the model-users(collection)
module.exports=UserModel