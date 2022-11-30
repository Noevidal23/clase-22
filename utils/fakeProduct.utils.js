const { faker } = require("@faker-js/faker");
faker.locale = "es";

const createFakeProduct = (id) => {
    return {
        id,
        producto: faker.commerce.productName(),
        precio: faker.commerce.price(),
        foto: faker.image.imageUrl()
    }
};
module.exports = {
    createFakeProduct,
};