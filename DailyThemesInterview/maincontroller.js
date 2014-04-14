app.controller('MainController', function($scope,$http,$element){
  $scope.url =  "http://annotateit.org/api/search";
    $http({method: 'GET', url: $scope.url}).
	success(function(data, status) {
	  $scope.status = status;
      $scope.rows = data.rows;
	  console.log("data",data);
	  console.log("rows",$scope.rows);
    }).
	error(function(data, status) {
      $scope.data = data || "Request failed";
      $scope.status = status;
    });
});
