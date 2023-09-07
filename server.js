const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoute");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://esha4602s:esha123@netflix.cammdup.mongodb.net/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(8000, () => {
  console.log("server started on port 8000");
});