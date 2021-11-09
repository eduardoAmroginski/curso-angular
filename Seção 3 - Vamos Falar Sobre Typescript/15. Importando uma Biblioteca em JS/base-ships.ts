class Spacecraft { // Representa nossa "nave" basica, modelo basico.
    constructor (public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

// criando interface
interface Containership{
    cargoContainers: number //Podemos atribuir um "?" no final do nome do atributo para tornar ele opcional.
}

export {Spacecraft, Containership}


//Geralmente usamos apenas um tipo/classe/interface em um arquivo, porém podemos encontrar mais tipo/classe/interface em um mesmo arquivo.
// Dar preferencia em usar um arquivo para cada tipo