

class Spacecraft { // Representa nossa "nave" basica, modelo basico.
    constructor (public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft("hyperdrive")
ship.jumpIntoHyperspace()


// Extendendo de outra classe

class MillenniumFalcon extends Spacecraft implements Containership{

    cargoContainers: number

    constructor(){
        super("hyperdrive")
        this.cargoContainers = 4
    }

    //Sobrescrevendo o método jumpIntoHyperspace
    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            //Utilizando o metodo jumpIntoHyperspace original
            super.jumpIntoHyperspace()
        }else {
            console.log("Failed to jump into hyperspace")
        }
    }
}


let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()


// criando interface
interface Containership{
    cargoContainers: number //Podemos atribuir um "?" no final do nome do atributo para tornar ele opcional.
}

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)