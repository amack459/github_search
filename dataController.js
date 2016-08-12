angular
  .module('github', [])
  .controller('dataController', dataController);

dataController.$inject = ['$http', '$scope'];
  function dataController($http, $scope){
    vm = this;

    vm.test = true;




      // vm.username = "amack459";
      // $http.get("https://api.github.com/users/")
      // .success(function(data) {
      //   vm.userData = data;
      //   console.log(data); 
      // });

   $scope.search = function (){
        $http.get("https://api.github.com/users?since=130")
        .success(function(data){
          $scope.searchData = data;
          querySearch();
          console.log(data);
        });

      function querySearch(){
        $http.get($scope.searchData)
          .success(function(data){
            $scope.avatar = data;
            console.log(data)
          });
      };
     
  }
}


