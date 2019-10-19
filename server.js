// grab the packages we need
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const fs = require("fs");
const path = "./data.txt";

try {
  if (fs.existsSync(path)) {
    //file exists
  } else {
    fs.writeFile("data.txt", "The Notepad", function(err) {
      if (err) throw err;
    });
  }
} catch (err) {
  console.error(err);
}

app.use(express.json());

// routes will go here
app.post("/data", function(req, res) {
  const { data } = req.body;

  fs.appendFile(path, `\n${data}`, function(err) {
    if (err) {
      // append failed
      throw err;
    }
  });
  res.send("done");
});

// start the server
app.listen(port);
console.log("Server started! At http://localhost:" + port);
