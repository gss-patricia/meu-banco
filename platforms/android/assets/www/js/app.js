angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.backgroundColorByHexString("#0C60EE");
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.extrato', {
    url: '/extrato',
    views: {
      'tab-extrato': {
        templateUrl: 'templates/tab-extrato.html'
      }
    }
  })
  .state('tab.fatura', {
    url: '/fatura',
    views: {
      'tab-fatura': {
        templateUrl: 'templates/tab-fatura.html'
      }
    }
  })
  .state('tab.cliente', {
    url: '/cliente',
    views: {
      'tab-cliente': {
        templateUrl: 'templates/tab-cliente.html',
        controller: 'MainCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/home');
});