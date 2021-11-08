/*
    Função Padrão
*/
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'Yes' : 'No'));
/*
    Arrow Function
*/
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call("R2-D2");
/*
    Parametros Padrões em TS
*/
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
