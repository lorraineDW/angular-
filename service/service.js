(function(angular){
    //
    var app = angular.module("service",["ngRoute"]);
    //
    app.service("myService",["$window",function($window){
        this.Jsonp = function(url,arg,fn){
            var spt = $window.document.createElement("script");
			var str = "";
			for( var key in arg ){
				str += key + "=" + arg[key] + "&";
			}
			var funName = "lor" + $window.Math.random().toString().substr(6);
			url += "?" + str + "callback=" + funName;
			$window[funName] = function(data){
				fn(data);
			}
			spt.src = url;
			$window.document.body.appendChild( spt );
        };
    }]);
})(angular);