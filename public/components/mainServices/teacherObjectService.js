var app = angular.module("studentResults");
app.service("teacherObjectService", function ($http) {


    this.getTeacherObject = function(){
        return $http.get("api/teacher").then(function(response){
            console.log(response.data);
        })
    }

});