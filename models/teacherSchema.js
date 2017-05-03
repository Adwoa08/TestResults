var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var teacherSchema = new Schema({
    //user account
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
        require: true
    },

    password: {
        type: String,
        required: true
    },


    //profile info
    dateOfBirth: Date,
    gender: String,
    address: {
        street: String,
        city: String,
        state: String,
        zipcode: String
    },
    phoneNumber: String,

    subject: {
        type: Schema.Types.ObjectId,
        ref: "Subjects"
    },

    students: [{
        type: Schema.Types.ObjectId,
        ref: "Subjects"
    }]
});



teacherSchema.pre("save", function (next) {
    var teacher = this;

    if (!teacher.isModified("password")) return next();

    bcrypt.hash(teacher.password, 10, function (err, hash) {
        if (err) return next(err);
        teacher.password = hash;
        next();
    });
});

teacherSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};


teacherSchema.methods.withoutPassword = function () {
    var teacher = this.toObject();
    delete teacher.password;
    return teacher;
};

var Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
