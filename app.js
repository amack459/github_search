angular.module('github', [])
  .controller('dataController', ['$scope','$http', function($scope,$http) {

    //KEY and SECRET increase rate limit to maximax amount of possible calls to the API
    GITHUB_API_KEY = "7ed3cc510b1575cb829e";
    GITHUB_API_SECRET = "df75f975812b0e8a74d8976746615c21f0966acc";
     

  //push search into data.items
  $http.get("https://api.github.com/users" +'?client_id='+GITHUB_API_KEY+'&client_secret='+GITHUB_API_SECRET)
  .success(function (data) {
    for(var i = 0; i < data.length; i++){ 
            $scope.userData = data[i];
            //list of first 46 users; can be seen in console
            console.log($scope.userData);
    } 
  });

  $scope.search = function (){
   //use the previous information in order to be able to extract information for each user once the search function is called
    $http.get($scope.userData.url+'?client_id='+GITHUB_API_KEY+'&client_secret='+GITHUB_API_SECRET)
    .success(function (data) {
      $scope.user = data;
        // $scope.userData.push($scope.username);
         console.log(data);
         repos()

      });
  };

  var repos = function(){
    //user userData in order to get information about a specific user's repos
    $http.get($scope.userData.repos_url+'?client_id='+GITHUB_API_KEY+'&client_secret='+GITHUB_API_SECRET) 
    .success(function (data) {
      $scope.repos = data;
      console.log(data);
    })
  }
}]);


