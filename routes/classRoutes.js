var express = require("express");
var classRouter = express.Router();
var Student = require("../models/studentSchema");
var Teacher = require("../models/teacherSchema");
var Class = require("../models/classSchema");

//Getting all the classes in the database
classRouter.get("/", function (req, res) {
    Class.find(function (err, classes) {
        if (err) res.status(500).send(err);
        return res.send(classes);
    });
});



//teacher adding a class
classRouter.post("/", function (req, res) {
    var newClass = new Class(req.body);
    newClass.teacher = req.user;
    newClass.save(function (err, oneClass) {
        if (err) res.status(500).send(err);
        res.send(oneClass);
    });
});


//Students adding a class
classRouter.post("/:id/students", function (req, res) {
    Class.findById(req.params.id, function (err, oneClass) {
        oneClass.students.push(req.user);
        oneClass.save(function (err) {
            Class
                .populate(oneClass, {path: "students"}, function (err, students) {
                    res.send(students);
                });
        });
    });
});



classRouter.delete("/:id/students", function(req, res){
    Class.findById(req.params.id, function(err, oneClass){
        oneClass.students.splice(req.user, 1);
        res.send(oneClass);
//        Class.populate(oneClass, {path: "students"}, function(err, students){
//            res.send(students);
//        })
    })
})



classRouter.get("/:id/students", function(req, res) {
    Class.findById(req.params.id)
        .populate("students", "username")
        .exec(function(err, oneClass) {
            res.send(oneClass);
    });
});




//classRouter.get("/:id/students", function(req, res) {
//    Class.findById(req.params.id, {"students": 1, "className": 1})
//        .populate("students", "username")
//        .exec(function(err, oneClass) {
//            res.send(oneClass);
//    });
//});
//if(err) res.status(500).send(err);


module.exports = classRouter;
