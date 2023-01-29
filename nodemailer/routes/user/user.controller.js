const createAsyncError = require("../../middlewares/createAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const { sendNewSellerEmail } = require("../../utils/mailer");

const newSeller = createAsyncError(async (req, res, next) => {
  sendNewSellerEmail(req.body.email, req.body.first_name, "xyx.com");
  return res.status(200).json({ message: "Please Check your Email" });
});

module.exports = { newSeller };
