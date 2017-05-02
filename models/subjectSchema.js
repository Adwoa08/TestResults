var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var subjectSchema = new Schema({
    
    subjectName: String,

    result: String,

    teacherComment: String
});

var subject = mongoose.model("subject", subjectSchema);
module.exports = subject;