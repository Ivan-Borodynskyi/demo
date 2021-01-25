const EC = protractor.ExpectedConditions;
class HomePage {
    constructor() {

        let login_btn = element(by.className("header-topline__user-link button--link"));
        let login_field = element(by.id("auth_email"));
        let pass_field = element(by.id("auth_pass"));
        let submit_btn = element(by.css(".auth-modal__submit"));
        let search_field = element(by.name("search"));
        let search_btn = element(by.css(".search-form__submit"));
        let loggedUserName = element(by.css(".header-topline__user-link"))

        this.get = async (url) => {
            return browser.get(url);
        };

        this.getBrowserTitle = async () => {
            await browser.wait(EC.visibilityOf(login_btn))
            return browser.getTitle();
        };

        this.loggedUser = async () => {
            await browser.wait(EC.visibilityOf(loggedUserName))
            return await loggedUserName.getText();
        };

        this.clickLogin = async () => {
            await login_btn.click();
        };

        this.enterLogin = async (login) => {
            await login_field.sendKeys(login)
        };

        this.enterPassword = async (password) => {
            await pass_field.sendKeys(password)
        };

        this.clickEnter = async () => {
            await submit_btn.click();
        }
        this.searchItem = async (item) => {
            await search_field.sendKeys(item);
            await search_btn.click();
        }
    }
}

module.exports = new HomePage();
