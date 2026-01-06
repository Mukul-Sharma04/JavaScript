// Question 1: Sum of Digits

// Ek number lo (for example 12345) aur uske digits ka sum nikalne ka program banao.
// Example: 1 + 2 + 3 + 4 + 5 = 15

// Solution:
// let num = 12345;
// let result = 0;
// while(num > 0){ 
//     let rem = num % 10; //5
//     result = result + rem;
//     num = Math.floor(num / 10);
// }
// console.log(result);


//  Question 2: Reverse a Number

// Ek number lo (e.g. 9876) aur uska reverse print karo.
//  Output: 6789

// Solution:
// let num = 9876;
// let result = 0;
// while(num > 0){
//     let rem = num % 10;
//     result = result * 10 + rem;
//     num = Math.floor(num / 10);
// }
// console.log(result);

// Question 3: Count Digits in a Number

// Ek number lo (e.g. 7589) aur kitne digits hain wo count karo.
//  Output: 4

// Solution:
// let num = 7589;
// let count = 0;
// while(num > 0){
//     num = Math.floor(num / 10);
//     count = count + 1;
// }
// console.log(count);


// Question 4: Palindrome Check

// Check karo ki koi number palindrome hai ya nahi.
// Example: 121 → Palindrome
// Example: 123 → Not palindrome

// Solution:
// let num = Number(prompt("Enter the number")); //prompt string deta hai isliye number se convert karo
// let OriginalNum = num;
// let rev = 0;
// while(num > 0){
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
// }
// if(OriginalNum === rev){
//     console.log("The number is palindrome");
// }
// else{
//     console.log("The number is not palindrome");
// }


// Question 5: Sum of even and odd numbers (1–100)
// Solution:

