const express=require('express');
const app= express();
const  port=3000;


app.use(express.json());
require('../database/db');
const Student=require('../schema/student');  



app.get('/',(req,res)=>{
res.send("this is home page of restapi");
});



//  post request for add insert data to database
app.post('/students',async(req,res)=>{
    try {
        const studentdata = new Student(req.body); 
        const data = await studentdata.save();
        res.status(201).send(data);
    } catch (e) {
        res.status(404).send(e);
    }   
 });



//get request for get data of all students
app.get('/students',async(req,res)=>{
    try {
         const data =  await Student.find();
            res.status(201).send(data);
    } catch (e) {
        res.status(404).send(e);
    }
});


//get particular student by student name
app.get('/students/:name',async(req,res)=>{
    try {
        const name=req.params.name;
     const data = await Student.find({name});
     //console.log(data);
  if(!data){
      res.status(404).send();
  }else{
  res.status(201).send(data);
  }  
} catch (e) {
        res.status(404).send(e);
    }
});


// here update the student data
app.patch('/students/:name',async(req,res)=>{
try {
    const name = req.params.name;
    const data = await Student.find({name}).updateOne(req.body);
      res.status(202).send(data);
} catch (e) {
  res.status(404).send(e);
 // console.log(e);
}
});
app.listen(port,()=>{
console.log(`connection is successfull and port number${port}`);
});