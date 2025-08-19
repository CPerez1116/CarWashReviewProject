const express = require("express");
const path = require("path"); // Node module to handle file paths

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

let reviewsContainer = [];

//serves static files from client folder
app.use(express.static(path.join(__dirname, "client")));

// Visiting http://localhost:3000 loads your index.html, CSS, and JS files in client folder.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// GET route used to retrieve reviews in Array
app.get("/reviews", (req, res) => {
  res.json(reviewsContainer);
});

// POST route for storing form submission info
app.post("/submit-review", (req, res) => {
  // extracting data from requested body by destructuring
  const { name, email, review } = req.body;

  // basic validation
  if (!name || !email || !review) {
    // status 400 Bad request is standard HTTP meaning the client sent something bad
    return res.status(400).json({ error: "Missing required fields" });
  }
  // adding object to array container and also adding timestamp
  reviewsContainer.push({ name, email, review });
  console.log("it worked");
  res.json({ message: "Review submitted!", review: { name, email, review } });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
