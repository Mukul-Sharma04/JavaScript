// Input Event:-
// let inp = document.querySelector("input");

// inp.addEventListener("input", function (dets) {
//   if (dets.data !== null) {
//     console.log(dets.data);
//   }
// });

// Change Event:-
// let sel = document.querySelector("select");
// let h3 = document.querySelector("h3");

// sel.addEventListener("change", function(dets){
//     h3.textContent = `${dets.target.value} Device Selected`;
// })

// question:-
// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function (dets) {
//   // console.log(dets.key); Used for understanding only not in the code
//   if (dets.key === " ") {
//     h1.textContent = "space";
//   }
//   else {
//     h1.textContent = `${dets.key}`;
//   }
// });

// Question:-
// let Btn = document.querySelector("#btn");
// let inpfile = document.querySelector("input");

// Btn.addEventListener("click", function(){
//     inpfile.click();
// })

// inpfile.addEventListener("change", function(dets){
//     // Btn.textContent = dets.target.files[0].name;

//     // Break code in two different lines
//     const file = dets.target.files[0];
//     if(file){
//         Btn.textContent = file.name;
//     }

// })

// Submit Event:-
// it is IMPORTANT, Try yourself one time
// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function (dets) {
//   dets.preventDefault();

//   let card = document.createElement("div");
//   card.classList.add("card");

//   let profile = document.createElement("div");
//   profile.classList.add("profile");

//   let img = document.createElement("img");
//   img.setAttribute("src", inputs[0].value);

//   let h3 = document.createElement("h3");
//   h3.textContent = inputs[1].value;
//   let h5 = document.createElement("h5");
//   h5.textContent = inputs[2].value;
//   let p = document.createElement("p");
//   p.textContent = inputs[3].value;

//   profile.appendChild(img);
//   card.appendChild(profile);
//   card.appendChild(h3);
//   card.appendChild(h5);
//   card.appendChild(p);

//   main.appendChild(card);

//   inputs.forEach(function (inp) {
//     if (inp.type !== "submit") {
//       inp.value = "";
//     }
//   });
// });

// mouseover, mouseout :-

// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover", function(){
//     abcd.style.backgroundColor = "yellow";
// })

// abcd.addEventListener("mouseout", function () {
//   abcd.style.backgroundColor = "red";
// });

// mousemove:-
// let abcd = document.querySelector("#abcd");

// window.addEventListener("mousemove", function(dets){
//     abcd.style.top = dets.clientY + "px";
//     abcd.style.left = dets.clientX + "px";
//  })

// keyup :- Study on your own

// Event Bubbling :-
// jispe event aayega agar us par listener nai hua toh humara event uske parent par listener dhundega aur aisa krte krte uppar ki trf move krega

// let ul = document.querySelector("ul");

// ul.addEventListener("click", function(dets){
//     dets.target.classList.toggle("lt");
// })

// Event Capturing:-


// Practice 1:-
let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(){
    let left = 20 - inp.value.length;
    span.textContent = left;
    if(left < 0){
        span.style.color = "red";
    }
    else{    
        span.style.color = "white";
    }
})