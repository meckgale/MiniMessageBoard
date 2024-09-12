const express = require("express");
const messages = require("../db/messages");

const messageRouter = express.Router();

messageRouter.get("/messages/:id", (req, res) => {
  const messageId = parseInt(req.params.id); // Get the id from the URL
  const message = messages.find((msg) => msg.id === messageId); // Find the message by id

  if (message) {
    res.render("message", { message }); // Render a new view for the individual message
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = messageRouter;
