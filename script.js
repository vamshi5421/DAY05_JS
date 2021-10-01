const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindorm);

function palindorm() { 
    const word = document.querySelector(".input-text").value;

    let len = word.length;

    let start = word.substring(0, Math.floor(len/2)).toLowerCase();

    let end = word.substring(len - Math.floor(len/2)).toLowerCase();

    let flip = start.split("").reverse().join("");

    
    if(flip == end){
        result.innerHTML = `${word} is a Palindorm`;
    }else{
        result.innerHTML = `${word} is not a Palindorm`;
    }
}