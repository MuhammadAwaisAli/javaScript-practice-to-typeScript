const personName:String = 'Muhammad Awais'

function toTitleCase(str:String) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt[0].toUpperCase() + txt.substr(1).toLowerCase()
  })
}
console.log(
  `  In Lowercase: "${personName.toLowerCase()}"
  In Uppercase: "${personName.toUpperCase()}" 
  In Titlecase: "${toTitleCase(personName)}"
  `
)
