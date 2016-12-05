/*global angular window*/

(function (angular) {
  'use strict';

  var app = angular.module('720kb', [
    'ngRoute',
    '720kb.datepicker'
  ])
  .controller('TestController', ['$scope', '$interval', function TestController($scope, $interval) {
    var that = this;

    that.visibility = true;

    function getMonthAgo() {
      var d = new Date();
      return new Date(d.setMonth(d.getMonth() - 1))
    }

    function getNow() {
      return new Date();
    }

    $scope.defaultRange = {
      start: getMonthAgo(1).toString(),
      end: getNow().toString()
    }


    $scope.range = {
      start: null,
      end: null
    }

    $interval(function setInterval() {
      //toggle manually everytime
      that.visibility = !that.visibility;
      window.console.info('Toggling datepicker with interval of 3.5 seconds');
    }, 3500);
  }]);
}(angular));
