const mongoose = require('mongoose');
const validator=require('validator');

// Schema for student registration
//you can make schema  accodring to your needs. 
 const studentSchema =new mongoose.Schema({
     name: {
        type: String,
        required:true,
        },
     fathername:{
        type:String,
        required:true
     },
     phonenumber:{
         type:Number,
         min:10,
         required:true,
         unqiue:true
     },
     address:{
         type:String,
         required:true
     },
    
 });
 

 const Student=new mongoose.model("Student",studentSchema);
 

 //export student model
  module.exports=Student;