var app = angular.module("app", []);
app.controller("ctrl", ['$scope', function($scope){
    $scope.counter = 0;
    $scope.$watch('text', function(newValue, oldValue){
        $scope.counter++;
        console.log(newValue);
    });
}]);