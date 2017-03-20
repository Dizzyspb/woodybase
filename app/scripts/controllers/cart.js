'use strict';

/**
 * @ngdoc function
 * @name kolobashkinApp.controller:MainCtrl
 * @description
 * # CartCtrl
 * Controller of the kolobashkinApp
 */
angular.module('kolobashkinApp')
    .controller("CartCtrl", ['$scope', 'getItems', function ($scope, getItems) {

        getItems.getUrl('/globals.json').success(function (response) {
           $scope.globals = response;
            console.log($scope.globals);
             

        });

        $scope.emailmsg = '<html> <head ><meta http - equiv = "Content-Type"content = "text/html; charset=utf-8" / ><title > Тема страницы < /title> </head><body><p > А здесь ваше сообщение < /p> <body> </html>';


  }]);
