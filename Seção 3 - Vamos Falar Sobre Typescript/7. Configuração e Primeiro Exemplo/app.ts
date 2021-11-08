let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
console.log("This is episode " + episode)
episode += 1
console.log("Next episode is " + episode)

// Neste caso o tipo da variavel é any, dessa forma, aceita qualquer tipo de valor. 
// Porém o ideal é sempre "Tipar" as variaveis
let favoriteDroid
favoriteDroid = "BB-8"
// favoriteDroid = 10
console.log("My favorite droid is " + favoriteDroid)