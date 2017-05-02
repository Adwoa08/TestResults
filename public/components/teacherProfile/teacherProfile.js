var app = angular.module("studentResults");

app.controller("teacherProfileCtrl", ["$scope", "$uibModal","$log", "subjectService", function ($scope, $uibModal,$log, subjectService) {
    $scope.showUpdateForm = function () {
        $scope.message = "button clicked";
        console.log($scope.message);
        var modalInstance = $uibModal.open({
            
            templateUrl:"profileUpdateModal.html",
            
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


    
    
    



    $scope.subjects = [];


    $scope.subjectPost = function (subject) {
        subjectService.subjectPost(subject).then(function (response) {
            $scope.subjects.push(response.data);
        })
        $scope.subject = '';
    }





}]);
