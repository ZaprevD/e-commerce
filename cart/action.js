const cart = require("../dbModels/cart");
const product = require("../dbModels/product");
const category = require("../dbModels/category");
const { Cart } = require("../models");

getCartItems = async (req, res) => {
    try {
        console.log(req.headers)
        cart.belongsTo(product);
        product.belongsTo(category);
        let rawData = await cart.findAll({
            where: {
                userId: req.params.Id
            },
            include: [{ model: product, required: true, include: [{ model: category, required: true }] }]
        });
        let data = JSON.stringify(rawData);
        let clearData = JSON.parse(data);
        let processedData = clearData.map(el => {
            return new Cart(el.Id, el.productId, el.product.Description, el.product.Price,
                el.product.Is_sold, el.product.category.Name);
        })
        res.status(200).json(processedData);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getCartItems }