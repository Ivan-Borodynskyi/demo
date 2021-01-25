let HomePage = require('../pages/homepage');
let SearchPage = require('../pages/searchpage');
let ProductPage = require('../pages/productpage');
let data = require('./testdata/testdata.json');

describe('Rozetka Demo Tests', () => {
  beforeEach(async () => {
    browser.waitForAngularEnabled(false)
    await HomePage.get(data.url);
  });

  it('should have a title', async () => {
    expect(await HomePage.getBrowserTitle()).toEqual(data.title)
  });

  it('should login success', async () => {
    await HomePage.clickLogin();
    await HomePage.enterLogin(data.email);
    await HomePage.enterPassword(data.password);
    await HomePage.clickEnter();
    expect(await HomePage.loggedUser()).toEqual(data.username)
  });

  it('search for some product', async () => {
    await HomePage.searchItem(data.searchedItem);
    expect(await SearchPage.getNameFirstResult()).toContain(data.searchedItem)
  });

  xit('click on 5 product andverify if price<10000', async () => {
    await HomePage.searchItem(data.searchedItem);
    await SearchPage.clickOnFifthItem();
    expect(await ProductPage.getProductPrice()).toBeLessThan(10000)
  });
});


