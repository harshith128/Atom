const mongoose = require("mongoose");

module.exports = (req, res) => {
    return mongoose.connect("mongodb+srv://atomteam:teamATOM1317@cluster0.p4yrc.mongodb.net/teamAtom?retryWrites=true&w=majority")
}