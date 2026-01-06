// Q1: print numbers from 1 to 10 using a for loop.
// Solution :
// for(let i = 1; i<= 10; i++){
//     console.log(i);
// }

// Q2 (a): print numbers from 10 to 1 using a for loop.
// Solution :
// for(let i = 10; i >=1; i--){
//     console.log(i);
// }

// Q2 (b): print numbers from 10 to 1 using while loop.
// Solution :
// let i = 10;
// while(i >=1){
//     console.log(i);
//     i--;
// }

// Q3: print even numbersfrom 1 to 20 using a for loop.
// Solution :
// for(let i = 1; i <=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// Q4: print odd numbers from 1 to 15 using a while loop.
// Solution :
// let i = 1;
// while(i <= 15){
//     if(i % 2 === 1){
//         console.log(i);
        
//     }
//     i++;
// }

// Q5: Print the multiplication table of 5(i.e., 5 * 1 =5, ... , 5 * 10 = 50). (important)
// Solution:
// for(let i = 1; i <= 10; i++){
//     console.log(`5 *  ${i} = ${5 * i}`);
// }

// Q6: Find the sum of numbers from 1 to 100 using a loop.
// Solution :
// let i = 1;
// let result = 0;
// while(i < 101){
//     result = result + i;
//     i++;
// }
// console.log(result);

// Q7: print all numbers between 1 to 50 that are divisible by 3.
// Solution:
// for(let i = 1; i <= 50; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }

// Q8: Ask the user for a number and print whether each number from 1 to that number is even or odd.
// Solution: 
// let val = prompt("give a number"); {for taking input from user}

// for(let i = 1; i <= val; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is an even number`);
//     }
//     else{
//         console.log(`${i} is an odd number.`);
//     }
// }

// Q9: count how many numbers from 1 to 100 are divisible by both 3 and 5.
// Solution:
// let count = 0;
// for(let i =  1; i <= 100; i++){
//     if(i%3 === 0 && i%5 ===0){
//         count = count + 1;
//     }
// }
// console.log(count);

// Q10: Write a loop from 1 to 20 and skip multiples of 3.
// Solution:
for(let i = 1; i <=20; i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}