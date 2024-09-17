require("dotenv").config();
const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const messageRouter = require("./routes/messageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/", messageRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
