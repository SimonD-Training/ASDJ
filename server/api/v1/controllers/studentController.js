const Student = require("../../../lib/db/models/students");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
        status: 'Success',
        results: students.length,
        data: {
        students
        }
    });
  } catch (error) {
    res.status(500).json({
        status: "Failed to create student document.",
        message: error
    });
  }
}

exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        student: newStudent
      }
    })
  } catch (err) {
    res.status(500).json({
      status: 'Failed to create record.',
      message: err
    })
  }
}

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.find({ _id: req.params.id })
    res.status(200).json({
      status: 'Success',
      data: {
        student
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed to find any matching record.",
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

exports.updateStudent = async (req, res) => {
  try {
    const editStudent = await Student.findOneAndUpdate({_id: req.params.id}, req.body)
    res.status(200).json({
      status:"Success",
      data: {
        old: editStudent,
        new: req.body
      }
    })
  } catch (err) {
    res.status(404).json({
      status: "Failed to find any matching record.",
      message: err
    })
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.deleteOne({ _id: req.params.id })
    res.status(200).json({
      status: 'Success',
      data: {
        student: student
      }
    })
  } catch (err) {
    res.status(404).json({
      status: "Fail",
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