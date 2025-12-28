const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Home API
app.get("/", (req, res) => {
  res.send("🚀 Node.js application deployed on EC2 from Git repository!");
});

// Health check API
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    time: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
