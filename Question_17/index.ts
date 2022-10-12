// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

// Sol.

const updatedGuest: Array<String> = ['Rizwan', 'Kunza', 'Khursheed']

function invitationList(updatedGuest: Array<String>) {
  updatedGuest.forEach((element: String) => {
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

invitationList(updatedGuest)

console.log(`\nIt's sad to hear. Ms.${updatedGuest[2]} can't make to the Dinner.\n`)

updatedGuest.pop()

updatedGuest.push('Maryam')

invitationList(updatedGuest)

console.log('\n I found a bigger Dinner Table\n')

updatedGuest.unshift('Zainab')

const middleOder = Math.floor(updatedGuest.length / 2)

updatedGuest.splice(middleOder, 0, 'Fatima')

invitationList(updatedGuest)

console.log('\nI can invite only two people.\n')

while (updatedGuest.length > 2) {
  const name = updatedGuest.pop()
  name === 'Rizwan'
    ? console.log(`I am sorry I can’t invite you to dinner Mr.${name}`)
    : console.log(`I am sorry I can’t invite you to dinner Ms.${name}`)
}

updatedGuest.forEach((element) =>
  element === 'Rizwan'
    ? console.log('\nYou are still invited Mr.' + element)
    : console.log('\nYou are still invited Ms.' + element)
)

updatedGuest.pop()
updatedGuest.pop()

updatedGuest.forEach((element) => console.log('Remaining ' + element))

updatedGuest.length || console.log('\n\tEmpty List\n')
