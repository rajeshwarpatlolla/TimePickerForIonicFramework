angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $ionicPopup) {

    $scope.timePickerObject12Hour = {
      inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
      step: 15,  //Optional
      format: 12,  //Optional
      titleLabel: '12-hour Format',  //Optional
      closeLabel: 'Close',  //Optional
      setLabel: 'Set',  //Optional
      setButtonType: 'button-positive',  //Optional
      closeButtonType: 'button-stable',  //Optional
      callback: function (val) {    //Mandatory
        timePicker12Callback(val);
      }
    };

    $scope.timePickerObject24Hour = {
      inputEpochTime: ((new Date()).getHours() * 60 * 60 + (new Date()).getMinutes() * 60),  //Optional
      step: 10,  //Optional
      format: 24,  //Optional
      titleLabel: '24-hour Format',  //Optional
      closeLabel: 'Cancel',  //Optional
      setLabel: 'Select',  //Optional
      setButtonType: 'button-balanced',  //Optional
      closeButtonType: 'button-positive',  //Optional
      callback: function (val) {    //Mandatory
        timePicker24Callback(val);
      }
    };

    function timePicker12Callback(val) {
      if (typeof (val) === 'undefined') {
        console.log('Time not selected');
      } else {
        $scope.timePickerObject12Hour.inputEpochTime = val;
        var selectedTime = new Date(val * 1000);
        console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
      }
    }

    function timePicker24Callback(val) {
      if (typeof (val) === 'undefined') {
        console.log('Time not selected');
      } else {
        $scope.timePickerObject24Hour.inputEpochTime = val;
        var selectedTime = new Date(val * 1000);
        console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
      }
    }

  })

  .controller('FriendsCtrl', function ($scope) {
  })

  .controller('AccountCtrl', function ($scope) {
  });
