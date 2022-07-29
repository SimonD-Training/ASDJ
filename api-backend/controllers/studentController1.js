const express = require('express');
const fs = require('fs');
const app = require('../app10');
const DATA_FILE = `${__dirname}/../data/data.json`;
const students = JSON.parse(
  fs.readFileSync(DATA_FILE)
);

exports.checkStudentID = (req, res, next, val) =>{
  if(req.params.id * 1 > students.length){
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }
  next();
}

exports.getAllStudents = (req, res) =>{
  res.status(200).json({
      status: 'success',
      results: students.length,
      data: {
        students
      }
  });
}

exports.createAdvanceStudent = (req, res) =>{
  const newId = students[students.length - 1].id + 1;
  const newStudent = Object.assign({id: newId}, req.body);
  students.push(newStudent);
  fs.writeFile(DATA_FILE, JSON.stringify(students), err =>{
      res.status(201).json({
        status: 'success',
        data: {
          student: newStudent
        }
      })
  })
}

exports.getStudentByIdEx2 = (req, res) =>{
  // console.log(req.params);
   const varID = req.params.id * 1;

  const student = students.find(item => item.id === varID) ;
  if(student !== undefined){
    res.status(200).json({
        status: 'success',
        data: {
          student
        }
    });
  }else{
    res.status(404).json({
      status: 'fail',
      message: 'Record not found. Invalid ID!'
  });
  }
}
exports.updateStudent = (req, res) =>{
   res.status(200).json({
    status: 'success',
    data:{
      student: '[The Updated Student Here]'
    }
  });
}
exports.updateStudent2 = (req, res) =>{
//
}
exports.deleteStudent =  (req, res) =>{
  // if(req.params.id * 1 > students.length){
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid ID'
  //   });
  // }
  //Can also be 204 if you are not returning anything in the response
  res.status(200).json({
    status: 'success',
    data:{
      student: '[]'
    }
  });
}


