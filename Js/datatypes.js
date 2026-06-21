// var , let const 

// var a = 10;
// document.write("Value of a is :", a);
// document.write("<br>");

// let x = 20;
// document.write("Value of x is :", x);
// document.write("<br>");

// const y = 30;
// document.write("Value of y is :", y);
// document.write("<br>");


/*

    var -> function scope, can be re-declared and updated
    let -> block scope, cannot be re-declared but can be updated
    const -> block scope, cannot be re-declared and cannot be updated

*/


// uper input 

let a = prompt("Enter the value of a :");
let b = prompt("Enter the value of b :");

let sum =  parseInt(a) + parseInt(b);

document.write("The sum of a and b is :", sum);