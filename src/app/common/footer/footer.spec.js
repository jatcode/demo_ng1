import angular from 'angular';
import 'angular-mocks';
import {footer} from './footer';

describe('footer component', () => {
  beforeEach(() => {
    angular
      .module('footer', ['app/common/footer.html'])
      .component('footer', footer);
    angular.mock.module('footer');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<footer></footer>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
