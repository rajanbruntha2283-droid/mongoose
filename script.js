const mongoose=require("mongoose")
const User=require("./usermodel")        //imports
mongoose.connect("mongodb://127.0.0.1:27017/mybru").then(()=>{
    console.log("connection was success mongodb lib")
}).catch(()=>{
    console.log("error connection")
})
const myinp=new User({
    sname:"madhu",
    age:19
})
myinp.save().then(()=>{
    console.log("sucess")
}).catch((err)=>{
    console.log("error:",err)
})