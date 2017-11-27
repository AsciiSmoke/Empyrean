const express = require("express");
const nodeFetch = require("node-fetch");
const router = express.Router();

router.use(express.static("./"));

router.get(/^\/$/, (req, res) => {
    const meta = { title: "home page" };
    res.render("index.njk", { meta });
});

router.get(/^\/([a-z]*)$/i, (req, res) => {
    const page = req.params[0];
    const prettyName = page.charAt(0).toUpperCase() + page.slice(1);
    const meta = { title: prettyName };
    res.render(page + ".njk", { meta });
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

router.use(function (err, req, res, next) {
    res.status(500).render("error.njk");
});

module.exports = router;
