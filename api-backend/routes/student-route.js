const express = require('express');
const router = express.Router();
const studentController = require('./../controllers/studentController');
const { getAllStudents,
        createAdvanceStudent,
        // checkStudentID
        checkMiddleWareData
      } = require('./../controllers/studentController');

// router.param('id', checkStudentID);


router
    .route('/')
    .get(getAllStudents)
    .post(createAdvanceStudent)
    .post(checkMiddleWareData);
router
    .route('/:id')
    .get(studentController.getStudentByIdEx2)
    .put(studentController.updateStudent2)
    .patch(studentController.updateStudent2)
    .delete(studentController.deleteStudent);

module.exports = router;
