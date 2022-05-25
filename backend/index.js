import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
//import { connection } from "mongoose.js";

const PORT = process.env.PORT || 5000;
const DB_CONECTION_URL = "";

// create an app
const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//  connect to DB
mongoose
  .connect(process.env.DB_CONECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
  )
  .catch((error) => console.log(error.message));

//Routes

app.get("/", (req, res) => {
  res.send("hompe page");
});