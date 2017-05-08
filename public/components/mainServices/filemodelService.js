var app = angular.module("studentResults");
app.service("fileModelService", function ($http) {

    this.post = function(uploadUrl, data){
        var fileUpload = new formData();
    for (var key in data)
        fileUpload.append(key, data[key]);
        $http.post(uploadUrl, fileUpload, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
    }
    
    

});