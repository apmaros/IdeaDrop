angular.module('ideaDrop').controller('IdeaController', function ($scope, $http) {

  $scope.deleteIdea = function(id) {
      $http.delete('/api/todos/' + id)
          .success(function(data) {
              $scope.ideas = data;
              console.log(data);
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });
  };
});