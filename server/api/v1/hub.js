const router = require("express").Router()
const stuCon = require("./controllers/studentController");

router.route("/students").get(stuCon.getAllStudents).post(stuCon.createStudent);

router.route("/students/:id").get(stuCon.getStudentById).put(stuCon.updateStudent).delete(stuCon.deleteStudent);

module.exports = router