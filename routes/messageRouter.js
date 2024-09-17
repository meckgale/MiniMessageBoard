const express = require("express");
const db = require("../db/queries");

const messageRouter = express.Router();

messageRouter.get("/messages/:id", async (req, res) => {
  const message = await db.getMessageById(req.params.id);

  if (message) {
    res.render("message", { message }); // Render a new view for the individual message
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = messageRouter;
