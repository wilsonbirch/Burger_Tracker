const express = require("express");
const router = express.Router();
const burger = require('../models/burger.js');


let app = express();

router.get("/", (req, res) => {
    burger.all((data) => {
        const handleBarsObj = {
            burgers: data,
        };
        //console.log(handleBarsObj);
        res.render("index", handleBarsObj);
    });
});

router.post("/api/burgers/", (req, res) => {
    let burger_name = req.body.newBurger;

    burger.insert(burger_name, function(result) {
        //Send back the ID of the new burger
        res.status(200).end();
      });
});

router.put("/api/burgers/:burger_name", (req, res) => {
    let name = req.params.burger_name;
    burger.update(name);
    res.status(200).end();
  });

module.exports = router;
