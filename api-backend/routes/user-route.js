const express = require('express');
const router = express.Router();
const studentController = require('./../controllers/studentController');
const { getAllStudents,
        createAdvanceStudent,
        checkStudentID
      } = require('./../controllers/studentController');

// router.param('id', checkStudentID);


router
    .route('/')
    .get(getAllStudents)
    .post(createAdvanceStudent);
router
    .route('/:id')
    .get(studentController.getStudentByIdEx2)
    // .patch(studentController.updateStudent)
    .put(studentController.updateStudent2)
    .delete(studentController.deleteStudent);

module.exports = router;
