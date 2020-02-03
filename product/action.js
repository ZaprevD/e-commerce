const product = require("../dbModels/product");
const category = require("../dbModels/category");
const { Product } = require("../models");

getAllProducts = async (req, res) => {
    try {
        let resolvedData;
        product.belongsTo(category);
        const products = await product.findAll({
            include: [{ model: category, required: true }]
        });
        const rawData = JSON.stringify(products);
        const clearData = JSON.parse(rawData);
        resolvedData = clearData.map(el => {
            return new Product(el.Id, el.Description, el.Price, el.Is_sold, el.categoryId, el.category.Name)
        })
        res.status(200).send(resolvedData);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

addProduct = async (req, res) => {
    try {
     await  product.create({
            Description: req.body.desc,
            Price: req.body.price,
            categoryId: req.body.category
        }).then(() =>{
            res.status(200).send("Product added");
        }).catch(err => console.log(err))
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getAllProducts, addProduct }