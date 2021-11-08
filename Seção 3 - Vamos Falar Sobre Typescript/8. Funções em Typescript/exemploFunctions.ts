
/* 
    Funções normais em TS com e sem retorno 
*/
function useTheForce(name: string):void {
    console.log("Use the force, " + name)
}
console.log(useTheForce("Obi-wan Kenobi"))


let shortestRun = function(parsecs: number):boolean{
    return parsecs < 12
}
console.log(shortestRun(5))
// console.log(shortestRun("5")) Caso atribuirmos uma string na função shortestRun, o compilador indicará um erro de tipo.
