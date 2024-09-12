const express = require("express");
const messages = require("../db/messages");

const indexRouter = express.Router();

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Message-Board", messages: messages })
);

module.exports = indexRouter;
