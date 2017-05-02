var app = angular.module("studentResults.Auth");

app.controller("teacherLoginCtrl", ["$scope", "$location", "userService", function ($scope, $location, userService) {


    $scope.login = function (teacher) {
      userService.teacherLogin(teacher).then(function (response) {
            $location.path("/teacherProfile");
        }, function (response) {
            alert(response.data.message);
            $location.path("/teacherLogin");
        });
    }



}]);
