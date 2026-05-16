function errorHandler(err, _req, res, _next) {
  console.error(err);

  return res.status(err.statusCode || 500).json({
    error: err.message || 'Server error.',
  });
}

module.exports = errorHandler;
