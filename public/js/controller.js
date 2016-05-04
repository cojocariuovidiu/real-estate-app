'use strict';

var app = angular.module('myApp');



/// PROPERTIES ///

app.controller('propertiesCtrl', function($scope, Properties, $stateParams) {

  Properties.getAll()
  .then((res) => {
    $scope.properties = res.data; 
  })

  $scope.addProperty = function() {
    Properties.postById($scope.newProperties)
    .then(res => {
      $scope.properties.push(res.data)
    })
  }

 // remove
  $scope.removeProperty = function(property) {
    Properties.remove(property) 
    .then(res => {

    })
    .catch(err => {
      console.log('err:', err);
    });

  }; 


  //sort when click table header properties
  $scope.sortBy = function(order) {
    if($scope.sortOrder === order) {
      $scope.sortOrder = `-${order}`;
    } else {
      $scope.sortOrder = order;
    }
  };

})




/// TENANTS ///

app.controller('tenantsCtrl', function($scope, Tenants, $stateParams) {
  Tenants.getAll()
  .then((res) => {
    $scope.tenants = res.data; 
  })

  $scope.addTenant = function() {
    Tenants.postById($scope.newTenants)
    .then(res => {
      $scope.tenants.push(res.data)
    })
  }

  // remove
  $scope.removeTenant = function(tenant) {
    Tenants.remove(tenant) 
    .then(res => {

    })
    .catch(err => {
      console.log('err:', err);
    });

  };    



  //sort when click table header tenants
  $scope.sortBy = function(order) {
    if($scope.sortOrder === order) {
      $scope.sortOrder = `-${order}`;
    } else {
      $scope.sortOrder = order;
    }
  };

})







