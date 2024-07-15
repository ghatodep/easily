// importing external libraries
import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";

// creating a server
export const server = express();

// setting up ejs layouts paths and view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// application level middleware processing views
server.use(ejsLayouts);

server.use(express.static(path.resolve("public")));

server.get("/", (req, res) => {
  console.log("Welcome to Easily !");
  res.render("home-landing");
});
