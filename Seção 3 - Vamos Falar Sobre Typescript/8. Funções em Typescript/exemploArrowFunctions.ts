/*
    Arrow Functions em TS 
    Não há a necessidade de digitar as palavras function e return
*/

let ships = [{type: 'TieFighter'}, {type: 'OrderFighter'}, {type: 'RebelFighter'}]

// Sem Arrow Function //
let tieFighters = ships.filter(function(ship){
    return ship.type == 'TieFighter'
})
console.log(tieFighters)

// Com Arrow Function //
let ties = ships.filter(ship => ship.type == 'TieFighter')
console.log(ties)