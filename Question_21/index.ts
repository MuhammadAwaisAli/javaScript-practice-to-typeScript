// 21. They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
interface objectDeclare  {
    languages: Array<String>,
}
const object:objectDeclare = {
 languages : ['English', 'Urdu', 'Sindhi', 'Punjabi', 'Pushto']
}

console.log("Languages",object.languages)