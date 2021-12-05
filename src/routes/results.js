import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const votes = req.app.locals.votes;

  res.send("Szavazatok: " + votes.join(" "));
});

export default router;
