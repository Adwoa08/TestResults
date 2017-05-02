var app = angular.module("studentResults");

app.controller("modalInstanceController", ["$scope", "$uibModalInstance", function($scope, $uibModalInstance){
    
    $scope.form = {};
    $scope.submitForm = function(){
        if($scope.form.profileUpdate.$valid){
            console.log("user form is in scope");
            $uibModalInstance.close("closed");
        }else{
            console.log("User form is not in scope");
        }
    }
    
    $scope.cancel = function(){
        $uibModalInstance.dismissed("closed");
    }
}])


app.directive("updateProfileInfo", [function(){
    return {
        restrict: "E",
        templateUrl: "components/mainServices/modalServices/profileUpdateModal.html"
    }
}])