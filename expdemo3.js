const exp=require("express")
const app=exp()
const mongoose=require("mongoose")
const User=require("./usermodel")        //imports
mongoose.connect("mongodb://127.0.0.1:27017/mybru").then(()=>{
    console.log("connection was success mongodb lib")
}).catch(()=>{
    console.log("error connection")
})
async function dis()
{
    try{
        const result=await User.findById("697c48b2849d0b48b2ea02a9")
        console.log(result)
    }
    catch(e){
        console.log(e.message)
    }
}
dis()