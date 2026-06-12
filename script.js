// // console.log("hello sravanthi");
// // console.log(10+6);
// // var a=10
// // var b=134.789
// // var c="sravanthi"
// // var d=false;
// // console.log(a)
// // console.log(b)
// // console.log(c)
// // console.log(d)
// // console.log(a+b)
// // console.log(a+b+c+d)
// var a=45;
// var b="45"
// //== checks the values only
// //=== checks the values  and datatypes
// //!== not operator 
// if(a==b){
//     console.log("buchi")
// } else{
//     console.log("booooooooo");
// }
// if(a===b){
//     console.log("buchi")
// } else{
//     console.log("booooooooo");
// }
// if(a!==b){
//     console.log("buchi")
// } else{
//     console.log("booooooooo");
// }
// //* multiplication
// //** power
// console.log(2*3)
// console.log(2**3)
// for(let i = 0 ; i < 10 ; i++) {
//     console.log(i)
// }
// var a = 2024
// if ((a % 4 == 0 && a % 100 != 0) || (a % 400 == 0)) {
//     console.log(a + " leap year")
// }
// else {
//     console.log(a + " not a leap year")
// }
var a = 5;
var fc = 0;
for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
        fc = fc + 1;
    }
}
if (fc == 2) {
    console.log(a + " is a prime number")
}
else {
    console.log(a + " is not a prime number")
}