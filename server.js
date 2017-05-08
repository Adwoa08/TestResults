var express = require("express");
var app = express();
var port = process.env.PORT || 8000;
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");
var mongoose = require("mongoose");
var path = require("path");
var teacherRoutes = require("./routes/teacherRoutes");
var studentRoutes = require("./routes/studentRoutes");
var classRoutes = require("./routes/classRoutes")
var userAuthRoutes = require("./routes/userAuthRoutes");
var expressJwt = require("express-jwt");
var multer = require("multer");

//--------checking my code for error details-----
app.use(morgan("dev"));

//--------parses object-------------
app.use(bodyParser.json());



//--------connecting my front End-------
app.use(express.static(path.join(__dirname, "public")));

//app.use(multer({dest: "./uploads"}));




//----creating user endpoint----
app.use("/auth", userAuthRoutes);



app.use("/api", expressJwt({secret: config.secret}));

//---posting subjects and results endpoint--
app.use("/api/classes", classRoutes);
app.use("/api/students", studentRoutes);

//--------connecting mongodb-------------------
mongoose.connect(config.database, function(){
    console.log("I am connected to the database");
});



app.listen(port, function(){
    console.log("Server is listening on port " + port);
});
