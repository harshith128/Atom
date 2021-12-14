const express = require("express");

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
app.options('*', cors());

const projectController = require("./controllers/project.controller");

app.use("/projects", projectController);

module.exports = app;