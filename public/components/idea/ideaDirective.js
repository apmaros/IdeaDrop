ideaDrop.directive('cstIdea', function() {
  return {
    restrict: 'E',
    controller: 'IdeaController',
    scope: {
      ideaContent: '=info'
    },
    templateUrl: 'components/idea/show.html'
  };
});