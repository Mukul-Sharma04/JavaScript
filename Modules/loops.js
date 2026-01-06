// repeat krne ko loop kehte hh
//for while do-while forin forof foreach
// types of repetition: 1 1 1 1 1 1 1 1 1  and 1 2 3 4 5 6 7 8
// There are two types of scenarios while making a loop:
// Scenario 1: Kaha se jaana hai, kaha tak jaana hai, kaise jaana hai -> for loop
// Scenario 2: kaha se jaana hai, kab rukna hai, kaise jaana hai -> while loop

// for loop:
// syntax:-
// for(start; end; change){

// }

// for(let i = 1; i <= 100; i++){
//     console.log(i);
// }

// while loop:
// Syntax:-
// start
// while(end){
//     //code
//     change
// }

// let i = 1;
// while (i < 33) {
//   //code
//   console.log(i);
//   i++;
// }

//do-while loop:
// do ek brr jrur chalega chahe condition wrong hi kyu nh ho
// Syntax:
// do{

// }
// while(end)

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }
// while(i < 45)


// break - continue :
// for(let i = 1; i<201; i++){
//     console.log(i);
//     if(i === 32){
//         break;
//     }
// }


for(let i = 1; i<201; i++){
    if(i ===32){
        continue;
    }
    console.log(i); 
}