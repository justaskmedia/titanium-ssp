import { AppPasswordDirective } from './app-password.directive';

describe('AppPasswordDirective', () => {
  it('should create an instance', () => {
    var evt ;
    const directive = new AppPasswordDirective(evt);
    expect(directive).toBeTruthy();
  });
});
