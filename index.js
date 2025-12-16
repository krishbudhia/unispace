const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  res.render("index.ejs");
});

app.get("/home/option", (req, res) => {
  const club = req.query.club;
  if (club === "Tech") {
    res.render("tech");
  } else if (club === "Non-Tech") {
    res.render("nontech");
  } else if (club === "Cultural") {
    res.render("cultural");
  } else if (club === "Social") {
    res.render("social");
  } else if (club === "Chapters") {
    res.render("chapters");
  } else {
    res.send("Please choose a valid option.");
  }
});

app.get("/home/tech/gsoc", (req, res) => {
  res.render("gsoc.ejs");
});

app.listen("8080", () => {
  console.log("Server is listening to port:8080");
});
