//if else else-if
//switch case
//early  return pattern

// syntax of if else else-if:
// if(condition){

// }
// else if(condition){

// }
// else{

// }

// syntax of Switch case  :-
// switch(val){
//     case 1:
//         break;
//     case 2:
//         break;
//     case 3:
//         break;
//     default:
// }

// function getVal(val){
//     if(val < 25) return "D";
//     else if(val < 50) return "C";
//     else if(val < 75) return "B";
//     else return "A";
// }

// console.log(getVal(12));

// Q1: student marks grade:

// function getGrade(score){
//     if(score >=90 && score <= 100) return "A+";
    
//     if(score >=80 && score <90) return "A";
    
//     if(score >= 70 && score < 80) return "B";
    
//     if(score >= 60 && score < 70) return "C";
    
//     if(score >= 33 && score < 60) return "D";
    
//     if(score >= 0 && score < 33) return "Fail";
    
//     else return "Invalid Marks";
    
// }

// console.log(getGrade(101));

// Q2: rock paper scissors logic:-

// approach 1: 
// function rps(user, computer){
//     if(user == "rock" && computer =="scissor") return "user";
//     if(user == "scissor" && computer == "rock") return "computer";
//     if(user == "paper" && computer == "rock") return "user";
//     if(user == "rock" && computer == "paper") return "computer";
//     if(user == "scissor" && computer == "paper") return "user";
//     if(user == "paper" && computer == "scissor") return "computer";
//     else return "Invalid input"; 
// }

// approach 2:
function rps(user, computer){
    if(user === computer) return "draw";

    if(user === "rock" && computer === "scissor") return "user";
    if(user === "scissor" && computer === "paper") return "user";
    if(user === "paper" && computer === "rock") return "user";

    return "computer";
}

console.log(rps("paper", "paper"));