// const arr = [2, 5, 100]
//
// const doubleNumbers = arr.map(function(obj){
//   return obj * 2;
// });
//
// console.log(doubleNumbers);

// var str = [233425245234232];
//
// const numbToString = str.map(function(obj) {
//   return obj.toString();
// });
//
// console.log(numbToString);

// function thisIsMyFunctio(arr){
//     return arr.map(obj => {
//       //function what am I returning;
//     })
// }

// const nameOnly = [
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },{
//     name: "Eric Jones",
//     age: 2
//   },{
//     name: "Paris Hilton",
//     age: 5
//   },{
//     name: "Kayne West",
//     age: 16
//   },{
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]
//
// const namesOnly = nameOnly.map(function(obj){
//   return obj.name;
// })
//
// console.log(namesOnly);

// const nameOnly = [
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },{
//     name: "Eric Jones",
//     age: 2
//   },{
//     name: "Paris Hilton",
//     age: 5
//   },{
//     name: "Kayne West",
//     age: 16
//   },{
//     name: "Bob Ziroll",
//     age: 100
//   }
// ];
//
//  const goToMovies = nameOnly.map(function(obj){
//    if (obj.age >=18){
//      return obj.name + " can go to the movies";
//    }else{
//      return obj.name + " can not go to the movies";
//    }
//  });
//
//  console.log(goToMovies);

const readyToPutInTheDOM = [
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
];

const answer = readyToPutInTheDOM.map(function(obj) {
  return "<h1>" + obj.name + "</h1>" + "<br>" + "<h2>" + obj.age + "</h2>";
})

console.log(answer);
