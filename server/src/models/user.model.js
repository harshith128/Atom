const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String }
}, {
    versionKey: false,
    timestamps: true
});

userSchema.pre("save", function(next) {
    if(! this.isModified("password")) return next();

    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function(password) {
    const match = bcrypt.compareSync(password, this.password);

    return match;
}

const User = mongoose.model("users", userSchema);

module.exports = User;