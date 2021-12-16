const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    projectName: { type: String },
    projectId: { type: String, unique: true },
    description: { type: String },
    creator: { type: String },
    coverImage: { type: String },
    category: { type: String },
    subcategory: [{ type: String }],
    tags: [{ type: String }],
    location: { type: String }
}, {
    versionKey: false,
    timestamps: true
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;