import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query);

  if (!req.query.mode)
    res.send(
      "Helytelen paraméter! (mode)<br />Jelenlegi mód: " +
        (req.app.locals.isActive ? "Fut" : "Áll")
    );

  if (req.query.mode === "start") {
    if (req.app.locals.isActive === true) {
      res.send("A szavazás már fut!");
    } else {
      req.app.locals.isActive = true;
      req.app.locals.votes = [0, 0, 0];
      res.send("Szavazás elindult!");
    }
  } else if (req.query.mode === "stop") {
    if (req.app.locals.isActive === false) {
      res.send("A szavazás már le van állítva!");
    } else {
      req.app.locals.isActive = false;
      res.send("Szavazás leállt!");
    }
  }
});

export default router;
