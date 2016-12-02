import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {footer} from './footer';

export const FooterModule = angular
  .module('footer', [uiRouter])
  .component('footer', footer)
  /* .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('footer', {
        url: '/footer',
        component: 'footer'
      });
    $urlRouterProvider.otherwise('/');
  })*/
  .name;
