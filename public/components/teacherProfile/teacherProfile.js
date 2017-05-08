var app = angular.module("studentResults");

app.controller("teacherProfileCtrl", ["$scope", "$uibModal", "$log", "classService", "teacherObjectService", "fileModelService", function ($scope, $uibModal, $log, classService, teacherObjectService, fileModelService) {




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






    //class functions
    $scope.availableClasses = [];

    classService.getClasses().then(function (response) {
        $scope.availableClasses = response.data;
    });


    
    $scope.classPost = function (classes) {
        if (classes === undefined || Object.keys(classes).length === 0) {
            $scope.classInputMessage = "Please input a class"
        } else {
            classService.classPost(classes).then(function (response) {
                $scope.availableClasses.push(response.data);
                $scope.classInputMessage = "";
            })
        }
        $scope.classes = {};
    }


    
    

    //teacher
    teacherObjectService.getTeacherObject().then(function (response) {
        $scope.teacherFirstName = response.data.firstName;
    });



    
    //upload function
    $scope.pic = {};
    $scope.upload = function(){
        var uploadUrl = "/uploads";
        fileModelService.post(uploadUrl, $scope.pic);
    }
}]);
