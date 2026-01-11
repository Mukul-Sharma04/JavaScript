// localStorage -> aap ke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga (browser ka database)

//1- data store kaise krna hai :-
    // localStorage.setItem("name", "mukul");

//2- data fetch Kaise kare :-
    // let val = localStorage.getItem("name");

//3- remove kaise kare :-
    // localStorage.removeItem("name");

//4- update kaise kare :- 
    // localStorage.setItem("name", "rohit");

// localStorage m array, object store nahi kr skte hai isliye unhe string bnakr use krta hai Jiske liye JSON.stringify() ka use krte hai or jab usey aapis fetch krte hai toh humey string hi milta toh usey uski nature form m waapis laane ke liye hum JSON.parse() ka use krte hai
localStorage.setItem("friends", JSON.stringify(["rohit", "pavan", "ujjwal"]));
let fr = JSON.parse(localStorage.getItem("friends"));




// sessionStorage -> ye aapka data temporarily store krta hai matlab ki tab band hua aur data gaya
// Same hi hoti hai sab cheej as localStorage





// cookies -> yee bhi data store krta hai and aapka data browser ke cookies naam ki property m save hota hai and yee cookie concept kam data ya light data ke liye hota hai
// let ckie = document.cookie = "age=20";


