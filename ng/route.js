var app = angular.module('app');
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
$urlRouterProvider.otherwise('/');
$locationProvider.hashPrefix(''); 
$locationProvider.html5Mode(true);

 $stateProvider
           .state('app', {
             url: '/',
             views:{
               'header': {
               templateUrl: '/menues/mainMenu.html',
               controller: 'mainMenuController'
               },
               'content': {
               templateUrl: '/main/home.html'
               },
               'footer': {
               templateUrl: '/company/footer.html'
               }
             }
            })


            .state('registerStep1',
             {
               url: '/register/step1',
               controller: 'regCtrl',
               controllerAs: 'register',
               templateUrl: '/users/register/registerStep1.html',
               authenticated: false
            })

            .state('registerStep2',
             {
               url: '/register/step2',
               controller: 'regCtrl',
               controllerAs: 'register',
               templateUrl: '/users/register/registerStep2.html',
               authenticated: false
            })

            .state('resetusername',
            {
              url: '/resetusername',
              templateUrl: '/users/reset/username.html',
              controller: 'usernameCtrl',
              controllerAs: 'username'
            })

            .state('resetpassword',
            {
              url: '/resetpassword',
              templateUrl: '/users/reset/password.html',
              controller: 'passwordCtrl',
              controllerAs: 'password'
            })

            .state('reset',
            {
              url: '/reset/:token',
              templateUrl: '/users/reset/newpassword.html',
              controller: 'resetCtrl',
              controllerAs: 'reset'
            })


            .state('activate',
            {
              url: '/activate/:token',
              templateUrl: '/users/activation/activate.html',
              controller: 'emailCtrl',
              controllerAs: 'email'
            })

            .state('resend',
            {
              url: '/resend',
              templateUrl: '/users/activation/resend.html',
              controller: 'resendCtrl',
              controllerAs: 'resend'
            })


            .state('app.intro',
            {
              url: 'intro',
              views:{
                'content@': {
                  templateUrl: '/company/intro.html',
                  authenticated: false
                }
              }
            })

            .state('app.terms',
            {
              url: 'terms',
              views:{
                'content@': {
                  templateUrl: '/company/terms.html',
                  authenticated: false
                }
              }
            })

            .state('app.privacy',
            {
              url: 'privacy',
              views:{
                'content@': {
                  templateUrl: '/company/privacy.html',
                  authenticated: false
                }
              }
            });

});

app.run(function($rootScope, User, $state){
  $rootScope.$on('$stateChangeStart',  function(event, toState, toParams, fromState, fromParams, options){
  });
  $rootScope.$on('$stateChangeError',  function(event, toState, toParams, fromState, fromParams, error){
    $state.go('app');
  });
});
