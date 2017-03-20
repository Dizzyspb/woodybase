'use strict';

/**
 * @ngdoc function
 * @name kolobashkinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kolobashkinApp
 */
angular.module('kolobashkinApp')
  .controller("MainCtrl", ['$scope', 'getItems', function($scope, getItems) {

    //Делаем запрос к серверу через фабрику
    getItems.getUrl('/items.json').success(function(response) {
      $scope.items = response;

    });
    getItems.getUrl('/globals.json').success(function(response) {
      $scope.globals = response;

    });

    $scope.mainFilter = '';
    $scope.mainSale = '';
    $scope.mainSort = 'sortCount';
      
    $scope.sliderImages = [
        {
            'src':'images/sliders/slide_1@2x.jpg',
            'href':'S230/beech'
        },
        {
            'src':'images/sliders/slide_2@2x.jpg',
            'href':'P130/beech'
        },
        {
            'src':'images/sliders/slide_3@2x.jpg',
            'href':'P460/oak'
        },
        {
            'src':'images/sliders/slide_4@2x.jpg',
            'href':'S210/beech'
        },
        {
            'src':'images/sliders/slide_5@2x.jpg',
            'href':'S212/beech'
        },
        {
            'src':'images/sliders/slide_6@2x.jpg',
            'href':'R560/beech'
        }         
    ];
  }]);
