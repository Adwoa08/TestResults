var app = angular.module("studentResults");

app.controller("logoutCtrl", ["userService", function (userService) {  
    userService.logout();
}]);