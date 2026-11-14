// // const item = document.getElementById("title");
// // console.dir(document);

// // document.title = "My Website";
// // document.body.style.backgroundColor = "lightblue";

// // const username = "Joshua";
// // const title = document.getElementById("title");

// // // title.textContent = `Hello ${username}, Welcome to my website!`;

// // // const title = document.getElementsByName("h2")

// // // console.log(title[0].innerHTML)

// // // const element = document.querySelector("h2");

// // // console.log(element.innerHTML);

// // document.getElementById("timer").innerHTML = " 30.00";

// // let box = document.querySelector(".box");

// // function turnon() {
// //   box.computedStyleMap.backgroundColor = "green";
// // }

// // const timerDisplay = document.getElementById("timer");
// // // let timeleft = 30.00;


// // const button = document.querySelector("dif");

// // button.addEventListener("click", () => {
// //   if (mode === 0) {
// //     mode = 1;
// //     star;
// //   }
// // });

// // function startTimer() {
// //   clearInterval(timeInterval);
// //   timerleft = 30.0;
// //   timerDisplay.textContent = timerleft;

// //   timerInterval = setInterval(() => {
// //     timerleft--;
// //     timerDisplay.textContent = timerleft;

// //     if (timerleft <= 0) {
// //       turnOff;
// //     }
// //   }, 1000);
// // }


// const button = document.getElementById("button");
// const timerDisplay = document.getElementById("timer");

// const btns = document.querySelectorAll(".btn");

// console.log(btns);


const timerDisplay = document.getElementById('timer');
const box = document.getElementById('screen');

const btnOn = document.getElementById('button');
const btnDisco = document.getElementById('disco');
const btnOff = document.getElementById('off');

let countdown;
let timeLeft = 30;

// ON BUTTON
function startTimer() {

    clearInterval(countdown);

      box.classList.remove('disco-active');
      
    countdown = setInterval(function() {

        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        } else {
            clearInterval(countdown);
            alert("Time's up!");
        }

    }, 1000);
}

// DISCO BUTTON
function startDisco() {
    clearInterval(countdown);
    box.classList.add('disco-active');
}

// OFF BUTTON
function resetTimer() {
    clearInterval(countdown);

    box.classList.remove('disco-active');

    timeLeft = 30;
    timerDisplay.textContent = timeLeft;
}

// EVENT LISTENERS
btnOn.addEventListener('click', startTimer);
btnDisco.addEventListener('click', startDisco);
btnOff.addEventListener('click', resetTimer);
