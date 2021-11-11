import express from "express";
import dotenv from "dotenv";
import index from "./routes/index.js";
import { errorHandler } from "./middlewares/error.middleware";

dotenv.config();
const app = express();

app.use(errorHandler);

app.use("/api", index);

app.use(function (req, res) {
  res.status(404).json({ status: 404, message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
