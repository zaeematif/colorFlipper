const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener("click", function(){
    let randomHex = '#'
    for(let i=1; i<=6; i++){
        //get random between 0-15
        const randomNumber = Math.floor(Math.random()*hex.length)
        randomHex += hex[randomNumber]
    }

    document.body.style.backgroundColor = randomHex
    color.textContent = randomHex
})