var app = angular.module("studentResults.Auth");

app.service("userService", ["$http", "$location", "tokenService", function ($http, $location, tokenService) {
    var self = this;

//    this.currentUser = {};



    //-------signup function-------- 
    this.signup = function (user) {
        return $http.post("auth/studentSignup", user);
    }




    this.teacherSignup = function (teacher) {
        return $http.post("auth/teacherSignup", teacher);
    }
    //    
    //     this.getSubjects = function(user, query){
    //        var url = "api/subjects";
    //        if (query) url += `?subjectName=${query}`;
    //        return $http.get(url)
    //    }


    //-------login function-------- 

    this.login = function (user) {
        return $http.post("auth/studentLogin", user).then(function (response) {
//            self.currentUser = response.data.firstName;
            tokenService.setToken(response.data.token);
            return response;
        })
    }

    this.teacherLogin = function (teacher) {
        return $http.post("auth/teacherLogin", teacher).then(function (response) {
            self.currentUser = response.data.firstName;
            tokenService.setToken(response.data.token);
            return response;
        })
    }



    //-------logout function-------- 
    this.logout = function () {
        tokenService.removeToken();
        $location.path("/");
    }
    
       this.teacherLogout = function () {
        tokenService.removeToken();
        $location.path("/");
    }
    
    


    this.isAuthenticated = function () {
        return !!tokenService.getToken();
    }


}])
