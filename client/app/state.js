app
  .config(function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/api');

  $stateProvider
    .state('dashboard',{
      abstract: true,
      url: '/api',
      templateUrl: 'views/dashboard.html',
      controller: 'fullstackCtrl',
      resolve:{
        contacts: function(ContactResource){
          return ContactResource.query();
        }
      }
    })

  .state('dashboard.detail',{
      url: '',
      views:{
        detail : {
          templateUrl: 'views/save-contact.html',
          controller: 'fullstackCtrl'
        }
      }
    })
})