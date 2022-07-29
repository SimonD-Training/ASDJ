const app = require('../app10');





const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});




const DB_CONN =   process.env.NODE_ENV == "production" ?
                  process.env.DATABASE_PRODUCTION.replace('<PWD>', process.env.DATABASE_PASSWORD) :
                  process.env.DATABASE;

mongoose.connect(DB_CONN).then(conn =>{

  console.log("Successfully Connected to MONGODB");
});

const studentSchema = new mongoose.Schema ({

  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  cohort:{
    type:String,
    default: "2"
  },
  phonNumber:{
    type:String

  },
  grade:{
    type:Number

  },
  registrationfee:{
    type:Number,
    default:  2000
  }

})


// 3) START SERVER
const port = 3000;
app.listen(port, ()=>{
  console.log(`Server Listening on Port ${port}...`);
})
