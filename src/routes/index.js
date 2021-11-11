import express from "express";
const router = express.Router();
// import adminRouter from "./admin.router";
import healthRouter from "./health.router";
// import v1 from "./v1/";

router.use("/health", healthRouter);

export default router;
