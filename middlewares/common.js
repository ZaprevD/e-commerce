
logger = (req, res, next) => {
    console.log(`New Request! URL : ${req.url} , Method : ${req.method}`);
    next();
}


wrongRouteHandler = (req, res, next) => {
    let error = new Error("Route does not exists please try with another one");
    error.status = 404;
    next(error);
}

errorHandler = (err, req, res, next) => {
    let errObj = {
        status: err.status,
        error: {
            message: err.message
        }
    };
    res.status(err.status).json(errObj);
}

module.exports = { logger, wrongRouteHandler, errorHandler }