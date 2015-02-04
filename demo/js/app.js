// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "/demo/templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.timepicker', {
                url: '/timepicker',
                views: {
                    'tab-timepicker': {
                        templateUrl: '/demo/templates/tab-timepicker.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.reference', {
                url: '/reference',
                views: {
                    'tab-reference': {
                        templateUrl: '/demo/templates/tab-reference.html',
                        controller: 'FriendsCtrl'
                    }
                }
            })

            .state('tab.contact', {
                url: '/contact',
                views: {
                    'tab-contact': {
                        templateUrl: '/demo/templates/tab-contact.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/timepicker');

    })

    .directive('standardTimeMeridian', function () {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                etime: '=etime'
            },
            template: "<strong>{{stime}}</strong>",
            link: function (scope, elem, attrs) {

                scope.stime = epochParser(scope.etime, 'time');

                function prependZero(param) {
                    if (String(param).length < 2) {
                        return "0" + String(param);
                    }
                    return param;
                }

                function epochParser(val, opType) {
                    if (val === null) {
                        return "00:00";
                    } else {
                        var meridian = ['AM', 'PM'];

                        if (opType === 'time') {
                            var hours = parseInt(val / 3600);
                            var minutes = (val / 60) % 60;
                            var hoursRes = hours > 12 ? (hours - 12) : hours;

                            var currentMeridian = meridian[parseInt(hours / 12)];

                            return (prependZero(hoursRes) + ":" + prependZero(minutes) + " " + currentMeridian);
                        }
                    }
                }

                scope.$watch('etime', function (newValue, oldValue) {
                    scope.stime = epochParser(scope.etime, 'time');
                });

            }
        };
    })

    .directive('standardTimeNoMeridian', function () {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                etime: '=etime'
            },
            template: "<strong>{{stime}}</strong>",
            link: function (scope, elem, attrs) {

                scope.stime = epochParser(scope.etime, 'time');

                function prependZero(param) {
                    if (String(param).length < 2) {
                        return "0" + String(param);
                    }
                    return param;
                }

                function epochParser(val, opType) {
                    if (val === null) {
                        return "00:00";
                    } else {
                        if (opType === 'time') {
                            var hours = parseInt(val / 3600);
                            var minutes = (val / 60) % 60;

                            return (prependZero(hours) + ":" + prependZero(minutes));
                        }
                    }
                }

                scope.$watch('etime', function (newValue, oldValue) {
                    scope.stime = epochParser(scope.etime, 'time');
                });

            }
        };
    })

    .directive('ionicTimePicker', function ($ionicPopup) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                etime: '=etime',
                format: '=format',
                step: '=step'
            },
            link: function (scope, element, attrs) {

                element.on("click", function () {

                    var obj = {epochTime: scope.etime, step: scope.step, format: scope.format};

                        scope.time = { hours: 0, minutes: 0, meridian: "" };

                        var objDate = new Date(obj.epochTime * 1000);       // Epoch time in milliseconds.

                        scope.increaseHours = function () {
                            if (obj.format == 12) {
                                if (scope.time.hours != 12) {
                                    scope.time.hours += 1;
                                } else {
                                    scope.time.hours = 1;
                                }
                            }
                            if (obj.format == 24) {
                                if (scope.time.hours != 23) {
                                    scope.time.hours += 1;
                                } else {
                                    scope.time.hours = 0;
                                }
                            }
                        };

                        scope.decreaseHours = function () {
                            if (obj.format == 12) {
                                if (scope.time.hours > 1) {
                                    scope.time.hours -= 1;
                                } else {
                                    scope.time.hours = 12;
                                }
                            }
                            if (obj.format == 24) {
                                if (scope.time.hours > 0) {
                                    scope.time.hours -= 1;
                                } else {
                                    scope.time.hours = 23;
                                }
                            }
                        };

                        scope.increaseMinutes = function () {
                            if (scope.time.minutes != (60 - obj.step)) {
                                scope.time.minutes += obj.step;
                            } else {
                                scope.time.minutes = 0;
                            }
                        };

                        scope.decreaseMinutes = function () {
                            if (scope.time.minutes != 0) {
                                scope.time.minutes -= obj.step;
                            } else {
                                scope.time.minutes = 60 - obj.step;
                            }
                        };

                        if (obj.format == 12) {

                            scope.time.meridian = (objDate.getUTCHours() >= 12) ? "PM" : "AM";
                            scope.time.hours = (objDate.getUTCHours() > 12) ? ((objDate.getUTCHours() - 12)) : (objDate.getUTCHours());
                            scope.time.minutes = (objDate.getUTCMinutes());

                            if (scope.time.hours == 0 && scope.time.meridian == "AM") {
                                scope.time.hours = 12;
                            }

                            scope.changeMeridian = function () {
                                scope.time.meridian = (scope.time.meridian === "AM") ? "PM" : "AM";
                            };

                            $ionicPopup.show({
                                templateUrl: '../templates/time-picker-12-hour.html',
                                title: '<strong>12-Hour Format</strong>',
                                subTitle: '',
                                scope: scope,
                                buttons: [
                                    { text: 'Cancel' },
                                    {
                                        text: 'Set',
                                        type: 'button-positive',
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
                                        }
                                    }
                                ]
                            })

                        }

                        if (obj.format == 24) {

                            scope.time.hours = (objDate.getUTCHours());
                            scope.time.minutes = (objDate.getUTCMinutes());

                            $ionicPopup.show({
                                templateUrl: '../templates/time-picker-24-hour.html',
                                title: '<strong>24-Hour Format</strong>',
                                subTitle: '',
                                scope: scope,
                                buttons: [
                                    { text: 'Cancel' },
                                    {
                                        text: 'Set',
                                        type: 'button-positive',
                                        onTap: function (e) {

                                            scope.loadingContent = true;

                                            var totalSec = 0;

                                            if (scope.time.hours != 24) {
                                                totalSec = (scope.time.hours * 60 * 60) + (scope.time.minutes * 60);
                                            } else {
                                                totalSec = scope.time.minutes * 60;
                                            }
                                            scope.etime = totalSec;
                                        }
                                    }
                                ]
                            })

                        }

                });


            }
        };
    });

