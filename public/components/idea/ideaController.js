angular.module('ideaDrop').controller('IdeaController', function ($scope, $http) {

  // List ideas
  $http.get('/api/todos')
    .success(function(data) {
        $scope.ideas = data;
        console.log(data);
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });

  // Delete idea
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