/* global malarkey:false, moment:false */
import '../../bower_components/bootstrap/dist/js/bootstrap.min';
import '../../bower_components/clipboard/dist/clipboard.min';

import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { UserFilter } from './filters/userFilter';

angular.module('testTaskDevLabs', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(routerConfig)
  .filter('userFilter', UserFilter)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective);
