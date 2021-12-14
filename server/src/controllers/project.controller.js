const express = require("express");
const router = express.Router();

const { nanoid } = require("nanoid");

const Project = require("../models/project.model");

router.post("", async(req, res) => {
    try {
        let project = await Project.create({
            ...req.body,
            projectId: nanoid(8),
        });

        return res.status(201).send(project);

    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.get("", async(req, res) => {
    try {
        const projects = await Project.find().lean().exec();
        res.status(200).send({ projects });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})


module.exports = router;