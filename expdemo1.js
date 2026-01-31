const exp=require("express")
const app=exp()
const mongoose=require("mongoose")
const User=require("./usermodel")        //imports
mongoose.connect("mongodb://127.0.0.1:27017/mybru").then(()=>{
    console.log("connection was success mongodb lib")
}).catch(()=>{
    console.log("error connection")
})
var result=""
app.get("/showdata",(req,res)=>{
    var un=req.query["un"]
    var ag=req.query["age"]
    var ad=req.query["addr"]
    result=result + "<br>User Name:"+un+"<br>age:"+ag+"<br>address:"+ad
    const myinp=new User({
        sname:un,
        age:ag,
        addr:ad
    })
    myinp.save().then(()=>{
        console.log(result+"sucess")
    }).catch((err)=>{
        console.log("error:",err)
    })
    res.write(result+"<h1>successfully inserted</h1>")
    res.end()
}).listen(8901)
console.log("port listening @ 8901..........")