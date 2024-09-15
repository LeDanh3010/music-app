import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import connectDatabase from "./config/DB.js";
import Cors from "./config/CORS.js";

dotenv.config();

//define app
const app = express();

//define port
const PORT = process.env.PORT || 8360;

// parse application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect database
connectDatabase();

//Cors
Cors(app);

//define routes
routes(app);

app.use((req, res) => {
  res.send("404 not found");
});

//execute server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
