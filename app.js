/**
 * Created by dev on 11/16/15.
 */
var app = angular.module('app', []);

app.controller('MainCtrl', function ($scope) {
    $scope.testing = "this test was successful ^_^";
});


///home/dev/directive/template.html
app.directive('tbUser', function () {
    return {
        templateUrl: "templates/userTemp.html",
        restrict: "E", //"A" = attribute, "E" = element, "C" = class, "M" = comments you can use more then one at the same time...
        scope: {
            user: '='
        },
        controller: function ($scope) {
            console.log($scope.user);
            $scope.dirTest = 'from the directive';
        }
    }
});