/*angular.module("starter,service",[])*/
app.service('Auth', ['$http',function($scope,$http){
      this.setUser = function(email,password){
        var userData;
        $http.post(
          'http://localhost:3000/login',
           {email:email,password:password}
        )
        .success(function(data){
          console.log(data);
          userData = data;
        })
        .error(function(data){
          console.log(data);
        })
      }

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
