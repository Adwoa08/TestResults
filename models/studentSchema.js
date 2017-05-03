var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var studentSchema = new Schema({
    //student account setup
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/, 'Please fill a valid email address']
    },

    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },


    //profile information
    imageUrl: String,

    dateOfBirth: Date,

    gender: String,

    address: {
        street: String,
        city: String,
        state: String,
        zipcode: Number
    },
    phoneNumber: String
 
});


studentSchema.pre("save", function (next) {
    var student = this;

    if (!student.isModified("password")) return next();

    bcrypt.hash(student.password, 10, function (err, hash) {
        if (err) return next(err);
        student.password = hash;
        next();
    });
});

studentSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

studentSchema.methods.withoutPassword = function () {
    var student = this.toObject();
    delete student.password;
    return student;
};


var Student = mongoose.model("Student", studentSchema);

module.exports = Student;
