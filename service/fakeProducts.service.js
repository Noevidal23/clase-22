const { createFakeProduct } = require("../utils/fakeProduct.utils");

class createProducts {

    items = []
    constructor() { }
    getProducts(qty = 5) {
        for (let i = 1; i <= qty; i++) {
            const fakeProduct = createFakeProduct(i)
            console.log(fakeProduct);
            this.items.push(fakeProduct)
        }

        return this.items
    }

}

module.exports = createProducts;