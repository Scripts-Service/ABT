// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
// Initialize the Firebase SDK
var config = {
  apiKey: 'AIzaSyCOG06o_d2MQUd6UEkf9DW8daO-lw6QMpY',
  authDomain: 'abt-project-7a84f.firebaseapp.com',
  databaseURL: 'https://abt-project-7a84f.firebaseio.com',
  storageBucket: 'abt-project-7a84f.appspot.com'
};
firebase.initializeApp(config);


angular.module('starter', ['ionic', 'firebase', 'pascalprecht.translate', 'ngStorage', 'starter.controllers'])

.run(function($ionicPlatform, $localStorage, $rootScope) {
    $rootScope.storage = $localStorage.$default({
        translations: 'th'
    });

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
    controller: 'MainCtrl'
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.newslists', {
      url: '/newslists',
      views: {
        'menuContent': {
          templateUrl: 'templates/newslists.html',
          controller: 'NewslistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/newslists/:NewsId',
    views: {
      'menuContent': {
        templateUrl: 'templates/news.html',
        controller: 'NewslistsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/newslists');
})

.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        TH: 'Thailand',
        EN: 'English',
        SIDEMENUS: {
            TITLE: 'Menu',
            NEWS: 'News',
            SETTINGS: 'Settings',
        },
        TITLE: {
            SETTINGS: 'Settings',
            NEWS: 'News',
        },
        SETTINGS: {
            Language: 'Language',
        }
    });
    $translateProvider.translations('th', {
        TH: 'ภาษาไทย',
        EN: 'ภาษาอังกฤษ',
        SIDEMENUS: {
            TITLE: 'เมนู',
            NEWS: 'ข่าวประชาสัมพันธ์',
            SETTINGS: 'ตั้งค่า',
        },
        TITLE: {
            SETTINGS: 'ตั้งค่า',
            NEWS: 'ข่าวประชาสัมพันธ์',
        },
        SETTINGS: {
            Language: 'ภาษา',
        }
    });
});
