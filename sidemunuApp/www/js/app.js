// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.lotto', {
      url: '/lotto',
      views: {
        'menuContent': {
          templateUrl: 'templates/lotto.html',
          controller: 'LottoCtrl'
        }
      }
    })

    .state('app.myInfo', {
      url: '/myInfo',
      views: {
        'menuContent': {
          templateUrl: 'templates/myInfo.html',
          controller: 'MyInfoCtrl'
        }
      }
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        }
      }
    })


  .state('app.join', {
    url: '/join',
    views: {
      'menuContent': {
        templateUrl: 'templates/join.html',
        controller: 'JoinCtrl'
      }
    }
  })

  .state('app.check', {
    cache: false,
      url: '/check',
      views: {
        'menuContent': {
          templateUrl: 'templates/check.html',
          controller: 'CheckCtrl'
        }
      }
    })
    .state('app.board', {
      url: '/board',
      views: {
        'menuContent': {
          templateUrl: 'templates/board.html',
          controller: 'BoardCtrl'
        }
      }
    })

  .state('app.idea', {
    url: '/idea',
    views: {
      'menuContent': {
        templateUrl: 'templates/idea.html',
        controller: 'IdeaCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/lotto');
});
/*
.state('app.single', {
  url: '/playlists/:playlistId',
  views: {
    'menuContent': {
      templateUrl: 'templates/playlist.html',
      controller: 'PlaylistCtrl'
    }
  }
});*/
