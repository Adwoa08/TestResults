var app = angular.module("studentResults");

app.controller("teacherProfileCtrl", ["$scope", "$uibModal", "$log", "subjectService", "teacherObjectService", function ($scope, $uibModal, $log, subjectService, teacherObjectService) {




        //The modal function
        $scope.showUpdateForm = function () {
            $scope.modalMessage = "button clicked";
            console.log($scope.modalMessage);
            var modalInstance = $uibModal.open({

                templateUrl: "profileUpdateModal.html",

                controller: "modalInstanceController",
                scope: $scope,
                resolve: {
                    profileUpdate: function () {
                        return $scope.profileUpdate;
                    }
                }
            })
            modalInstance.result.then(function (profileUpdate) {
                $scope.selected = profileUpdate;

            }, function () {
                $log.info("modal dismissed");
            })
        }






    //Subject functions
    $scope.subjects = [];

    subjectService.getSubjects().then(function (response) {
        $scope.subjects = response.data;
    })


    $scope.subjectPost = function (subject) {
        if (subject === undefined || Object.keys(subject).length === 0) {
            $scope.subjectInputMessage = "Please input a subject"
        } else {
            subjectService.subjectPost(subject).then(function (response) {
                $scope.subjects.push(response.data);
                $scope.subjectInputMessage = ""
            })
        }
        $scope.subject = {};
    }



    //teacher
    teacherObjectService.getTeacherObject().then(function (response) {
        $scope.teacherFirstName = response.data.firstName;
    });



}]);
