angular.module('ngSJM.directives', [])
    .directive('startDialog', function() {

        return {
            restrict: 'E',
            templateUrl: 'tempelate/start_dialog.html',
            replace: true,
            scope: true,
            link: function($scope, $element, $attr) {}
        }
    })
    .directive('endDialog', function() {

        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'tempelate/end_dialog.html',
            scope: {
                result: '='
            },
            link: function($scope, $element, $attr) {

                $scope.$watch('result', function(newValue, oldValue) {
                    if (newValue) {
                        $scope.style = {
                            "background-image": 'url(images/mao2.png),url(images/' + newValue.state + '.png)'
                        }
                    }

                });

                $scope.getTitle = function() {
                    return '笑而不语'
                };
            }
        }

    });