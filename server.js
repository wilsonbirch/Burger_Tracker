// Dependencies
// =============================================================
const express = require("express");

const PORT = process.env.PORT || 1313

const app = express();

app.use(express.static("public"));

//parse request body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give server access
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`)
})