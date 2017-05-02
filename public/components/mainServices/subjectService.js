var app = angular.module("studentResults");
app.service("subjectService", function($http){
    
    this.subjectPost = function(subject){
        return $http.post("api/subjects/admin", subject).then(function(response){
            console.log(response);
            return response;
        })
    }
    
})