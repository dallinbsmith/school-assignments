// const originalArray = [3, 6, 8, 2]
//
// const filteredArray = originalArray.filter(number => number > 6
// )
//
//
// console.log(filteredArray);

// const originalArray = ([3,6,8,2]);
//
// const filteredArray =  originalArray.filter(object =>
//   object % 2)
//
// console.log(filteredArray);


// const fiveCharactersAndLessOnly = (["dog", "wolf", "by", "family", "eaten", "camping"])
//
// const sortedArray = fiveCharactersAndLessOnly.filter(object => object.length >5)
//
// console.log(sortedArray);


// const peopleWhoBelongToTheIlluminati = ([
//   {
//     name: "Angelina Jolie",
//     member: true
//   },{
//     name: "Eric Jones",
//     member: false
//   },{
//     name: "Paris Hilton",
//     member: true
//   },{
//     name: "Kayne West",
//     member: false
//   },{
//     name: "Bob Ziroll",
//     member: true
//   }
// ])
//
// const filteredArray = peopleWhoBelongToTheIlluminati.filter(object=> !object.member)
//
// console.log(filteredArray);




const ofAge = ([
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
])


const filteredArray = ofAge.filter(object =>
  object.age > 18
)


console.log(filteredArray);
