import { browser, element, by, By } from 'protractor';

describe('Movie Search E2E Tests', function () {

  let expectedMsg = 'Search for a Movie';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    element(by.className('searchTitle')).getText().then((text: string) => {
      expect(text).toEqual(expectedMsg);
    });
  });

});
