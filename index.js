const express = require("express");
const shortid = require("shortid");

const server = express();

server.use(express.json());

const PORT = 5000;

const channels = [];
const lessons = [];

server.get("/", (req, res) => {
  res.json({ hello: "world" });
});

server.get("/hello", (req, res) => {
  res.json({ hello: "future senior software developer" });
});

server.post("/api/channels", (req, res) => {
  const channelInfo = req.body;
  channelInfo.id = shortid.generate();
  channels.push(channelInfo);
  res.status(201).json(channelInfo);
});

server.post("/api/lessons", (req, res) => {
  const lessonInfo = req.body;
  lessonInfo.id = shortid.generate();
  lessons.push(lessonInfo);
  res.status(201).json(lessonInfo);
});

server.listen(5000, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT}`);
});
