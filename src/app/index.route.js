export function routerConfig($stateProvider, $urlRouterProvider) {
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
    })
    .state('templateSuccess', {
      url: '/template/success',
      templateUrl: 'app/templateSuccess/success.html',
      controller: 'TemplateController',
      controllerAs: 'ctrl'
    })
    .state('templateContent', {
      url: '/template/content',
      templateUrl: 'app/templateContent/content.html',
      controller: 'TemplateController',
      controllerAs: 'ctrl'
    })
    .state('templateBehavior', {
      url: '/template/behavior',
      templateUrl: 'app/templateBehavior/behavior.html',
      controller: 'TemplateController',
      controllerAs: 'ctrl'
    })
    .state('templateAutomation', {
      url: '/template/automation',
      templateUrl: 'app/templateAutomation/automation.html',
      controller: 'TemplateController',
      controllerAs: 'ctrl'
    })
    .state('templateIntegrations', {
      url: '/template/integrations',
      templateUrl: 'app/templateIntegrations/integrations.html',
      controller: 'TemplateController',
      controllerAs: 'ctrl'
    })
    .state('templateTesting', {
      url: '/template/testing',
      templateUrl: 'app/templateTesting/testing.html',
      controller: 'TemplateController',
      controllerAs: 'ctrl'
    })
    .state('templateTesting2', {
      url: '/template/testing2',
      templateUrl: 'app/templateTesting/testing2.html',
      controller: 'TemplateController',
      controllerAs: 'ctrl'
    });

  $urlRouterProvider.otherwise('/');
}
