const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/index");
const app = express();
const httpServer = require("http").createServer(app);

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Hello, Connected!"));
app.use("/", routes);

httpServer.listen(8080);
