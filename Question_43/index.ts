// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
//     function make_great() with a copy of the array of magicians’ names. Because the
//     original array will be unchanged, return the new array and store it in a separate array.
//     Call show_magicians() with each array to show that you have one array of the original
//     names and one array with the Great added to each magician’s name.

const listMagicians: Array<String> = [
  'Penn and Teller',
  'Jerry Sadowitz',
  'Dynamo',
  'Apollo Robbins',
  'Derren Brown',
  'Lafayette',
]

let greatMagicians:String[] = []

function make_great(listMagicians:String[]) {
  greatMagicians = listMagicians.map((element) => {
    return `The Great ${element}`
  })
}

make_great(magicians)

function show_magicians(listMagicians:String[]) {
  listMagicians.forEach((element) => {
    console.log(element)
  })
}

show_magicians(listMagicians)

console.log('\n\n')

show_magicians(greatMagicians)
