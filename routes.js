
const express = require("express");
const nodeFetch = require("node-fetch");
const router = express.Router();

router.use(express.static("./"));

router.get(/^\/$/, (req, res) => {
    res.sendFile(__dirname + "/index.htm");
});

router.get(/^\/([a-z]*)$/i, (req, res) => {
    res.send("Got a regex request for " + req.params[0]);
});

router.post("/", (req, res) => {
    res.send("Got a POST request");
});

router.put("/", (req, res) => {
    res.status(403).send("Put method not currently allowed, use GET or POST");
});

router.delete("/", (req, res) => {
    res.status(403).send("Delete method not currently allowed, use GET  or POST");
});

module.exports = router;
