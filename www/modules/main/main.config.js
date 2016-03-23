angular.module('starter')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })

      .state('tab.timepicker', {
        url: '/timepicker',
        views: {
          'tab-timepicker': {
            templateUrl: 'templates/tab-timepicker.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('tab.reference', {
        url: '/reference',
        views: {
          'tab-reference': {
            templateUrl: 'templates/tab-reference.html'
          }
        }
      })

      .state('tab.contact', {
        url: '/contact',
        views: {
          'tab-contact': {
            templateUrl: 'templates/tab-contact.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/timepicker');

  });