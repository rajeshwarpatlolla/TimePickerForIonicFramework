angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope, $ionicPopup) {

        $scope.slots = [
            {epochTime: 12600, step: 15},
            {epochTime: 54900, step: 1}
        ];

        $scope.showTimePickerModal = function (obj, str) {

            $scope.time = { hours: 0, minutes: 0, meridian: "" };

            var objDate = new Date(obj.epochTime * 1000);       // Epoch time in milliseconds.

            $scope.time.meridian = (objDate.getUTCHours() >= 12) ? "PM" : "AM";
            $scope.time.hours = (objDate.getUTCHours() > 12) ? ((objDate.getUTCHours() - 12)) : (objDate.getUTCHours());
            $scope.time.minutes = (objDate.getUTCMinutes());

            if($scope.time.hours == 0 && $scope.time.meridian == "AM") {
                $scope.time.hours = 12;
            }

            $scope.increaseHours = function () {
                if ($scope.time.hours != 12) {
                    $scope.time.hours += 1;
                } else {
                    $scope.time.hours = 1;
                }
            };

            $scope.decreaseHours = function () {
                if ($scope.time.hours > 1) {
                    $scope.time.hours -= 1;
                } else {
                    $scope.time.hours = 12;
                }
            };

            $scope.increaseMinutes = function () {
                if ($scope.time.minutes != (60 - obj.step)) {
                    $scope.time.minutes += obj.step;
                } else {
                    $scope.time.minutes = 0;
                }
            };

            $scope.decreaseMinutes = function () {
                if ($scope.time.minutes != 0) {
                    $scope.time.minutes -= obj.step;
                } else {
                    $scope.time.minutes = 60 - obj.step;
                }
            };

            $scope.changeMeridian = function () {
                $scope.time.meridian = ($scope.time.meridian === "AM") ? "PM" : "AM";
            };

            $ionicPopup.show({
                templateUrl: 'my-time-picker.tpl.html',
                title: '<strong>Select Time</strong>',
                subTitle: '',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: 'Set',
                        type: 'button-positive',
                        onTap: function (e) {

                            $scope.loadingContent = true;

                            var totalSec = 0;

                            if($scope.time.hours != 12){
                                totalSec = ($scope.time.hours * 60 * 60) + ($scope.time.minutes * 60);
                            }else{
                                totalSec = $scope.time.minutes * 60;
                            }

                            if ($scope.time.meridian === "AM") {
                                totalSec += 0;
                            } else if ($scope.time.meridian === "PM") {
                                totalSec += 43200;
                            }
                            obj.epochTime = totalSec;

                        }
                    }
                ]
            })
        };

    })

    .controller('FriendsCtrl', function ($scope) {
    })

    .controller('AccountCtrl', function ($scope) {
    });
