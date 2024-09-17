const express = require("express");
const db = require("../db/queries");

const indexRouter = express.Router();

indexRouter.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message-Board", messages: messages });
});

module.exports = indexRouter;
