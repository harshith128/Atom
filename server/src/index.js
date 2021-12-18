const express = require("express");

const app = express();
app.use(express.json());
const router = express.Router();
const { body } = require('express-validator');

const cors = require('cors');
app.use(cors());
app.options('*', cors());

const projectController = require("./controllers/project.controller");
const { signUp, login } = require("./controllers/user.controller");

app.use("/projects", projectController);

app.post("/signup",

    body('username').notEmpty().withMessage("username cannot be empty"),
    body('email').isEmail().withMessage("invalid email"),
    body('password').isLength({ min: 5 }).withMessage("password is too short"),

     signUp);

app.post("/login", login);

module.exports = app;