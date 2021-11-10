import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.get("/", (req, res, next) => {
  res.json({ message: "from index api" });
});

app.listen(parseInt(process.env.PORT), () => {
  console.log(`Server is running on port ${parseInt(process.env.PORT)}`);
});
