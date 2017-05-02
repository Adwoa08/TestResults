var express = require("express");
var teacherRouter = express.Router();
var student = require("../models/studentSchema");
var teacher = require("../models/teacherSchema");
var subject = require("../models/subjectSchema");




//Posting subjects to the students
teacherRouter.post("/subjects/admin", function (req, res) {
    var newSubject = new subject(req.body);
    newSubject.save(function (err, subject) {
        if (err) res.status(500).send(err);
        res.send(subject);
    })
})



//find each student by their id
teacherRouter.get("/students/:id", function (req, res) {
    var query = req.query | {};
    teacher.findById(req.params.id)
        .populate("students")
        .exec(function (err, teacher) {
            if (err) res.status(500).send(err);
            res.send(teacher);
        })
});



//Editing the teacher's info
teacherRouter.put("/teacher/:id", function(req, res){
    teacher.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, infoUpdate){
        res.send(infoUpdate);
    })
})

module.exports = teacherRouter;