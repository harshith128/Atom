const express = require("express");

const app = express();
app.use(express.json());
const router = express.Router();

const cors = require('cors');
app.use(cors());
app.options('*', cors());

const projectController = require("./controllers/project.controller");
const { signUp, login } = require("./controllers/user.controller");

app.use("/projects", projectController);

app.post("/signup", signUp);
app.post("/login", login);

module.exports = app;