
var button = document.querySelector(".btn")
var body= document.querySelector("body")
var colors= ["yellow", "green", "red","blue", "white"]
body.style.backgroundColor = "yellow"

button.addEventListener("click", function () { 
var newColors = colors[ Math.floor(Math.random() * colors.length)]
var body= document.querySelector("body")
body.style.backgroundColor = newColors;
})




