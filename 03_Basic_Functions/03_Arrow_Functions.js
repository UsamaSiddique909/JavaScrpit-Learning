user ={
    name: "Usama",
    Language: "Urdu",

    all:function one(){
    console.log(`${this.name},"Welcome Back"`)
    //console.log(`${this.name}`)
}
}
user.all()

const user = {
    username: "Usama",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function One(){
//     let username = "Usama"
//     console.log(this.username);
// }

// One()

// const code = function () {
//     let username = "Usama"
//     console.log(this.username);
// }

const code =  () => {
    let username = "Usama"
    console.log(this);
}


// code()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Usama"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
