// dom.js

let text01 = document.getElementsByTagName('h3');
console.log(text01);
// for(let i = 0; i <= text01.length; i++){
//     text01.item(i).style="color: #00f;"
// }

// document.getElementsByTagName('h3').style="color: #00f;";

// 2. id
let p01 = document.getElementById('p01');
p01.style.backgroundColor="#ff0;"

// let p01 = document.getElementById('p01');
// for(i = 0; i <= text01.length; i++){
//     p01.style.backgroundColor=" #00f;"
// }

// document.getElementById("p01").style.backgroundColor="#ff0";

// 3. class
let title02 = document.getElementsByClassName('title02');
for(let i = 0; i < title02.length; i++){
    title02.item(i).style.color="#f00";
}