import { Containership, Spacecraft } from "./base-ships"
import { MillenniumFalcon } from "./starfighters"

import * as _ from 'lodash' //Esse metodo de importação se chama Namespace import. Assim como o Jquery tem o "$", o lodash tem um simbolo padrão para importações q é "_"


console.log(_.pad("Typescript Examples", 40, "="))

let ship = new Spacecraft("hyperdrive")
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)