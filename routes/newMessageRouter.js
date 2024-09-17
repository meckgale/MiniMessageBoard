const express = require("express");
const db = require("../db/queries");

const newMessageRouter = express.Router();

newMessageRouter.get("/", (req, res) =>
  res.render("form", { title: "New Message" })
);

newMessageRouter.post("/", async (req, res) => {
  await db.insertMessage(req.body.username, req.body.message);
  res.redirect("/");
});

module.exports = newMessageRouter;
