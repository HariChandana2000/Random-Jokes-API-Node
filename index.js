const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Random Jokes API");
});

// Random jokes route
app.get("/api/jokes/random", async (req, res) => {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = response.data;
    res.json(joke);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching joke", error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
