var app = angular.module("studentResults.Auth");

app.controller("loginCtrl", ["$scope", "$location", "userService", function($scope, $location, userService){
    
    
    $scope.login = function(user){
        
        userService.login(user).then(function(response){
            $location.path("/profile");
        }, function(response){
            alert(response.data.message)
        })  
    }
    
    
    
}])