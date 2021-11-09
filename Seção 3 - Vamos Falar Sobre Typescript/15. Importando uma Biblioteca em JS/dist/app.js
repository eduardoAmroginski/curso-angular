"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash"); //Esse metodo de importação se chama Namespace import. Assim como o Jquery tem o "$", o lodash tem um simbolo padrão para importações q é "_"
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft("hyperdrive");
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
