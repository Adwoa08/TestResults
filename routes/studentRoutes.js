var express = require("express");
var studentRouter = express.Router();
var student = require("../models/studentSchema");
var Teacher = require("../models/teacherSchema");
var Class = require("../models/classSchema");

studentRouter.get("/me/classes", function(req, res) {
    Class.find({students: req.user._id}, function(err, classes) {
        res.send(classes);
    });
});






//student.subjects.push(subject._id);
//                    student.save(function(err) {
//                        if (err) return res.status(500).send(err);
//                        Student.populate(student, {path: "subjects"}, function(err, student) {
//                            res.send(student);    
//                        });
//                    });

module.exports = studentRouter;
