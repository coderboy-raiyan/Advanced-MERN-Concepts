const createAsyncError = require("../../middlewares/createAsyncError");
const ErrorHandler = require("../../utils/errorHandler");

const newSeller = createAsyncError(async (req, res, next) => {
  return next(new ErrorHandler("newSeller is sleeping", 402));
});

module.exports = { newSeller };
