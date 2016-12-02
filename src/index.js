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
 //import { AppComponent } from './app/app.component';

export const app = 'app';

angular
  .module(app, ['ui.router',AppModule,angularMaterial])
  .config(routesConfig)
  .run(() => {
   console.log(`Starting the 'starter-app' module`);
 });
  //  .component('app', AppComponent)
  // .component('app', hello)
//https://julienrenaux.fr/2015/05/05/creating-an-application-with-angularjs-1-4-ecmascript-6-material-design-and-webpack/
