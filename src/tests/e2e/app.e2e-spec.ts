import { browser, element, by, By } from 'protractor';

describe('Movie Search E2E Tests', function () {

  let expectedMsg = 'Search for a Movie';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.tagName('h1')).getText()).toEqual(expectedMsg);
  });

});
