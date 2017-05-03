var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var classSchema = new Schema({

    className: String,
    
    teacher: {
        type: Schema.Types.ObjectId,
        ref: "Teacher"
    },


    students: [{
        type: Schema.Types.ObjectId,
        ref: "Student"
    }]
});


var Class = mongoose.model("Class", classSchema);
module.exports = Class;
