import { Containership, Spacecraft } from "./base-ships"
import { MillenniumFalcon } from "./starfighters"

let ship = new Spacecraft("hyperdrive")
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)