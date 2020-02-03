const category = require("../dbModels/category");

getAllCategories = async (req, res) => {
    try {
        const rawData = await category.findAll();
        res.status(200).send(JSON.stringify(rawData));
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getAllCategories }