(function(angular){
    var app = angular.module( "auto_active",[] );
    app.directive( "autoActive",["$location",function($location){
        return{
            link:function(scope,element,attributes){
                element.on("click",function(){
                    element.parent().children().removeClass("active");
                    element.addClass("active");
                });
                scope.loca = $location;
                scope.$watch("loca.url()", function(now,old){
                    var hash = element.find("a").attr("href").substr(1);
                    if(now.startsWith(hash)){
                        element.parent().children().removeClass("active");
                        element.addClass("active");
                    }
                });
            },
        };
    }] );
})(angular);