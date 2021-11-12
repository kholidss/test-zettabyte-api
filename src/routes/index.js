import express from "express";
const router = express.Router();
import healthRouter from "./health.router";
import registerRouter from "./register.router";

router.use("/healthcheck", healthRouter);
router.use("/register", registerRouter);

export default router;
