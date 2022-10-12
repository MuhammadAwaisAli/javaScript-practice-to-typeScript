// 42. Great Magicians: Start with a copy of your program from Exercise 39.
//     Write a function called make_great() that modifies the array of magicians by adding
//     the phrase the Great to each magician’s name. Call show_magicians() to
//     see that the list has actually been modified.

const magiciansList: String[] = [
  'Penn and Teller',
  'Jerry Sadowitz',
  'Dynamo',
  'Apollo Robbins',
  'Derren Brown',
  'Lafayette',
]

function makeGreat(magiciansList:String[]) {
  magiciansList = magiciansList.map((element) => {
    return `The Great ${element}`
  })

  show_magiciansList(magiciansList)
}

makeGreat(magicians)

function show_magiciansList(magicians: String[]) {
  magicians.forEach((element:String) => {
    console.log(element)
  })
}
