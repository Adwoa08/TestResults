var app = angular.module("studentResults.Auth");

app.controller("teacherSignupCtrl", ["$scope", "$location", "userService", function ($scope, $location, userService) {
    $scope.passwordMessage = "";

    $scope.signup = function (teacher) {
                    userService.teacherSignup(teacher).then(function (response) {
                $location.path("/login");
//        if ($scope.password !== $scope.passwordRepeat) {
//            $scope.passwordMessage = "Passwords do not match.";
//        } else {
//            userService.teacherSignup(teacher).then(function (response) {
//                $location.path("/login");
//            }, function (response) {
//                alert("There was a problem: " + response.data);
//            });
//        }
        })
    };



    $scope.login = function (teacher) {
        userService.teacherLogin(teacher).then(function (response) {
            console.log(response);
        })
    }

}])
