"use strict";
exports.__esModule = true;
exports.Spacecraft = void 0;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
//Geralmente usamos apenas um tipo/classe/interface em um arquivo, porém podemos encontrar mais tipo/classe/interface em um mesmo arquivo.
// Dar preferencia em usar um arquivo para cada tipo
