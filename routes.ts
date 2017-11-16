const express = require("express");
const nodeFetch = require("node-fetch");
const routes = express.Router();

routes.use(express.static("./"));

routes.get(/^\/$/, (req, res) => {
    const meta = { title: "home page" };
    res.render("index", { meta });
});

routes.get(/^\/([a-z]*)$/i, (req, res) => {
    const page = req.params[0];
    const meta = { title: page + " page" };
    res.render(page, { meta });
});

routes.post("/", (req, res) => {
    res.send("Got a POST request");
});

routes.put("/", (req, res) => {
    res.status(403).send("Put method not currently allowed, use GET or POST");
});

routes.delete("/", (req, res) => {
    res.status(403).send("Delete method not currently allowed, use GET  or POST");
});

routes.use(function (err, req, res, next) {
    res.status(500).render("error");
});

module.exports = routes;
