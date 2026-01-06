// What why how
// What is function? -> 

// normally agar code likh diya toh voh turant chal jaata hai

// Use Case of function -> a) agar humare pass code hai or humein voh turant nahi chalana hai toh uss case mein hum function bnayenge.
                        // b) same block of code ko brr brr use kr skte hai jisse code m repetition nh ho.

// Syntax of function:
// function func_name(parameters){
//     // code
// }

// Function Call:
// func_name();

// Example: 
// function hny(){
//     console.log("Happy New Year");
// }

// hny();

// Function declaration:
// function fnc(){
//     console.log("hey");
// }

// Function Expressions:
// let fnc = function(){
//     console.log("hey");
// }

// Fat arrow function:
// let fnc = ()=>{
//     console.log("hey");
// }


// fnc();


// Parameters v/s Arguments:-
// function dance(v1){
//     console.log(`${v1} naach raha hai`);
// }

// dance("Ghoda");
// dance("Gadha");
// dance("Sher");
// dance(12);

// function ke bracket m jo hota hai usey "parameters" bolte hai orr function call krte time jo real value aati hai unhe "arguments" kehte hai

// Default, rest, and spread parameters:-
// default:- agr koi value parameters ko nh di jaaye toh uski value hoti hai "undefined", tohh usse bachne ke liye hum parameters ko default value de dete hai. e.g.,
// function add(v1 = 0, v2 = 0){
//     console.log(v1 + v2);
// }

// add();

// Rest, and Spread parameters: jab arguments bhot saare ho tohh humein utne hi parameter bnane pdenge, isse bachne ke liye hum rest ka use krte hai ... e.g.,
// function abcd(...val){
//     console.log(val);
// }

// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Rest v/s Spread Parameters:- agar ... function ke parameter space mein lage toh voh rest parameter hai and agar vohh arrays and objects mein lage wo spread parameter hai


// Return Values and Early returns:-
// return matlab jaha se aaya hai wahi daal denge, return hamesha function ke andar se hi hoga.
// Early returns is same as in control flow.


//First Class Function-> functions ko values ki tarah treat kr skte hai
// function abcd(val, rev){
//     val();
//     rev();
// }

// abcd(function(){
//     console.log("hey");
// },
// function(){
//     console.log("bye");
// });


// Higher Order Function -> wo function hota hai jo ki return kre ek function ya fir accept kre ek function apne parameter mein.
// e.g., Uppar wle example m abcd ek high order function hai, orr
// function abcd(){
//     return function(){
//         console.log("hey hey");
//     }
// }

// abcd()();


// Pure v/s Impure functions:-
// aisa function jo ki bahaar ki value ko nh badle, wo hai pure function.
// let a = 12;
// function abcd(){
//     console.log("hehehe");
// }

// abcd();

// aisa function jo ki bahaar ki value ko badal de, wo hai impure function.
// function bcde(){
//     a++;
//     console.log(a);
// }

// bcde();


// Closure and Lexical scoping:-
// Closures-> ek function jo return kre ek or function aur return hone wla function hmesha use krega parent function ka koi variable, e.g.,
// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }

// abcd()();

// Lexical Scoping -> Function sirf apne likhne ke place (code position) ke basis par hi decide karta hai ki use kin variables ka access milega.Function apne outer scope ke variables ko dekh sakta hai,par outer scope uske inner ke variables ko nahi dekh sakta. e.g.,
// function abcd(){
//     let a = 12;
//     function defg(){
//         let b = 15;
//         function ghij(){
//             let c = 18;
//         }
//     }
// }


// IIFE(Immedialtely Invoked Function Expressions) :-
// aisa function jo likhte hi turant hi execute ho jaaye- bina alag se call kiye.
// Ye apna private scope banata hai(global pollution se bachata hai)
// (function(){
//     console.log("Hihihihi");
// })();


// Hoisting differences between declaration and expressions:-
// Hoisting -> Tum code me function ya variable ko declare hone se pehle bhi access kar sakte ho (par behavior thoda alag hota hai declaration aur expression me).

// function declaration m hoisting chalti hai lekin function expression m nhii chalti
