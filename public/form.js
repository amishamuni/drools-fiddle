var helloAjaxApp = angular.module("helloAjaxApp", []);

helloAjaxApp.controller("myController", ['$scope', '$http', function($scope, $http) {


	$scope.submitDrl = function(){

		var dataObj = {
		        data : $scope.message.data,
		};

		var res = $http.post('http://127.0.0.1:8080/drools-fiddle/rest/message/drlCompile', dataObj);
//		var res = $http.post('http://127.0.0.1:8080/drools-fiddle/rest/message/drlParser', dataObj);
//		var res = $http.post('http://127.0.0.1:8080/drools-fiddle/rest/message/droolsverifier', dataObj);

		res.success(function(data, status, headers, config) {
            console.log(data);
            $scope.message = data;
            //$scope.message.packages = JSON.stringify($scope.message.packages, null, 2);

		});
		res.error(function(data, status, headers, config) {
            console.log(data);
		});
    };

	$scope.pushAttribute = function(){

        var name = "defaultpkg.Address";
		var dataObj = {
		        data : $scope.attribute,
		};

		var options = {
          headers: { 'Content-Type': ['text/plain'] }
        };

		var res = $http.post('http://127.0.0.1:8080/drools-fiddle/rest/facts/insert/' + name, dataObj, options);

		res.success(function(data, status, headers, config) {
            $scope.message.log = data.log
            console.log(data);

		});
		res.error(function(data, status, headers, config) {
            $scope.message.log = data.log
            console.log(data);
		});

	};
}]);