angular.module('angular-crud')
    .controller('IndexController', function ($scope, $http, Comment) {

        $scope.cadastro = {};

        $scope.enviar = function() {
            Comment.save($scope.cadastro);
        };

    });