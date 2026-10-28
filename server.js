const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let feedbacks = [];

app.post("/feedback", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Please fill all fields"
    });
  }

  feedbacks.push({ name, email, message });
  res.json({ message: "Feedback submitted successfully!" });
});

app.get("/feedback", (req, res) => {
  res.json(feedbacks);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
