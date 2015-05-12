// public/core.js
var ideaDrop = angular.module('ideaDrop', []);

function mainController($scope, $http) {
  $scope.formData = {};

  // when submitting the add form, send the text to the node API
  $scope.createIdea = function() {
      $http.post('/api/todos', $scope.formData)
          .success(function(data) {
              $scope.formData = {}; // clear the form so our user is ready to enter another
              $scope.ideas = data;
              console.log(data);
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });
  };
}