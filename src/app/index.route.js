export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('template', {
      url: '/template',
      templateUrl: 'app/template/template.html',
      controller: 'TemplateController',
      controllerAs: 'ctrl'
    });

  $urlRouterProvider.otherwise('/');
}
