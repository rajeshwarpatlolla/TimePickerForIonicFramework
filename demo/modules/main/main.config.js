angular.module('starter')
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider

      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "modules/main/templates/tabs.html"
      })

      .state('tab.timepicker', {
        url: '/timepicker',
        views: {
          'tab-timepicker': {
            templateUrl: 'modules/main/templates/tab-timepicker.html',
            controller: 'TimepickerDemoCtrl'
          }
        }
      })

      .state('tab.other-plugins', {
        url: '/other-plugins',
        views: {
          'tab-other-plugins': {
            templateUrl: 'modules/main/templates/tab-other-plugins.html'
          }
        }
      })

      .state('tab.contact', {
        url: '/contact',
        views: {
          'tab-contact': {
            templateUrl: 'modules/main/templates/tab-contact.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/timepicker');

  });