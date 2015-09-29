'use strict';
angular.module('fullstackApp')
  .factory('ContactResource', function ($resource) {
        var url = $resource('http://localhost:9000/api/:id', {
          id : '@_id'
      },{
        update:{
           method: 'PUT'
        },

        save:{
           method: 'POST',
           url:'http://localhost:9000/api'
        },

        deleteContact:{
            method: 'DELETE'
        }
  });
    return url;
});
