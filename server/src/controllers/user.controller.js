const express = require("express");
// const router = express.Router();
const { nanoid } = require("nanoid");
var jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require("../models/user.model");

const newtoken = (user) => {
    return jwt.sign({ user }, "atom");
}

const signUp = async(req, res) => {

    let user;
    try {
        console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let finalEroor =  errors.array().map((err) => {
                return {
                    msg: err.msg,
                    param: err.param
                }
            })
            return res.status(400).json({ errors: finalEroor });
        }

        user = await User.findOne({email: req.body.email});
        if(user) {
            return res.status(400).send({message: "email found"});
        }
        
        user = await User.create({
            ...req.body,
            userId: nanoid(8),
        });

        const token = newtoken(user);

        return res.status(201).send({ user, token});
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
}

const login = async(req, res) => {
    let user;
    try {
        user = await User.findOne({email: req.body.email});
        if(!user) {
            return res.status(400).send({message: "Please check your email ot password"});
        }

        let match = user.checkPassword(req.body.password);

        if(! match) {
            return res.status(400).send({message: "Please check your email ot password"});
        }

        const token = newtoken(user);

        return res.status(201).send({ user, token});
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
}

module.exports = { signUp, login };