const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)
let newNumbersArray = [];
const newNums = myNumers.forEach((items) => {
  const updatedItem = items + 1;
  newNumbersArray.push(updatedItem);
});
//console.log(newNumbersArray)

const arr = [
  {
    Id: 1,
    name: "Usama",
    email: "usama@mail.com",
  },
  {
    Id: 1,
    name: "Usama",
    email: "usama@mail.com",
  },
  {
    Id: 2,
    name: "ali",
    email: "ali@mail.com",
  },
  {
    Id: 3,
    name: "raza",
    email: "raza@mail.com",
  },
];

// const newarr = function removedata(data) {
//     return data.reduce((acc,curr)=> acc.includes(curr)? acc:[...acc,curr],[])
//     }
// console.log(newarr(arr))

// arr.forEach(items => {
//     if(items.name===){
//         console.log(items)
//

//});

arr.reduce((acc, items) => {

  if (acc !== undefined && acc?.Id === items?.Id) {
    const index = arr.findIndex((rec) => rec.Id === items.Id);
    arr.splice(index, 1);
  }
});
console.log(arr);
