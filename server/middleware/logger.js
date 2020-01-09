const log = (req, res, next) => {
    console.log(`${req.ip} -> ${req.method} : ${req.protocol} -> ${req.path}`);
    next();
}

module.exports = log;