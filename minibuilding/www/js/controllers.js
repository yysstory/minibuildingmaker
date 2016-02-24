angular.module('starter.controllers', [])

.controller('LottoCtrl', function($scope, $ionicModal, $timeout, Auth, $state, $ionicPopup, $http) {

})
.controller('LoginCtrl', function($scope, $ionicModal, $timeout, Auth, $state, $ionicPopup, $http) {

})
.controller('JoinCtrl', function($scope, $ionicModal, $timeout, Auth, $state, $ionicPopup, $http) {

})
.controller('CheckCtrl', function($scope, $ionicModal, $timeout, Auth, $state, $ionicPopup, $http) {

})
.controller('BoardCtrl', function($scope, $ionicModal, $timeout, Auth, $state, $ionicPopup, $http) {

})
.controller('IdeaCtrl', function($scope, $ionicModal, $timeout, Auth, $state, $ionicPopup, $http) {

})


.controller('AppCtrl', function($scope, $ionicModal, $timeout, Auth, $state, $ionicPopup, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

/*
  showAlert = function(titel,nachricht){
    var alertPopup = $ionicPopup.alert({
      title:titel,
      template:nachricht
    })
  }
*/




  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
/*  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });*/

  // Triggered in the login modal to close it
/*
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
*/

  // Open the login modal
/*  $scope.login = function() {
    $scope.modal.show();
  };*/




  // Perform the login action when the user submits the login form
/*  $scope.doLogin = function() {
    if(!angular.isDefined($scope.loginData.username) || !angular.isDefined($scope.loginData.password) || $scope.loginData.username.trim() == "" ||  $scope.loginData.password.trim() == "" ){
      showAlert("로그인 실패","비번 아이디 입력해라");
      return;
    }else{/!*
        $http.get('')
          .then(function(response){
            if(response.data=="login_done"){
              Auth.setUser({
                username:$scope.loginData.username
              })
            }else if(response.data=='error'){
              showAlert("로그인 실패","비번 아이디 체크했는데 틀림");
            }
          }
          *!/
      Auth.setUser({
        username : $scope.loginData.username
      })
      $state.go('app.playlists');
    }
  };*/

 /* $scope.logout = function(){
    Auth.logout();
    $state.go("login");
  }*/
})

.controller('PlaylistsCtrl', function($scope,Auth) {
  $scope.username = Auth.getUser().username;
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
