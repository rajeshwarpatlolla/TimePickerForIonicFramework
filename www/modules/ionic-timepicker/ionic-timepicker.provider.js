angular.module('ionic-timepicker.provider', [])

  .provider('ionicTimePicker', function () {

    var config = {
      setLabel: 'Set',
      closeLabel: 'Close',
      inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
      format: 12
    };

    this.configTimePicker = function (inputObj) {
      angular.extend(config, inputObj);
    };

    this.$get = ['$rootScope', '$ionicPopup', function ($rootScope, $ionicPopup) {

      var provider = {};
      var $scope = $rootScope.$new();
      $scope.today = resetHMSM(new Date()).getTime();

      //Reset the hours, minutes, seconds and milli seconds
      function resetHMSM(currentDate) {
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);
        return currentDate;
      }


      //Increasing the hours
      $scope.increaseHours = function () {
        $scope.time.hours = Number($scope.time.hours);
        if (obj.format == 12) {
          if ($scope.time.hours != 12) {
            $scope.time.hours += 1;
          } else {
            $scope.time.hours = 1;
          }
        }
        if (obj.format == 24) {
          $scope.time.hours = ($scope.time.hours + 1) % 24;
        }
        $scope.time.hours = ($scope.time.hours < 10) ? ('0' + $scope.time.hours) : $scope.time.hours;
      };

      //Decreasing the hours
      $scope.decreaseHours = function () {
        $scope.time.hours = Number($scope.time.hours);
        if (obj.format == 12) {
          if ($scope.time.hours > 1) {
            $scope.time.hours -= 1;
          } else {
            $scope.time.hours = 12;
          }
        }
        if (obj.format == 24) {
          $scope.time.hours = ($scope.time.hours + 23) % 24;
        }
        $scope.time.hours = ($scope.time.hours < 10) ? ('0' + $scope.time.hours) : $scope.time.hours;
      };

      //Increasing the minutes
      $scope.increaseMinutes = function () {
        $scope.time.minutes = Number($scope.time.minutes);
        $scope.time.minutes = ($scope.time.minutes + obj.step) % 60;
        $scope.time.minutes = ($scope.time.minutes < 10) ? ('0' + $scope.time.minutes) : $scope.time.minutes;
      };

      //Decreasing the minutes
      $scope.decreaseMinutes = function () {
        $scope.time.minutes = Number($scope.time.minutes);
        $scope.time.minutes = ($scope.time.minutes + (60 - obj.step)) % 60;
        $scope.time.minutes = ($scope.time.minutes < 10) ? ('0' + $scope.time.minutes) : $scope.time.minutes;
      };

      //Changing the meridian
      $scope.changeMeridian = function () {
        $scope.time.meridian = ($scope.time.meridian === "AM") ? "PM" : "AM";
      };

      provider.openDatePicker = function (ipObj) {
        var buttons = [];

        console.log(ipObj);
        $scope.mainObj = angular.extend({}, config, ipObj);
        console.log($scope.mainObj);

        buttons.push({
          text: $scope.mainObj.setLabel,
          type: 'button_set',
          onTap: function (e) {
            console.log('ionic-datepicker popup closed.');
          }
        });

        buttons.push({
          text: $scope.mainObj.closeLabel,
          type: 'button_close'
        });

        $scope.popup = $ionicPopup.show({
          templateUrl: 'modules/ionic-timepicker/ionic-timepicker.html',
          scope: $scope,
          cssClass: 'ionic_timepicker_popup',
          buttons: buttons
        });

      };

      return provider;

    }];

  });