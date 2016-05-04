'use strict';

var app = angular.module('myApp');




app.controller('propertiesCtrl', function($scope, Properties, $stateParams) {

  Properties.getAll()
    .then((res) => {
      $scope.properties = res.data; 
      console.log($scope.properties);

     
    })

    $scope.addProperty = function() {
      Properties.postById($scope.newProperties)

    }
      
})






app.controller('tenantsCtrl', function($scope, Tenants, $stateParams) {
    Tenants.getAll()
    .then((res) => {
      $scope.tenants = res.data; 
      console.log($scope.tenants);

     
    })

    $scope.addTenant = function() {
      Tenants.postById($scope.newTenants)

    }

})








