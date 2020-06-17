// grab the packages we need
const express = require("express");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const shortid = require("shortid");

const db = lowDb(new FileSync("db.json"));

db.defaults({ notes: [] }).write();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/notes", (req, res) => {
  const data = db.get("notes").value();
  return res.json(data);
});

app.get("/notes/:id", (req, res) => {
  const { id } = req.params;
  const data = db.get("notes").find({ id }).value();
  return res.json(data);
});

app.post("/notes", (req, res) => {
  const { text } = req.body;
  db.get("notes")
    .push({
      text,
      id: shortid.generate(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .write();
  res.json({ success: true });
});

app.patch("/notes/:id", (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  db.get("notes").find({ id }).assign({ text, updatedAt: new Date() }).write();
  res.json({ success: true });
});

app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  db.get("notes").remove({ id }).write();
  res.json({ success: true });
});

// start the server
app.listen(PORT);
console.log("Server started! At http://localhost:" + PORT);
