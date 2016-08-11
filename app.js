angular.module('github', [])
.controller('dataController', ['$scope','$http', function($scope,$http) {

$scope.username = "amack459";
$http.get("https://api.github.com/users/"+$scope.username)
        .success(function(data) {
            $scope.userData = data;
        });
}]);