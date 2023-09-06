const express = require("express");
const colors = require("colors");
const { log } = require("console");
const dotenv = require("dotenv").config();
const path = require("path");

// envairment veriables

const PORT = process.env.PORT || 4040;

//initionalizing express
const app = express();

//express middleweres
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static folder
app.use(express.static("public"));

//making different roots
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/menu.html"));
});

app.get("/news", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/news.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/archive.html"));
});

app.get("/location", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/location.html"));
});

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/gallery.html"));
});

app.get("/staff", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/staff.html"));
});

app.get("/reservation", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/reservation.html"));
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/form.html"));
});

app.post("/form", (req, res) => {
  res.status(202).json(req.body);
});

app.get("*", (req, res) => {
  res.send(`404 Page not found!`);
});

//listening server
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`.bgYellow.black);
});
