var app = angular.module("studentResults");
app.service("teacherObjectService", function ($http) {


    this.getTeacherObject = function(){
        return $http.get("api/classes").then(function(response){
            console.log(response);
            return response;
        })
    }

});