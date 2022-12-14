// 16. More Guests: You just found a bigger dinner table, so now more space is
//     available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

const guestLists: Array<String> = ['Rizwan', 'Kunza', 'Khursheed']

function invitation(guestLists:Array<String>) {
  guestLists.forEach((element:String) => {
    element !== 'Rizwan'
      ? console.log(
          'I would like to invite you to Dinner. Will you accept my offer? Ms.' +
            element
        )
      : console.log(
          'I would like to invite you to Dinner. Will you accept my offer? Mr.' +
            element
        )
  })
}

invitation(guestLists)

console.log(`\nIt's sad to hear. Ms.${guestLists[2]} can't make to the Dinner.\n`)

guestLists.pop()

guestLists.push('Maryam')

invitation(guestLists)

console.log('\n I found a bigger Dinner Table.\n')

guestLists.unshift('Zainab')

const middle = Math.floor(guestLists.length / 2)

guestLists.splice(middle, 0, 'Fatima')

invitation(guestLists)
