var app = angular.module("studentResults");
app.service("classService", function ($http) {

    //getting all the classes that are available for the semester
    this.getClasses = function () {
        return $http.get("api/classes");
    }

    this.getStudentsClasses = function() {
        return $http.get("/api/students/me/classes");
    }
    
    //Teacher posting his/her class for the semester
    this.classPost = function(classes) {
        return $http.post("api/classes", classes)
    }

    //Student adding a class
    this.classSignup = function(selectedClass){
        return $http.post("/api/classes/" + selectedClass._id + "/students");
    }
});
