angular.module('starter.controllers', ['pascalprecht.translate'])

.controller('MainCtrl', function($scope, $translate, $localStorage, $rootScope) {
    $translate.use($rootScope.storage.translations);
    $scope.changeLanguage = function(key) {
        console.info('changeLanguage: ' + key);
        $translate.use(key);
        $rootScope.storage.translations = key;
    }
})

.controller('NewslistsCtrl', function($scope, $translate, $localStorage, $rootScope, $http) {
    $translate.use($rootScope.storage.translations);
    $scope.fethData = function(){
        $http.get('http://192.168.1.38/abt/Welcome/index/10').then(function successCallback(response) {
            console.log(response.data);
            $scope.playlists = response.data;
        }).finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
    $scope.loadMore = function(){
        $http.get('http://192.168.1.38/abt/Welcome/index').then(function successCallback(response) {
            console.log(response.data[0]);
            $scope.playlists.push(response.data[0]);
        }).finally(function() {
            $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };
    $http.get('http://192.168.1.38/abt/Welcome/index/10').then(function successCallback(response) {
        console.log(response.data);
        $scope.playlists = response.data;
    });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
