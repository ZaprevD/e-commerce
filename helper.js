const Joi = require("joi");
var jwtDecode = require('jwt-decode');
//VALIDATIONS
registerValidation = (req, res, next) => {
    const schema = Joi.object.keys({
        firstName: Joi.string().min(3).max(25).required(),
        lastName: Joi.string().min(2).max(25).required(),
        email: Joi.string().email().trim().required(),
        password: Joi.string().min(5).max(15).required()
    });
    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            let error = new Error(err.details[0].message);
            error.status = 416;
            next(error);
        } else {
            next();
        }
    })
}

validateProduct = (req, res, next) => {
    const schema = {
        desc: Joi.string().min(8).max(255).required(),
        price: Joi.number().min(2).max(999).required(),
        category: Joi.number().required()
    }
    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            let error = new Error(err.details[0].message)
            error.status = 416;
            next(error);
        } else {
            next()
        }
    })
};

isAdmin = (req, res, next) => {
    const auth = req.headers.authorization;
    let token = auth.substring(auth.indexOf(" " + 1));
    const decoded = jwtDecode(token);
    if (decoded.currentUser.Is_admin) {
        next();
    } else {
        let error = new Error("You must be admin to add new product");
        error.status = 403;
        next(error);
    }
}

module.exports = { validateProduct, registerValidation, isAdmin }