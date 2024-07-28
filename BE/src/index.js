import express from "express";
import dotenv from "dotenv";

dotenv.config();

//define app
const app = express();

//define port
const PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("404 not found");
});

//execute server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
