angular.module('starter.controllers', [])

  .controller('TimepickerDemoCtrl', function ($scope, ionicTimePicker) {

    $scope.openTimePicker1 = function () {
      var ipObj1 = {
        callback: function (val) {
          if (typeof (val) === 'undefined') {
            console.log('Time not selected');
          } else {
            var selectedTime = new Date(val * 1000);
            console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
          }
        },
        inputTime: 50400,
        format: 12,
        setLabel: 'Set'
      };
      ionicTimePicker.openTimePicker(ipObj1);
    };

    $scope.openTimePicker2 = function () {
      var ipObj1 = {
        callback: function (val) {
          if (typeof (val) === 'undefined') {
            console.log('Time not selected');
          } else {
            var selectedTime = new Date(val * 1000);
            console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
          }
        },
        inputTime: ((new Date()).getHours() * 60 * 60 + (new Date()).getMinutes() * 60),
        format: 24
      };
      ionicTimePicker.openTimePicker(ipObj1);
    };


  });
