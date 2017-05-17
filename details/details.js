(function(angular){
    //1.创建模块
    var app = angular.module("details",["ngRoute","service"]);
    //2.配置路由规则
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/details/:id",{
            templateUrl:"./details/details.html",
            controller:"detailController"
        });
    }]);
    app.controller("detailController",["$scope","$route","$routeParams","myService",
    function($scope,$route,$routeParams,myService){
        myService.Jsonp("https://api.douban.com/v2/movie/subject/"+$routeParams.id,{},function(data){
            console.log(data);
            $scope.data = data;
            $scope.$apply();
        });

    }]);
})(angular);