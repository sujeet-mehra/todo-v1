const { AuthService } = require("../services");
const successResponse = require("../utils/successResponse");
const catchAsyncErros = require("../middlewares/catchAsyncErrors");

const signupController = catchAsyncErros(async (req, res, next) => {
  try {
    const user = await AuthService.signupService(req.body);
    res.status(201).json(successResponse("User created successfully", user));
  } catch (error) {
    console.error("Error in signupController:", error);
    throw error;
  }
});
const loginController = () => {};

module.exports = { signupController, loginController };
