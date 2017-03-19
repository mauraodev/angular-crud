angular.module('commentService', [])
    .factory('Comment', function($http) {
        return {
            save: function(commentData) {
                return $http({
                    method: 'POST',
                    url: '/api',
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                    data: {nome: 'Teste'}
                });
            }
        }

    });