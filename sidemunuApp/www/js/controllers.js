/*angular.module('starter.controllers', [])*/

app.controller('LottoCtrl', function($scope,$ionicPopup,$interval, $ionicModal, $timeout, $state, $ionicPopup, $http) {

  function lottoNumbers() {
    var myLotto = [];
    var aryLotto = [];
    var idx = 0;

    for (var i = 1; i < 46; ++i){
      aryLotto.push(i)
    }
    while (myLotto.length < 6){
      idx = Math.floor(Math.random()*aryLotto.length);
      myLotto.push(aryLotto[idx]);
      aryLotto.splice(idx,1);
    }
    myLotto.sort(sortNumber);
    return myLotto;
  }
  function sortNumber(a, b) {
    return a - b;
  }

/*  function lottoOn(){
    $scope.lotto1=true;$scope.lotto2=true;$scope.lotto3=true;$scope.lotto4=true;
    $scope.lotto5=true;$scope.lotto6=true;$scope.lotto7=true;$scope.lotto8=true;
    $scope.lotto9=true;$scope.lotto10=true;$scope.lotto11=true;$scope.lotto12=true;
    $scope.lotto13=true;$scope.lotto14=true;$scope.lotto15=true;$scope.lotto16=true;
    $scope.lotto17=true;$scope.lotto18=true;$scope.lotto19=true;$scope.lotto20=true;
    $scope.lotto21=true;$scope.lotto22=true;$scope.lotto23=true;$scope.lotto24=true;
    $scope.lotto25=true;$scope.lotto26=true;$scope.lotto27=true;$scope.lotto28=true;
    $scope.lotto29=true;$scope.lotto30=true;$scope.lotto31=true;$scope.lotto32=true;
    $scope.lotto33=true;$scope.lotto34=true;$scope.lotto35=true;$scope.lotto36=true;
    $scope.lotto37=true;$scope.lotto38=true;$scope.lotto39=true;$scope.lotto40=true;
    $scope.lotto41=true;$scope.lotto42=true;$scope.lotto43=true;$scope.lotto44=true;
    $scope.lotto45=true;$scope.lotto46=true;
  }*/

  function lottoOff(){
    $scope.lotto1=false;$scope.lotto2=false;$scope.lotto3=false;$scope.lotto4=false;
    $scope.lotto5=false;$scope.lotto6=false;$scope.lotto7=false;$scope.lotto8=false;
    $scope.lotto9=false;$scope.lotto10=false;$scope.lotto11=false;$scope.lotto12=false;
    $scope.lotto13=false;$scope.lotto14=false;$scope.lotto15=false;$scope.lotto16=false;
    $scope.lotto17=false;$scope.lotto18=false;$scope.lotto19=false;$scope.lotto20=false;
    $scope.lotto21=false;$scope.lotto22=false;$scope.lotto23=false;$scope.lotto24=false;
    $scope.lotto25=false;$scope.lotto26=false;$scope.lotto27=false;$scope.lotto28=false;
    $scope.lotto29=false;$scope.lotto30=false;$scope.lotto31=false;$scope.lotto32=false;
    $scope.lotto33=false;$scope.lotto34=false;$scope.lotto35=false;$scope.lotto36=false;
    $scope.lotto37=false;$scope.lotto38=false;$scope.lotto39=false;$scope.lotto40=false;
    $scope.lotto41=false;$scope.lotto42=false;$scope.lotto43=false;$scope.lotto44=false;
    $scope.lotto45=false;$scope.lotto46=false;
  }
  $scope.lottoRun= function(){
    var i =1;
    var bool = true;
    var lottoNumberArr = lottoNumbers();
    $scope.lottoBtn = true;
    lottoOff();
    var interval = $interval(function () {
      if(0<i&&i<=46){
        if(bool==true){
          eval("$scope.lotto"+i+"= true;");
          console.log("$scope.lotto"+i+"= true;");
          i++;
        }else if(bool==false){
          if(lottoNumberArr.indexOf(i)==-1){
            eval("$scope.lotto"+i+"= false;");
            console.log("$scope.lotto"+i+"= false;");
          }
          i--;
        }
      }else if(i==0){
        $interval.cancel(interval);
        $scope.lottoBtn = false;
        $scope.showConfirm(lottoNumberArr);
      }else{
        bool=false;
        i--;
      }
    },50);
  }
  $scope.showConfirm = function(inputNumbers) {
    var confirmPopup = $ionicPopup.confirm({
      title: inputNumbers,
      template:
        '<b>내 보관함에 저장할까요? </b><br>' +
        '저장된 번호로 추첨일에 결과를 알려드립니다.',
      buttons: [{
        text: '취소',
        type: 'button-default'
      }, {
        text: '저장',
        type: 'button-positive'
      }]
    });
    confirmPopup.then(function(res) {
      if(res) {
        console.log('취소');
      } else {
        console.log(inputNumbers+'저장');
      }
    });
  };



})
.controller('LoginCtrl', function($scope, $ionicModal, $timeout,  $state, $ionicPopup, $http) {
})
.controller('JoinCtrl', function(Auth,$scope,$ionicModal, $timeout, $state, $ionicPopup) {
  console.log(Auth.userRead('yysstory@gmail.com','alwjr425'));

})
.controller('CheckCtrl', function($scope, $ionicModal, $timeout, $state, $ionicPopup, $http) {

})
.controller('BoardCtrl', function($scope, $ionicModal, $timeout,$state, $ionicPopup, $http) {

})
.controller('IdeaCtrl', function($scope, $ionicModal, $timeout,  $state, $ionicPopup, $http) {

})
.controller('LoginCtrl', function($scope, $stateParams) {
  })


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
