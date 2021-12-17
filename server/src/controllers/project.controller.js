const express = require("express");
const router = express.Router();

const { nanoid } = require("nanoid");

const Project = require("../models/project.model");

router.get("/category", async(req, res) => {
    try {
        const projects = await Project.find({category: req.query.category}).lean().exec();
        res.status(200).send({ projects });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.get("/subcategory", async(req, res) => {
    try {
        // const projects = await Project.find({subcategory: req.query.subcategory}).lean().exec();
        const projects = await Project.aggregate([
            {$match: {subcategory: req.query.subcategory}},
            {$sample: {size: 3}}
          ]);
        res.status(200).send({ projects });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.get("/random", async(req, res) => {
    try {
        const projects = await Project.aggregate([{$sample: {size: 5}}]);
        res.status(200).send({ projects });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.get("/recommended", async(req, res) => {
    try {
        const projects = await Project.aggregate([{$sample: {size: 9}}]);
        res.status(200).send({ projects });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.get("/discovermore", async(req, res) => {
    try {
        const projects = await Project.aggregate([{$sample: {size: 8}}]);
        res.status(200).send({ projects });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

router.get("/featured", async(req, res) => {
    try {
        const projects = await Project.aggregate([{$sample: {size: 1}}]);
        res.status(200).send({ projects });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

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
    const page = +req.query.page || 1;
    const size = 3;
    const offset = (page - 1) * size;
    try {
        const projects = await Project.find().skip(offset).limit(size).lean().exec();
        const total = Math.ceil((await Project.find().countDocuments().lean().exec() ) / size);
        res.status(200).send({ projects, total });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})


module.exports = router;