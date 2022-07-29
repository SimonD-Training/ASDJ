const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema ({
  name:{
    type: String,
    required: [true, "You must specify a name for the student"]
  },
  email:{
    type: String,
    required: [true, "Email Address is reqired"],
    unique: true,
  },
  cohort: String,
  phonNumber: String,
  grade: Number,
  registrationfee:{
    type: Number,
    required: [true, "A Student must specify a registration fee"],
    default:  3000
  }

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
