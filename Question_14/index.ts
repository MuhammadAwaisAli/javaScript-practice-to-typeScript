const guest:String[] = ['Ali', 'Awais', 'Hammad Dar', 'Wasif Ali', 'SHAH']

guest.forEach((element:String, index:Number) => {
  index
    ? console.log(
        'I would like to invite you to dinner. Will you accept my offer? Ms.' +
          element
      )
    : console.log(
        'I would like to invite you to dinner. Will you accept my offer? Mr.' +
          element
      )
})
