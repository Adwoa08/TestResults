var app = angular.module("studentResults", ["ngRoute", "studentResults.Auth", "ngAnimate", "ngSanitize", "ui.bootstrap"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    
    $routeProvider
    .when("/", {
        templateUrl: "components/home/home.html",
        controller: ""
    })
        .when("/profile", {
        templateUrl: "components/profile/profile.html",
        controller: "profileCtrl"
    })
    .when("/teacherProfile", {
        templateUrl: "components/teacherProfile/teacherProfile.html",
        controller: "teacherProfileCtrl"
    })
}]);