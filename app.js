const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const compression = require('compression');
const fs = require('fs');
const routes = require("./routes");

const port = parseInt(process.env.PORT, 10) || 3000;
const app = express();

app.disable('x-powered-by');
app.use('/node-resources', express.static(path.join(__dirname, 'node-resources')));
app.use('/views', express.static(path.join(__dirname, 'views')));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(compression());
app.use('/', routes);

app.listen(port, function () {
    console.log("App listening on port " + port + "!");
});
