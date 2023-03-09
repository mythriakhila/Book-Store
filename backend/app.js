const express = require("express");

const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/scripts',router)


mongoose.connect("mongodb+srv://akhila:akhila123@cluster0.ie6jvji.mongodb.net/?retryWrites=true&w=majority").then(
  () =>console.log("DB connected")
)
app.listen(1800,() =>console.log("port running at 1800"));