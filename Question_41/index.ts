// 41. Magicians: Make a array of magician’s names. Pass the array to a function
//     called show_magicians(), which prints the name of each magician in the array.

const magicians: Array<String> = [
  'Penn and Teller',
  'Jerry Sadowitz',
  'Dynamo',
  'Apollo Robbins',
  'Derren Brown',
  'The Great Lafayette',
]

function showMagicians(magicians: String[]) {
  magicians.forEach((element) => {
    console.log(element)
  })
}

showMagicians(magicians)
