(function(angular){
    //1.创建模块
    var app = angular.module("home",["ngRoute"]);
    //2.配置路由规则
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/home_page",{
            templateUrl:"./home/home.html",
        });
    }]);
})(angular);