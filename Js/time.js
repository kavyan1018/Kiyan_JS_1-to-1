let a = prompt("Enter the Seconds :");

let hours = a / 3600;
let minutes = (a % 3600) / 60;
let seconds = a % 60;

document.write(hours)
document.write(minutes)
document.write(seconds)