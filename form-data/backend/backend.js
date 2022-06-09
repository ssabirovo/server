// server.js
const express = require("express");
const cors = require("cors");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.json());

app.post("/upload_files", upload.array("files"), (req, res) => {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully uploaded files" });
});

app.get("/upload_files", (req, res) => {
  console.log("GET body = ", req.body);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
