/*angular.module('starter.controllers', [])*/

app.controller('LottoCtrl', function(LottoResult,$ionicHistory,$scope,$ionicPopup,$interval, $ionicModal, $timeout, $state, $ionicPopup, $http) {
    console.log('로또컨트롤');
    console.log($scope.userInfo);
  $ionicHistory.nextViewOptions({
    disableBack: true
  });
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
        type: 'button-default',
        onTap: function(e) {
          return false;
        }
      }, {
        text: '저장',
        type: 'button-positive',
        onTap: function(e) {
          return true;
        }
      }]
    });
    confirmPopup.then(function(res) {
      if($scope.userInfo==null){
        $state.go('app.login');
        return;
      }
      var memNo=$scope.userInfo.MEM_NO;
      console.log(res)
      if(res) {
        console.log(inputNumbers+'저장');
        LottoResult.create(memNo,inputNumbers[0],inputNumbers[1],inputNumbers[2],inputNumbers[3],inputNumbers[4],inputNumbers[5])
          .then(function(){

        })
      } else {
        console.log('취소');
      }
    });
  };

})

.controller('MyInfoCtrl', function($ionicHistory,$window,Auth,$rootScope,$scope, $ionicModal, $timeout,  $state, $ionicPopup, $http) {
   console.log('MyInfoCtrl');
   console.log($scope.userInfo);
   $scope.doLogout= function(){
     $ionicHistory.nextViewOptions({
       disableBack: true
     });
     console.log('로그아웃');
     Auth.logout();
   }

   $scope.doWithdrawal= function(){
     var email = $scope.loginInfo.email;
     var password = $scope.loginInfo.password;
     Auth.withdrawal(email,password).then(function(withdrawalRetrunData){
       if(withdrawalRetrunData.affectedRows===1){
         var alertPopup = $ionicPopup.alert({
           title: '이용해주셔서 감사합니다.',
           template: '좀 더 강력한기능을 개발해놓을게요!'
         });
         alertPopup.then(function(res) {
           Auth.logout();
         });
       }
     })
   }
})


.controller('LoginCtrl', function($rootScope,$ionicHistory,Auth,$window,$scope, $ionicModal, $timeout,  $state,$location, $ionicPopup, $http) {
  $scope.doLogin = function(){
    var email = $scope.loginInfo.email;
    var password = $scope.loginInfo.password;
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    Auth.login(email,password).then(function(loginDbData){
      if(loginDbData.length===0){
        $state.go('app.join');
      }else{
        $window.localStorage['userInfo'] = JSON.stringify(loginDbData[0]);
        $rootScope.userInfo = JSON.parse(window.localStorage['userInfo']);
        console.log($scope.userInfo);
        $state.go('app.lotto');
      }
    })
  }
})
.controller('JoinCtrl', function($ionicHistory,Auth,$window,$scope,$ionicModal, $timeout, $state, $ionicPopup) {
  $scope.doJoin = function() {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    var name = $scope.loginInfo.name;
    var email = $scope.loginInfo.email;
    var password = $scope.loginInfo.password;

    Auth.join(name,email,password).then(function(data){
      if(data.affectedRows===1){
        var alertPopup = $ionicPopup.alert({
          title: '회원가입이 완료되었습니다.',
          template: '꼬마빌딩을 사 보아요!'
        });
        alertPopup.then(function(res) {
          $state.go('app.lotto');
        });
      }else{
        var alertPopup = $ionicPopup.alert({
          title: '가입중 오류가 발생했습니다.',
          template: '잠시 후 다시 시도해주세요!'
        });
        alertPopup.then(function(res) {
          $state.go('app.join');
        });
      }
    })
  }


/*  $window.localStorage.clear();*/
})
.controller('CheckCtrl', function(LottoResult,$scope, $ionicModal, $timeout, $state, $ionicPopup, $http) {
  console.log('CheckCtrl');
  $scope.lottoResultRead = function(){
    var memNo = $scope.userInfo.MEM_NO;
    LottoResult.read(memNo).then(function(data){
      $scope.list = data;
    })
  }
  $scope.lottoResultRead();


})
.controller('BoardCtrl', function($scope, $ionicModal, $timeout,$state, $ionicPopup, $http) {
  console.log('BoardCtrl');
})
.controller('IdeaCtrl', function($scope, $ionicModal, $timeout,  $state, $ionicPopup, $http) {
  console.log('ideadCtrl');
})

.controller('AppCtrl', function($ionicHistory,Auth,$window,$scope,$rootScope, $ionicModal, $timeout,  $state,$location, $ionicPopup, $http) {
  $scope.loginInfo = {};

    if(window.localStorage['userInfo']!=null){
      $rootScope.userInfo = JSON.parse(window.localStorage['userInfo']);
    }
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
/*
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
  };*/

  // Perform the login action when the user submits the login form
/*  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };*/

})
