const { Router } = require("express");
const authRouter = Router();
const auth = require('../../controllers/auth.controller');

authRouter.post('/signup', auth.signupController);
authRouter.post('/login', auth.loginController);

module.exports = authRouter;