'use strict';
app
  .controller('fullstackCtrl', function ($scope, $window, contacts, ContactResource){
  		$scope.contacts = contacts;

   		$scope.saveContact = function(){
   			var newContact = new ContactResource($scope.contact);
			   newContact.$save();
			   $window.location.reload();
   		}

   		$scope.editContact = function(contact){
   			$scope.contact = contact;
   		}

   		$scope.updateContact = function(){
   			var newContact = new ContactResource($scope.contact);
   			newContact.$update()
   			$scope.contact = '';
   		}

   		$scope.deleteContact = function(contact){
   			var	newContact = new ContactResource(contact);
   			newContact.$deleteContact();
   			$window.location.reload();
   		}

   		$scope.clear = function(){
   			$scope.contact = '';
   		}
  })