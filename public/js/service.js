'use strict';

var app = angular.module('myApp');



app.service('Properties', function($http) {

 
 
  this.postById = function(Property) {
    return $http.post(`api/properties/`, Property);
  }  


  this.getAll = function() {
    return $http.get(`api/properties/`);
  }

  this.getById = function(id) {
    return $http.get(`api/properties/${id}/`);
  }
	this.remove = function(property) {
    return $http.delete(`/api/properties/${property._id}`);
  };

})





app.service('Tenants', function($http) {

 
  this.postById = function(Tenant) {
    return $http.post(`api/tenants/`, Tenant);
  }  


  this.getAll = function() {
    return $http.get(`api/tenants/`);
  }

  this.getById = function(id) {  
  }

	this.remove = function(tenant) {
    return $http.delete(`/api/properties/${tenant._id}`);
  };
	this.remove = function(tenant) {
    return $http.delete(`/api/properties/${tenant._id}`);
  };

})

