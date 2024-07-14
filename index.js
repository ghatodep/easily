// importing external libraries
import express from "express";

// creating a server
export const server = express();

server.get("/", (req, res) => {
  console.log("Welcome to Easily !");
  res.send("Hello World !");
});
