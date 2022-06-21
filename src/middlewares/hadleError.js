const handleError = (error, __req, res, __next) => {
  res.status(error.status).json({ message: error.message });
};

module.exports = handleError;