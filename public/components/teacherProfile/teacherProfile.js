var app = angular.module("studentResults");

app.controller("teacherProfileCtrl", ["$scope", "$uibModal", "$log", "subjectService", "teacherObjectService", function ($scope, $uibModal, $log, subjectService, teacherObjectService) {

    //The modal function
    $scope.showUpdateForm = function () {
        $scope.message = "button clicked";
        console.log($scope.message);
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
        if ($scope.subject === '') {
            $scope.message = "Please input a subject"
        } else {
            subjectService.subjectPost(subject).then(function (response) {
                $scope.subjects.push(response.data);
            })
        }
        $scope.subject = '';
    }


    
    //teacher
    teacherObjectService.getTeacherObject().then(function(response){
        
    });



}]);
