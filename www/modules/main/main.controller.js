angular.module('starter.controllers', [])

  .controller('TimepickerDemoCtrl', function ($scope, ionicTimePicker) {

    $scope.openTimePicker1 = function () {
      var ipObj1 = {
        callback: function (val) {
          console.log('Return value from the datepicker popup is : ' + val, new Date(val));
        },
        inputTime: 50400,
        format: 12,
        setLabel: 'Set2'
      };
      ionicTimePicker.openDatePicker(ipObj1);
    };

    $scope.openTimePicker2 = function () {
      var ipObj1 = {
        callback: function (val) {
          console.log('Return value from the datepicker popup is : ' + val, new Date(val));
        },
        inputTime: ((new Date()).getHours() * 60 * 60 + (new Date()).getMinutes() * 60),
        format: 24
      };
      ionicTimePicker.openDatePicker(ipObj1);
    };


  });
