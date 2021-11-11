import express from "express";
const router = express.Router();
import healthRouter from "./health.router";

router.use("/healthcheck", healthRouter);

export default router;
