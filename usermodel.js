const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    	sname:{
			type:String,
			required:true
		},
    	age:{
			type:Number,
			requierd:true,
			min:18,
			max:100
		},
		addr:{
			type:String,
			required:true,
			uppercase:true
		}
	})
	const usrMdl=mongoose.model("mydetail",UserSchema)
	module.exports=usrMdl