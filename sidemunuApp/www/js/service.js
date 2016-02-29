/*angular.module("starter,service",[])*/
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

app.service('Auth', ['$http','$q',function($http, $q){

  this.login = function(email,password) {
    //deferred 객체를 생성한다.
    var deferred = $q.defer();
    $http.post(
      'http://localhost:3000/login',
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
  this.logout = function(email,password) {

  }

  this.join = function(email,password) {

  }
  this.withdrawal= function(email,password) {

  }

/*  this.authorised= function(object) {
    if(object.length>1){
      return true;
    }else {
      return false;
    }
  }*/

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
