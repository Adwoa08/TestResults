var express = require("express");
var studentRouter = express.Router();
var student = require("../models/studentSchema");
var teacher = require("../models/teacherSchema");
var subject = require("../models/subjectSchema");

//post has already been made on studentSchema

studentRouter.get("/subjects", function (req, res) {
    var query = req.query | {};
    subject.find(query, function (err, subjects) {
        if (err) res.status(500).send(err);
        res.send(subjects);
    })
})




studentRouter.get("/teacher", function (req, res) {
    var query = req.query | {};
    teacher.find(query, function (err, teacher) {
        if (err) res.status(500).send(err);
        res.send(teacher);
    })
});



studentRouter.put("/student/:studentId", function (req, res) {
    student.findOneAndUpdate(req.params.studentId, req.body, {new: true}, function(err, studentInfo){
        if (err) res.status(500).send(err);
        res.send(studentInfo);
    })
})



module.exports = studentRouter;
