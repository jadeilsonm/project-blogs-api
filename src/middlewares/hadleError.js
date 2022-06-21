const handleError = (error, __req, res, __next) => {
  res.status(error.status || 500).json({ message: error.message });
  console.log(error);
};

module.exports = handleError;