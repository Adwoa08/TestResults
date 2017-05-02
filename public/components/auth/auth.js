var app = angular.module("studentResults.Auth", []);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "signupCtrl"
        })
        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "loginCtrl"
        })
        .when("/teacherSignup", {
            templateUrl: "components/auth/teacherSignup/teacherSignup.html",
            controller: "teacherSignupCtrl"
        })
        .when("/teacherLogin", {
            templateUrl: "components/auth/teacherLogin/teacherLogin.html",
            controller: "teacherLoginCtrl"
        })
        .when("/logout", {
            controller: "logoutCtrl",
            template: ""
        })
}]);


app.config(["$httpProvider", function ($httpProvider) {  
 $httpProvider.interceptors.push("authInterceptor");
}]);