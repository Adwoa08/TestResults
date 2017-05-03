var app = angular.module("studentResults");
app.service("subjectService", function ($http) {

    this.getSubjects = function () {
        return $http.get("api/subjects/admin").then(function (response) {
            console.log(response);
            return response;
        })
    }


    this.subjectPost = function (subject) {
        return $http.post("api/subjects/admin", subject).then(function (response) {
            return response.data;
        })
    }

});
