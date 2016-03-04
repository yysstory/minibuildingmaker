/*angular.module("starter,service",[])*/

var rootUrl='http://192.168.0.18:3000';

app.service('User', ['$http','$q','$window',function($http, $q,$window){
      this.userCreate = function(name,email,password) {

      }
      this.userRead = function(){
        return JSON.parse(window.localStorage['userInfo'] || {});
      }

      this.userUpdate = function(email,password) {

      }
      this.userDelete = function(email,password) {

      }
  }])

app.service('Auth', ['$http','$q','$rootScope','$window','$state',function($http, $q,$rootScope,$window,$state){

  this.login = function(email,password) {
    //deferred 객체를 생성한다.
    var deferred = $q.defer();
    $http.post(
      rootUrl+'/auth/login',
      {email:email,password:password}
      )
      .success(function(data){
        //요청이 성공하면 약속을 지키고 별도 데이터를 전달한다.
        deferred.resolve(data);
      })
      .error(function(msg){
        //요청이 실패하면 약속을 취소하고 메시지를 전달한다.
        deferred.reject(msg);
      })
    //해당 deferred 객체의 약속을 반환한다.
    return deferred.promise;
  }
  this.logout = function() {
    $rootScope.userInfo=null;
    $window.localStorage['userInfo'] = null;
    $state.go('app.lotto', {}, {reload: true});
  }

  this.join = function(name,email,password) {
    var deferred = $q.defer();
    $http.post(
        rootUrl+'/auth/join',
      {name:name,email:email,password:password}
      )
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(msg){
        deferred.reject(msg);
      })
    return deferred.promise;
  }

  this.withdrawal= function(email,password) {
    var deferred = $q.defer();
    $http.post(
      rootUrl+'/auth/withdrawal',
      {email:email,password:password}
      )
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(msg){
        deferred.reject(msg);
      })
    return deferred.promise;
  }

/*  this.authorised= function(object) {
    if(object.length>1){
      return true;
    }else {
      return false;
    }
  }*/

}])
app.service('LottoResult', ['$http','$q','$window',function($http, $q,$window) {

  this.create = function(memNo,num1,num2,num3,num4,num5,num6,round){
    var deferred = $q.defer();
    $http.post(
        rootUrl+'/lottoResult/create',
      {memNo:memNo,num1:num1,num2:num2,num3:num3,num4:num4,num5:num5,num6:num6}
      )
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(msg){
        deferred.reject(msg);
      })
    return deferred.promise;
  }

   this.read = function(memNo){
   var deferred = $q.defer();
   $http.post(
   rootUrl+'/lottoResult/read',
   {memNo:memNo}
   )
   .success(function(data){
   deferred.resolve(data);
   })
   .error(function(msg){
   deferred.reject(msg);
   })
   return deferred.promise;
   }
  /*
   this.update = function(memNo,title,content){
   var deferred = $q.defer();
   $http.post(
   rootUrl+'/board/create',
   {memNo:memNo,title:title,content:content}
   )
   .success(function(data){
   deferred.resolve(data);
   })
   .error(function(msg){
   deferred.reject(msg);
   })
   return deferred.promise;
   }

   this.delete = function(memNo,title,content){
   var deferred = $q.defer();
   $http.post(
   rootUrl+'/board/create',
   {memNo:memNo,title:title,content:content}
   )
   .success(function(data){
   deferred.resolve(data);
   })
   .error(function(msg){
   deferred.reject(msg);
   })
   return deferred.promise;
   }
   */


}])

app.service('Board', ['$http','$q','$window',function($http, $q,$window) {

  this.create = function(memNo,title,content){
    var deferred = $q.defer();
    $http.post(
        rootUrl+'/board/create',
      {memNo:memNo,title:title,content:content}
      )
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(msg){
        deferred.reject(msg);
      })
    return deferred.promise;
  }

 /* this.read = function(memNo,title,content){
    var deferred = $q.defer();
    $http.post(
        rootUrl+'/board/create',
      {memNo:memNo,title:title,content:content}
      )
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(msg){
        deferred.reject(msg);
      })
    return deferred.promise;
  }

  this.update = function(memNo,title,content){
    var deferred = $q.defer();
    $http.post(
        rootUrl+'/board/create',
      {memNo:memNo,title:title,content:content}
      )
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(msg){
        deferred.reject(msg);
      })
    return deferred.promise;
  }

  this.delete = function(memNo,title,content){
    var deferred = $q.defer();
    $http.post(
        rootUrl+'/board/create',
      {memNo:memNo,title:title,content:content}
      )
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(msg){
        deferred.reject(msg);
      })
    return deferred.promise;
  }
  */
}])

/*
  .factory('localstorage', ['$window', function($window) {
    return {
      set: function(key, value) {
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function(key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function(key) {
        return JSON.parse($window.localStorage[key] || '{}');
      }
    }
  }]);
*/
