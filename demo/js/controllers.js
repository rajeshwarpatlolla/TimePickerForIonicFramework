angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $ionicPopup) {

    $scope.slots = [
      {epochTime: 12600, step: 15, format: 12},
      {epochTime: 54900, step: 1, format: 24}
    ];

    $scope.timePickerCallback = function (val) {
      if (typeof (val) === 'undefined') {
        console.log('Time not selected');
      } else {
        console.log('Selected time is : ', val);
      }
    };

  })

  .controller('FriendsCtrl', function ($scope) {
  })

  .controller('AccountCtrl', function ($scope) {
  });
