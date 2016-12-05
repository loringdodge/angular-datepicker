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

    // $scope.selectConditionStart = function(newDate) {
    //   var startDate = new Date($scope.range.start);
    //   var endDate = new Date($scope.range.end);
    //   return startDate > endDate;
    // }

    // $scope.selectConditionEnd = function(newDate) {
    //   var startDate = new Date($scope.range.start);
    //   var endDate = new Date($scope.range.end);
    //   return startDate > endDate;
    // }

    var oldDate = {};

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

    console.log($scope.defaultRange)

    $scope.range = {
      start: null,
      end: null
    }

    // $scope.$watch('range.end', function (value) {
    //   if($scope.range.end === oldDate.end) return;

    //   var startDate = new Date($scope.range.start);
    //   var endDate = new Date($scope.range.end);

    //   if (startDate > endDate) {
    //     $scope.range.end = oldDate.end;
    //     $scope.hasError = true;
    //   } else {
    //     $scope.hasError = false;
    //   }
    // });

    // $scope.$watch('range.start', function (value) {
    //   if($scope.range.start === oldDate.start) return;

    //   var startDate = new Date($scope.range.start);
    //   var endDate = new Date($scope.range.end);

    //   if (startDate > endDate) {
    //     $scope.range.start = oldDate.start;
    //     $scope.hasError = true;
    //   } else {
    //     $scope.hasError = false;
    //   }
    // });

    // $scope.$watch('$scope.range.start', function() {
    //   oldDate = angular.copy($scope.range);
    // });

    // $scope.$watch('$scope.range.end', function() {
    //   oldDate = angular.copy($scope.range);
    // });

    // $scope.$watch('range.start', function() {
    //   console.log('start', $scope.range.start);
    // });

    // $scope.$watch('range.end', function() {
    //   console.log('end', $scope.range.end);
    // });

    $interval(function setInterval() {
      //toggle manually everytime
      that.visibility = !that.visibility;
      window.console.info('Toggling datepicker with interval of 3.5 seconds');
    }, 3500);
  }]);
}(angular));
