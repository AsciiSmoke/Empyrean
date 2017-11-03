const express = require("express")
const app = express()

app.use(express.static("./"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.htm");
});

app.post("/", function (req, res) {
    res.send("Got a POST request");
});

app.put("/", function (req, res) {
    res.status(403).send("Put method not currently allowed, use GET or POST");
});

app.delete("/", function (req, res) {
    res.status(403).send("Delete method not currently allowed, use GET or POST");
});

app.listen(3000, function () {
    console.log("App listening on port 3000!");
});