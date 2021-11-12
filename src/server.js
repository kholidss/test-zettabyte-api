import express from "express";
import dotenv from "dotenv";
import index from "./routes/index.js";
import { errorHandler } from "./middlewares/error.middleware";
import connectMongo from "./config/mongoconnect.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", index);
app.use(errorHandler);

app.use(function (req, res) {
  res.status(404).json({ status: 404, message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

connectMongo();
