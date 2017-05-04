var app = angular.module("studentResults");
app.controller("profileCtrl", ["$scope", "classService", function ($scope, classService) {
    $scope.addedClass = [];
    
    classService.getStudentsClasses().then(function(response) {
        $scope.addedClass = response.data;
    });
    
    
    
    //getting classes available to studens
    $scope.availableClasses = [];

    classService.getClasses().then(function (response) {
        $scope.availableClasses = response.data;
    });



    
    
    //Adding classes
    $scope.addClass = function (selectedClass) {
        classService.classSignup(selectedClass).then(function(response){
            console.log(response);
            $scope.addedClass.push(response.data);
        });
    };

}])
