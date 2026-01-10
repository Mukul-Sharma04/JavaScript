// setTimeout, setInterval, clearTimeout, clearInterval

// setTimeout - ek brr chalega kch time ke bdd
// let tm = setTimeout(function(){
//     console.log("hey");
// }, 5000);

// clearTimeout(tm);



// setInterval - Brr brr chalega same time duration pr
// let si = setInterval(function(){
//     // count --;
//     console.log("hello");
// }, 5000);

// clearInterval(si);

// Example:-
// let count = 10;

// let interval = setInterval(()=>{
//     if(count >= 1){
//         console.log(count);
//         count--;
//     }
//     else{
//         clearInterval(interval);
//     }
// }, 2000)


// Implication in real world (download percent):
let count= 0;
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector(".percent");

let intv = setInterval(()=>{
    if(count <= 99){
        count++;
        progress.style.width = `${count}%`;
        percentText.textContent = `${count}%`
    }
    else{
        document.querySelector("h2").textContent = "Downloaded!";
        clearInterval(intv);
    }
}, 80);

// Auto hide delete banner after 3 seconds: