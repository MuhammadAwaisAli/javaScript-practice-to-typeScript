// 45. Cars: Write a function that stores information about a car in a Object.
//     The function should always receive a manufacturer and a model name. It
//     should then accept an arbitrary number of keyword arguments. Call the function
//     with the required information and two other name-value pairs, such as a
//     color or an optional feature.
//     Print the Object that’s returned to make sure all the information was
//     stored correctly.
interface carObject {
  manufacturer?: String,
  model?: String,
  keyword?: String,
  color?: String,
  door?: String,
}
function store_info():carObject {
  let car:carObject = {}

  let manufacturerAdded: Boolean = false,
    modelAdded: Boolean = false,
    keywordAdded:Boolean = false

  const prompt = require('prompt-sync')({ sigint: true })

  while (!manufacturerAdded) {
    const manufacturer = prompt('Enter Manufacturer Name?')
    console.log(manufacturer);
    if (manufacturer) {
      manufacturerAdded = true
    }
    car = { ...car, manufacturer }
  }

  while (!modelAdded) {
    const model:String = prompt('Enter Model Name?')
    if (model) {
      modelAdded = true
    }
    car = { ...car, model }
  }

  while (!keywordAdded) {
    const keyword:String = prompt('Enter keyword?')
    if (keyword) {
      keywordAdded = true
    }
    car = { ...car, keyword }
  }

  const color:string = prompt('Enter color?')
  const door:String = prompt('Enter door?')

  car = { ...car, color, door }

  return car;
}

let objectCar: carObject = store_info();
console.log("Car:::",objectCar)
