
#  REST/RESTful API in nodejs with mongodb and express.
  
     API---application programming interface
	 REST/RESTful API -- A RESTful API  is an architectural  style for an application programming interface(API) that use http request to access and use data.
	 That data can used to GET,POST, PATCH, DELETE, which refers to reading ,updating, creating, deleting of opertation.
	 REST stand for representational state transfer
     this project a simple REST/RESTfull API of  student-registration.
     get request -- to read data (get request return the data of students that register in database)
     post  request -- to write data (post request  insert new  data of  new student  in database)
     patch/put request-- to update data (patch request to update any data of student in database eg. name,address etc)
     delete request-- to delete data(delete request delete the data of student in database)
 

## API Features
 
 
get  -get data from database throught api

post -add data to database  throught api 

put/patch -update any data from databaese throught api 

delete -delete any data from database throught  api
  
## Require Package 

```bash
	  npm install express
	  npm install mongoose
	  npm install validator

```
  # conn.js (connection to database)
       const mongoose = require('mongoose');
      mongoose.connect('mongodb://localhost:27017/studentform',
       { 
	   useNewUrlParser: true, 
      useUnifiedTopology:true
      }).then(() =>
     console.log("connect to database")).catch((err)=> console.log(err));
     
     
 #user.js (schema of database)
 
    const mongoose = require('mongoose');
    const validator=require('validator');
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
    module.exports=Student;

# get request
    app.get('/students',async(req,res)=>{ 
    try {
    const data =  await Student.find();
    res.status(201).send(data);
    } catch (e) {
    res.status(404).send(e);
    }
    });
# get request
    app.get('/students/:name',async(req,res)=>{
    try {
    const name=req.params.name;
    const data = await Student.find({name});
    if(!data){
    res.status(404).send();
    }else{
    res.status(201).send(data);
    }  
    } catch (e) {
    res.status(404).send(e);
    }
    });
#post request

    app.post('/students',async(req,res)=>{
    try {
    const studentdata = new Student(req.body); 
    const data = await studentdata.save();
    res.status(201).send(data);
    } catch (e) {
    res.status(404).send(e);
    }   
    });
#patch request

    app.patch('/students/:name',async(req,res)=>{ 
    try {
    const name = req.params.name;
    const data = await Student.find({name}).updateOne(req.body);
    res.status(202).send(data); 
    } catch (e) {
    res.status(404).send(e);
 
    }
    });
## API 
Localhost:3000/students

# RESTFUL-API
