// // const body = document.body
// // const div = document.createElement("div")
// // div.innerText = "Hello World"
// // div.textContent = "Hello World 2"


// // body.append(div)

// const div = document.querySelector( "div")

// console.log(div.textContent)
// console.log(div.innerText)

//Modifying an elements html
const body = document.body
const div = document.createElement("div")
const strong = document.createElement("strong")
div.innerHTML = "<strong> Hello World 2 </strong>"

div.append(strong)
body.append(div)