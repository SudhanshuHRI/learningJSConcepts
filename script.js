
// (function (){
//     var a = b = 3;
// })();

// console.log( typeof a)
// console.log(typeof b)

// here b=3 assigned successfully beacuse of hoisting . while declaring var a means a's scope limited to function so it is not accesible outside the function. if we use only 'a=b=3' without using var, then both values  will be accesible.

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function foo (){
//     return
//          {
//             name:"anil"
//          }
// }
// console.log(foo())

//it is required to set data in front of "return" statement. other wise it will return "undefined"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(1 + "2" + "2"); // it will give 122
// console.log(1 + +"2" + "2"); // it will take it as (1 + (+"2") + "2") // it will give 32
// console.log(1 + +"2" + +"2"); // it will give 5
// console.log(1 + -"2" + "2"); // it will give -12
// console.log("A" - "B" + "2"); // NaN2
// console.log("A" - "B" + 2); // NaN
// console.log(typeof NaN); // it will consider as number

////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// console.log({}=={}); //false  
// var a = {};
// var b = {};
// console.log(a===b); //false

// when we compare 2 variables , the will compare 2 values. when we comapre 2 objects, it will compare memory locations so it is false.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// var a = 0;

// function b(){
//     a = 10;
//     return;
//     var a = function(){}
// }
// b();
// console.log(a)//0

// beacuse when we use var inside function , this a will become scope based and become local variable. if we not use var in function b then a will become 10.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

