import express from "express";
import dotenv from "dotenv";
import index from "./routes/index.js";

dotenv.config();
const app = express();

app.use("/api", index);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
