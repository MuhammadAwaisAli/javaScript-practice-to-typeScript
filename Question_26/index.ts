// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
//     write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

const alienColor:String = 'green'
const promptInCli = require('prompt-sync')({ sigint: true })
console.log(
  'Guess Alien Color from the following? \n 1.Red \n 2.Yellow \n 3.Green\n'
)
const questAlien = promptInCli('Answer: ')
console.log(`Hey there you're questAlien is ${questAlien}!\n`)
if (questAlien.toLowerCase().trim() == alienColor) {
  console.log('You got 5 points')
} else if (questAlien.toLowerCase().trim() != alienColor) {
  console.log('You got 10 points')
}
