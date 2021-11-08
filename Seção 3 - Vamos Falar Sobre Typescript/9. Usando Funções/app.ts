
/* 
    Função Padrão
*/
let isEnoughToBeatMF = function(parsecs: number) : boolean {
    return parsecs < 12 
}

let distance = 14

console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'Yes' : 'No'}`)


/* 
    Arrow Function
*/

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call("R2-D2")


/* 
    Parametros Padrões em TS
*/

function inc(speed: number, inc: number = 1 ) : number{
    return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)