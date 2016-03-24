angular.module('ionic-timepicker.provider', [])

  .provider('ionicTimePicker', function () {

    var config = {
      inputEpochTime: ((new Date()).getHours() * 60 * 60),
      step: 15,
      format: 12,
      titleLabel: '12-hour Format',
      setLabel: 'Set',
      closeLabel: 'Close'
    };

    this.configTimePicker = function (inputObj) {
      angular.extend(config, inputObj);
    };

    this.$get = ['$rootScope', '$ionicPopup', '$ionicModal', function ($rootScope, $ionicPopup, $ionicModal) {

      var provider = {};
      var $scope = $rootScope.$new();

      $scope.today = resetSM(new Date()).getTime();
      $scope.disabledDates = [];
      $scope.format = 12;

      //Reset the hours, minutes, seconds and milli seconds
      function resetSM(currentTime) {
        currentTime.setSeconds(0);
        currentTime.setMilliseconds(0);
        return currentTime;
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

      //Open datepicker popup
      provider.openTimePicker = function (ipObj) {
        var buttons = [];
        $scope.mainObj = angular.extend({}, config, ipObj);

        if (typeof scope.inputObj.inputEpochTime === 'undefined' || scope.inputObj.inputEpochTime === null) {
          objTime = new Date();
        } else {
          objTime = new Date(scope.inputObj.inputEpochTime * 1000);
        }

        buttons = [{
          text: $scope.mainObj.setLabel,
          type: 'button_set',
          onTap: function (e) {
            scope.loadingContent = true;

            var totalSec = 0;

            if (scope.time.hours != 12) {
              totalSec = (scope.time.hours * 60 * 60) + (scope.time.minutes * 60);
            } else {
              totalSec = scope.time.minutes * 60;
            }

            if (scope.time.meridian === "AM") {
              totalSec += 0;
            } else if (scope.time.meridian === "PM") {
              totalSec += 43200;
            }
            scope.etime = totalSec;
            scope.inputObj.callback(scope.etime);
          }
        }];

        buttons.push({
          text: $scope.mainObj.closeLabel,
          type: 'button_close',
          onTap: function (e) {
            console.log('ionic-datepicker popup closed.');
          }
        });

        $scope.popup = $ionicPopup.show({
          templateUrl: 'ionic-datepicker-popup.html',
          $scope: $scope,
          cssClass: 'ionic_datepicker_popup',
          buttons: buttons
        });

      };

      return provider;

    }];
  });