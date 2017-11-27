/// <reference types="node" />
/// <reference types="express" />

import * as express from "express";
const app = express();

const nunjucks = require('nunjucks');
const path = require("path");
const compression = require("compression");
const fs = require("fs");
const routes = require("./routes");
const port = parseInt(process.env.PORT, 10) || 3000;
const isDev = app.get('env') === 'development';

app.set('views', path.join(__dirname, "../views"));
nunjucks.configure('views', {
    autoescape: true,
    watch: isDev,
    throwOnUndefined: isDev,
    trimBlocks: !isDev,
    lstripBlocks: !isDev,
    web: {
        useCache: !isDev
    },
    express: app
});

app.disable("x-powered-by");
app.use("/node-resources", express.static(path.join(__dirname, "node-resources")));
app.use(compression());
app.use("/", routes);

app.listen(port, function () {
    console.log((isDev? "Dev": "Prod") + " app listening on port " + port + "!");
});
