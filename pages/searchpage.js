class SearchPage {
    constructor() {
        let searchResults = element.all(by.className("goods-tile__heading"));

        this.getNameFirstResult = async () => {
            return searchResults.first().getText()
        };

        this.clickOnFifthItem = async () => {
            await searchResults.get(4).click()
        }
    }
}
module.exports = new SearchPage();
