const express = require('express');
// const app = require('../app10');
const router = express.Router();
const studentController = require('../controller/studentController');

const { getAllStudents,
        createAdvanceStudent,
        checkStudentID
      } = require('../controller/studentController');

router.param('id', checkStudentID);

// app.use(app.checkMiddleWareData)
router
    .route('/')
    .get(getAllStudents)
    .post(createAdvanceStudent),



router
    .route('/:id')
    .get(studentController.getStudentByIdEx2)
    .patch(studentController.updateStudent)
    .put(studentController.updateStudent2)
    .delete(studentController.deleteStudent);


module.exports = router;
