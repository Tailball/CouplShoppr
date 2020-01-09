const notFound = (req, res, next) => {
    return res.status(404).json({
        success: false,
        reason: 'Route not found',
        route: `${req.method} ${req.protocol} ${req.path}`
    });
}

module.exports = notFound;