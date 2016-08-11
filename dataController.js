angular
  .module('github', [])
  .controller('dataController', dataController);

dataController.$inject = ['$http', '$scope'];
  function dataController($http, $scope){
    vm = this;

    vm.test = true;

      vm.username = "amack459";
      $http.get("https://api.github.com/users/"+vm.username)
      .success(function(data) {
        vm.userData = data;
        console.log(data); 
      });

     
  }


