// constants that is used
const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");
const PORT = 9809;
const router = express.Router();

app.use(express.json());

// cors
const cors = require('cors');
app.use(cors()); 

// controllers importing
const userController = require("../controllers/user.controller");
router.get("/route", userController.getAllUsers);
// static
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// mysql
app.get("/api/video", (req, res) => {
  con.query("SELECT * FROM hvd", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result); 
  });
});


// routes
app.get('/', (req, res) => {
  res.sendFile('Hello World!')
})


// end point
app.listen(PORT, () => {
  console.log(`Welcome CEO: Abdelrahman it is currently running on localhost:${PORT}`);
  console.log(`I LOVE YOU!!!`);
})
