const app = require('./app');

const mongoose = require('mongoose');
const Student = require('./models/model')
const dotenv = require('dotenv');


dotenv.config({path: './config.env'});




const DB_CONN =   process.env.NODE_ENV == "production" ?
                  process.env.DATABASE_PRODUCTION.replace('<PWD>', process.env.DATABASE_PASSWORD) :
                  process.env.DATABASE;

mongoose.connect(DB_CONN).then(conn =>{

  console.log("Successfully Connected to MONGODB");
});

// const studentSchema = new mongoose.Schema ({

//   name:{
//     type:String,
//     required:[true, "You must specify a name for the student"]
//   },
//   email:{
//     type:String,
//     required: [true, "Email Address is reqired"],
//     unique: true,
//   },
//   cohort:{
//     type:String,
//     default: "2"
//   },
//   phonNumber:{
//     type:String

//   },
//   grade:{
//     type:Number

//   },
//   registrationfee:{
//     type:Number,
//     required:[true, "A Student must specify a registration fee"],
//     default:  3000
//   }

// })

//  const Student = mongoose.model('Student', studentSchema);

// const newStudent = new Student({

//   name:'Anthony Barrett',
//   email: "anthonyhitman47@Hotmail.com",
//   cohort: "2",
//   phonNumber:"87612345964",
//   grade: 80,
//   registrationfee: 6400

// });

// newStudent.save(). then((doc)=>{
//   console.log(doc);
// }).catch(err =>{
//   console.log(`ERROR:   ${err}`)
// })


// 3) START SERVER
const port = 3000;
app.listen(port, ()=>{
  console.log(`Server Listening on Port ${port}...`);
})


