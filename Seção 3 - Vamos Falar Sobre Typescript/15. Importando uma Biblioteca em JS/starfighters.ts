import { Containership, Spacecraft } from "./base-ships"

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

export { MillenniumFalcon }