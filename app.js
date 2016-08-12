angular.module('github', [])
  .controller('dataController', ['$scope','$http', function($scope,$http) {


    // var $scope = this;
    // $scope.username = $scope.login;


    //push search into data.items
    $http.get("https://api.github.com/users?since=135" +'?client_id='+$scope.GITHUB_API_KEY+'&client_secret='+$scope.GITHUB_API_SECRET)
    .success(function (data) {
      for(var i = 0; i < data.length; i++){
        //console.log(data[i].login);  
        //console.log(data[i].avatar_url); 
        $scope.userData = data[i];
        console.log($scope.userData.avatar_url);
        //$scope.login = data[i].login;username
        //$scope.avatar = data[i].avatar_url;avatar
      } 
    });

    $scope.search = function (){
      $http.get("https://api.github.com/users/"+$scope.userData.login+'?client_id='+$scope.GITHUB_API_KEY+'&client_secret='+$scope.GITHUB_API_SECRET)
                .success(function (data) {
                  $scope.data = data;
                // $scope.userData.push($scope.username);
                    console.log(data);
                });
  };
}]);



// function search(){$http.get("https://api.github.com/users/"+$scope.username)
//   .success(function(data) {
//     $scope.userData = data;
//     console.log($scope.userData.name);
//   });
// };



                  // $http.get("https://api.github.com/search/users?q={query}{&page,per_page,sort,order}")
                  // .success(function(data){
                  //   $scope.searchData = data.items;
                  //   querySearch();
                    //array of results, which is empty. need to push users into array to access
                    // console.log($scope.searchData);
                    // console.log(data);

         // var querySearch = function(data){
         //    $http.get("https://api.github.com/users/{user}")
         //    .success(function(data){
         //      $scope.avatar = data;
         //      console.log(data)
         //    });
         //  };

