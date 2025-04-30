// callbacks
// it is just a function that take another function as an argument
// function doSomething (callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hi");
// }
// doSomething(sayHi);

// function judge(grade){
//     switch(true){
//         case grade == "A":
//         console.log("You got an amazing grade: ",grade);
//         break;
//         case grade == "B":
//         console.log("You got a good grade: ",grade);
//         break;
//         case grade == "C":
//         console.log("You got a normal grade: ",grade);
//         break;
//         default:
//         console.log("You got a bad grade: ",grade);
//         break;
//     }
// }
// function getGrade(score , callback){
//     let grade;
//     switch(true){
//         case score > 90:
//         grade = "A";
//         break;
//         case score > 80:
//         grade = "B";
//         break;
//         case score > 70:
//         grade = "C";
//         break;
//         default:
//         grade = "F";
//         break;
//     }
//     callback(grade);
// }
// getGrade(85,judge);

// setInterval(encourage,500);
// function encourage(){
//     console.log("you are doing great,keep going");
// }

// *****************PROMISES*******************
// when resolve ()is called , the Promise is presumed to be successful and whatever  is b/w the arrows is returned and used as input 
// let promise = new Promise (function(resolve,reject){
//     let x = 20;
//     if (x > 10){
//         resolve(x);
//     }else{
//         reject("Too low");
//     }
// });
// promise.then(
//    function(value){
//     console.log("Success:",value);
//    },
//    function(error){
//     console.log("Error:",error);
//    }
//    );

// ARROW
// const promise =new Promise((resolve, reject) => {
//     reject("Success");
// })
// .then(value => {
//     console.log(value);
//     return "we";
// })
// .then (value => {
//     console.log(value);
//     return "can";
// })
// .then (value => {
//     console.log(value);
//     return "chain";
// })
// .then (value => {
//     console.log(value);
//     return "promises";
// })
// .then (value => {
//     console.log(value);
// })
// .catch(value => {
//     console.log(value);
// })

// async and await
// function saySomething(x){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("something" + x);
//         }, 2000);
//     });
// }
// async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

// Event loop
// js is a single-threaded language.

// Call stack and callback queue
// console.log("Hi there");
// add(4,5);
// function add(x ,y){
//     return x + y;
// }
// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"),1000);
// console.log(add(4,5));
// function add(x ,y){
//     return x + y;
// }

//  console.log("Hi there");
//  setTimeout(() => console.log("Sorry I'm late"),0);
//  console.log(add(4,5));
//  function add(x ,y){
//         return x + y;
//      }