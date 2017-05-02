var app = angular.module("studentResults.Auth");

app.service("tokenService", [function(){
    var userToken = "token";
 
    //-------setting token--------
    
    this.setToken = function(token){
        localStorage[userToken] = token;
    }
    
    //-------getting token--------
    this.getToken = function(user){
        return localStorage[userToken];
    }
    
    //-------removing token--------
    this.removeToken = function(){
        localStorage.removeItem(userToken);
    }
    
}])