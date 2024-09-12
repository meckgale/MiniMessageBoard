const express = require("express");
const messages = require("../db/messages");

const newMessageRouter = express.Router();

newMessageRouter.get("/", (req, res) =>
  res.render("form", { title: "New Message" })
);

newMessageRouter.post("/", (req, res) => {
  messages.push({
    id: Date.now(), //Unique ID for each message
    user: req.body.user,
    message: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newMessageRouter;
