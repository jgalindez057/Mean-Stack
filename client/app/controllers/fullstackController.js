'use strict';
app
 app.controller('fullstackCtrl', function($scope, $http){
  var backUrl = 'http://localhost:9000';

  $scope.showUsers = function(){
    $http.get(backUrl + '/api').success(function (data){
    $scope.contacts = data;
    })
  }
  $scope.showUsers();
  $scope.saveContact = function(){
    $http.post(backUrl + '/api', $scope.contact).success(function (data){
      $scope.showUsers();
      $scope.contact = "";
    })
  }

  $scope.editContact = function(user){
    $http.get(backUrl + '/api/' + user._id).success(function (data){
      $scope.contact = data;
    })
  }

  $scope.updateContact = function(user){
    $http.put(backUrl + '/api/' + $scope.contact._id, $scope.contact).success(function (data){
      $scope.showUsers();
      $scope.contact = "";
    })
  }
  $scope.deleteContact = function(user){
    $http.delete(backUrl + '/api/' + user._id).success(function (data){
      $scope.showUsers();
    })
  }

  $scope.clear = function(){
    $scope.contact = '';
  }
});