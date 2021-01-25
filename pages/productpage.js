class ProductPage {
    constructor() {
        let productPrice = element(by.css(".product-prices__big"));

        this.getProductPrice = async () => {
            return await productPrice.getText()
        };

        // string1 = given_string.replace(/\s/g, '').slice(0,-1)  should remove whitespaces and last symbol ₴
        // stringToInt = parseInt(string1); should convert to number
    }
}
module.exports = new ProductPage();
