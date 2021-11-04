const errorHandling = (err, req, res, next) => {
    res.status(err.status);
    res.render('error', {
        message: err.message,
        status: err.status
    });
};

module.exports = errorHandling;