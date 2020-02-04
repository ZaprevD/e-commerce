const cart = require("../dbModels/cart");
const product = require("../dbModels/product");
const category = require("../dbModels/category");
const { Cart } = require("../models");

getCartItems = async (req, res) => {
    try {
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

setProductToSold = async(id) => {
    await product.update({Is_sold: true}, {
        where: {
            Id: id
        }
    }).then(() => console.log("5555")).catch(err => console.log(err));
}

addItemToCart = async(req, res) => {
    try {
        await cart.create({
            userId: req.params.Id,
            productId: req.params.productId
        }).then(() => {
             setProductToSold(req.params.productId);
            res.status(200).send("Sold")
        }).catch(err => res.status(400).send(err))
    } catch (error) {
        res.status(500).send(error.message);
    }
};


setProductForSell = async(id) => {
    await product.update({Is_sold: false}, {
        where: {
            Id: id
        }
    }).then(() => console.log("Item is available for sell now")).catch(err => console.log(err));
}

removeItemFromCart = async(req, res) => {
    try {
        cart.destroy({
            where: {
                productId: req.params.Id
            }
        }).then(() => {
            setProductForSell(req.params.Id)
            res.status(200).send("Item Deleted")
        }).catch(err => res.status(400).send(err))
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getCartItems, addItemToCart, removeItemFromCart }