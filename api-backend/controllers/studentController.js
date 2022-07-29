const express = require('express');

const Student = require('../models/model');

exports.checkMiddleWareData = (req, res, next) => {
  // if (req.method === 'POST') {
  if (req.body.email == '' || req.body.name == '') {
    console.log('error')
    res.status(400).status({
      status: 'fail',
      message: 'invalid Field'
    })
    // }
  } next();
};

exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json({
    status: 'success',
    results: students.length,
    data: {
      students
    }
  });
}

exports.createAdvanceStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        student: newStudent
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

exports.getStudentByIdEx2 = async (req, res) => {
  try {
    const student = await Student.find({ _id: req.params.id });
    res.status(200).json({
      status: 'success',
      data: {
        student
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    })

  }
}
// exports.updateStudent = (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     data: {
//       student: '[The Updated Student Here]'
//     }
//   });
// }

exports.updateStudent2 = async (req, res) => {
  //
  try {
    const editStudent = await Student.findOneAndUpdate({_id: req.params.id}, req.body)

    res.status(200).json({
      status:"success",
      message: "Document Updated",
      data: {
        editStudent,
        new: req.body
      }
// Will readthis up later
    })
  } catch (err) {
    res.status(204).json({
      status: "fail",
      message: 'Invalid ID',
      message: err
    })
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.deleteOne({ _id: req.params.id })
    res.status(200).json({
      status: 'success',
      message: "Document Deleted",
      data: {
        student: '[]'
        // student: '[]'
      }
    })
  } catch (err) {
    res.status(204).json({
      status: "fail",
      message: 'Invalid ID',
      message: err
    })
  }
};

//Can also be 204 if you are not returning anything in the response
// catch (err) {
//   return res.status(404).json({
//     status: 'fail',
//     message: 'Invalid ID',
//     message: err

//   });
// }


// try {
//   const student = await Student.delete() {
//     res.status(200).json({
//       status: 'success',
//       data:{
//         student: '[]'
//       }
//     });
//   }
// };
