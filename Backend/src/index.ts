import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const port = 4000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});