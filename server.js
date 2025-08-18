const express = require("express");
const path = require("path"); // Node module to handle file paths

const app = express();
const port = 3000;

//serves static files from client folder
app.use(express.static(path.join(__dirname, "client")));

// Visiting http://localhost:3000 loads your index.html, CSS, and JS files in client folder.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
// Local storage so far
