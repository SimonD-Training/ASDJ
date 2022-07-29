const db = require("../db");

const Student = new db.Schema(
    {
        name: {
           type: String,
           required: true,
        },
        email: {
           type: String,
           required: true,
        },
        cohort: {
           type: String,
           required: true,
        },
        phoneNumber: {
           type: Number,
           required: true,
        },
     },
     { collection: "students" }
);

module.exports = db.model("students", Student);