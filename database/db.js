//connection with mongodb with database name studentform
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentform',
{ useNewUrlParser: true, 
useUnifiedTopology:true
//useCreateIndex:true
//useFindAndModify:false

}).then(() =>
console.log("connect to database")).catch((err)=> console.log(err));

