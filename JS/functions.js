'use strict'

let rand_num1 = 0
let rand_num2 = 0

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
});

Document.querySelector('button').addEventListener('click',() => {
    const awnser = Number(document.querySelector('input').value)
    const correctAwnser = rand_num1 + rand_num2
    if (awnser === correctAwnser) {
        alert('Correct!')
    } else {
    alert('Incorrect!')
    }

    randomizeNumbers()
    document.querySelector('input').value=''
})