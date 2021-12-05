import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { votes, isActive } = req.app.locals;
  const { performer } = req.body;

  console.log(req.body);

  if (performer !== null) {
    if (isActive) {
      votes[performer]++;
      req.app.locals.votes = votes;

      res.json({ success: true });
    } else {
      res.json({ success: false, error: "Jelenleg nem szavazhatsz!" });
    }
  } else {
    res.json({
      success: false,
      error: "Nem adtál meg vállalkozás tokent (keresd a fejlesztőt!)",
    });
  }

  console.log(req.app.locals.votes);
});

export default router;
