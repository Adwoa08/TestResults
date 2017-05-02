var express = require("express");
var userAuthRouter = express.Router();
var jwt = require("jsonwebtoken");
var config = require("../config");
var teacher = require("../models/teacherSchema");
var student = require("../models/studentSchema");


//Student signup and loggin
userAuthRouter.post("/studentSignup", function (req, res) {
    student.find({
        username: req.params.username
    }, function (err, existingstudent) {
        if (err) res.status(500).send(err);
        if (existingstudent.length) return res.send({
            success: false,
            message: "That username is already taken"
        });
        else {
            var newstudent = new student(req.body);
            newstudent.save(function (err, studentObject) {
                if (err) res.status(500).send(err);
                return res.send({
                    student: studentObject,
                    success: true,
                    message: "Successfully created a new account!"
                });
            })
        }
    })
});



userAuthRouter.post("/studentLogin", function (req, res) {

    student.findOne({username: req.body.username}, function (err, student) {
        if (err) res.status(500).send(err);
        if (!student) res.status(401).send({
            success: false,
            message: "Student with the provided username was not found!"
        });
        else {
            student.checkPassword(req.body.password, function (err, match) {
                if (err) throw (err);
                if (!match) {
                    res.status(401).send({
                        success: false,
                        message: "Incorrect password"
                    });
                } else if (student) {
                    var token = jwt.sign(student.toObject(), config.secret, {
                        expiresIn: "24h"
                    });
                    res.send({
                        token: token,
                        student: student.withoutPassword(),
                        success: true,
                        message: "Here's your token!"
                    })
                }
            });
        }
    })
});




//Teacher signup and login
userAuthRouter.post("/teacherSignup", function (req, res) {
    teacher.find({
        username: req.params.username
    }, function (err, existingteacher) {
        if (err) res.status(500).send(err);
        if (existingteacher.length) return res.send({
            success: false,
            message: "That username is already taken"
        });
        else {
            var newteacher = new teacher(req.body);
            newteacher.save(function (err, teacherObject) {
                if (err) res.status(500).send(err);
                res.send({
                    teacher: teacherObject,
                    success: true,
                    message: "Successfully created a new account!"
                });
            })
        }
    })
});



userAuthRouter.post("/teacherLogin", function (req, res) {

    teacher.findOne({username: req.body.username.toLowerCase()}, function (err, teacher) {
        if (err) res.status(500).send(err);
        if (!teacher) res.status(401).send({
            success: false,
            message: "Teacher with the provided username was not found!"
        });
        else {
            teacher.checkPassword(req.body.password, function (err, match) {
                if (err) throw (err);
                if (!match) {
                    res.status(401).send({
                        success: false,
                        message: "Incorrect password"
                    });
                } else if (teacher) {
                    var token = jwt.sign(teacher.toObject(), config.secret, {
                        expiresIn: "24h"
                    });
                    res.send({
                        token: token,
                        teacher: teacher.withoutPassword(),
                        success: true,
                        message: "Here's your token!"
                    })
                }
            });
        }
    })
});

module.exports = userAuthRouter;
