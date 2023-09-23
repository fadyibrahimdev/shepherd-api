import express from "express";

const app = express();
const port = 3000; // You can change this to any port you prefer

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, Express with TypeScript!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
