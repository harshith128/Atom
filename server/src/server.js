const app = require("./index");

const connect = require("./configs/db");

app.listen(process.env.PORT || 2357, async function() {
    try {
        await connect();
        console.log("Listening on the port", this.address().port, app.settings.env);
    } catch (error) {
        console.log("Failed to connect")
    }
})