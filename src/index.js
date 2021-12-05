import express from "express";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.locals.votes = [0, 0, 0];
app.locals.isActive = false;

import vote from "./routes/vote";
import results from "./routes/results";
import status from "./routes/status";

app.use("/api/vote", vote);
app.use("/api/results", results);
app.use("/api/status", status);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(6776, () => {
  console.log("Server running on port 6776");
});
