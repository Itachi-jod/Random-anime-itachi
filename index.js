// index.js
import express from "express";
import axios from "axios";

const app = express();

app.get("/api/random-anime", async (req, res) => {
  try {
    const response = await axios.get(
      "https://kaiz-apis.gleeze.com/api/random-anime?page=1&limit=3&apikey=7eac9dce-b646-4ad1-8148-5b58eddaa2cc"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
