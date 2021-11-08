/*
    Arrow Functions em TS
    Não há a necessidade de digitar as palavras function e return
*/
var ships = [{ type: 'TieFighter' }, { type: 'OrderFighter' }, { type: 'RebelFighter' }];
// Sem Arrow Function //
var tieFighters = ships.filter(function (ship) {
    return ship.type == 'TieFighter';
});
console.log(tieFighters);
// Com Arrow Function //
var ties = ships.filter(function (ship) { return ship.type == 'TieFighter'; });
console.log(ties);
