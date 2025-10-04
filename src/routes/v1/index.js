const { Router } = require("express");
const router = Router();
const authRouter = require("./auth.route");
const todoRouter = require("./todo.route");

router.use("/auth", authRouter);
router.use("/todo", todoRouter);

module.exports = router;