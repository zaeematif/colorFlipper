const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//add event Listner to the button
btn.addEventListener("click", function(){
    //get random number from 0-3
    const randomNumber = Math.floor(Math.random()*colors.length)
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})


