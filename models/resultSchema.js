var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var resultSchema = new Schema({

    class: {
        type: Schema.Types.ObjectId,
        ref: "Result"
    },


    student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    },
    
    grade: String,

    comment: String
});


var Result = mongoose.model("Result", resultSchema);
module.exports = Result;
