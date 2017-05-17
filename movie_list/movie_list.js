(function(angular){
    //1.创建模块
    var app = angular.module("movie_list",["ngRoute","service"]);
    //2.配置路由规则
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/:movetype/:page?",{
            templateUrl:"./movie_list/movie_list.html",
            controller:"listController"
        }).otherwise({
        redirectTo:"/home_page",
      });
    }]);
    app.controller("listController",["$scope","$route","$routeParams","myService",
    function($scope,$route,$routeParams,myService){
        $scope.loading = true;
        $scope.pageSize = 5;
        $scope.page = ($routeParams.page || "1")-0;
        $scope.start = ($scope.page-1)*$scope.pageSize;
        myService.Jsonp("https://api.douban.com/v2/movie/"+$routeParams.movetype,
                {start:$scope.start,count:$scope.pageSize,q:$routeParams.q},
                function(data){
                    console.log(data);
                    $scope.pageTotal = Math.ceil(data.total/$scope.pageSize);
                    $scope.loading = false;
                    $scope.data = data;
                    $scope.$apply();
        });
        $scope.getPage = function(mowPage){
            if(mowPage<1 || mowPage>$scope.pageTotal){
                return;
            }
            $route.updateParams({page:mowPage});
        };

    }]);
})(angular);