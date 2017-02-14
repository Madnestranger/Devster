/* global malarkey:false, moment:false */
import '../../bower_components/bootstrap/dist/js/bootstrap.min';
import '../../bower_components/clipboard/dist/clipboard.min';

import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

import { UserFilter } from './filters/userFilter';

import { DevsterApi } from './services/api';

angular.module('testTaskDevLabs', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('API_URL', 'https://jsonplaceholder.typicode.com/')
  .config(routerConfig)
  .service('api', DevsterApi)
  .filter('userFilter', UserFilter)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective);
