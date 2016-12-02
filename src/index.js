import angular from 'angular';
import 'angular-ui-router';
import routesConfig from './routes';

import 'angular-animate';
import 'angular-aria';
import 'angular-material/angular-material.css';
import angularMaterial from 'angular-material';

import './index.scss';

//import {hello} from './app/hello';
import {CommonModule} from './app/common/common.module';
import  {AppModule}  from './app/app.module';

export const app = 'app';

angular
  .module(app, ['ui.router',AppModule,angularMaterial])
  .config(routesConfig)
  .run(() => {
   console.log(`Starting  ${app} module`);
 });
  
//https://julienrenaux.fr/2015/05/05/creating-an-application-with-angularjs-1-4-ecmascript-6-material-design-and-webpack/
