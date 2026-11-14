// // // // // // const students = ["Amara", "Tunde", "Chioma"];

// // // // // // students.forEach(function(student){
     
// // // // // //    console.log( ` Welcome to class ${student}`)
// // // // // // })

// // // // // const prices = [1200, 3500, 400, 950];
// // // // // let total = 0;

// // // // // prices.forEach(function(price){
// // // // //     total += price
// // // // // })

// // // // // console.log(total)

// // // // const guests = ["Ali", "Blessing", "Chidi", "David"];

// // // // guests.forEach(function(guest, index){

// // // //     if(index % 2 === 0){
// // // //         console.log(`${guest} has been upgraded to VIP!`)
// // // //     }
// // // //     else{
// // // //         console.log(`${guest} has a standard ticket` )
// // // //     }
// // // // })

// // // let list = [10, 15, 22, 30, 55, 34 ]

// // // for(let i = 0; i < list.length; i++){

// // //     if(list[i] > 50)
// // //     {
// // //         break;
// // //     }
// // //     else{
// // //         console.log(`No number greater than 50 found `)
// // //     }
// // // }

// // let list = []
// // let enter = true

// // while(enter){

// //     let item = prompt(`Enter numbers into array`)

// //     if(item === null || item.toLowerCase() === "done")
// //     {
// //         enter = false;
// //     }
// //     else if(item.trim() !== "")
// //     {
// //         list.push(item.trim());
// //     }

// // }

// // let newList = []
// // let posNum = 0;
// // let negNum = 0;
// // let sum = 0;
// // let largestNum = 0;
// // let divisible = [];

// // for(let i = 0; i <  list.length; i++)
// // {
// //     if(list[i] % 2 === 0 )
// //     {
// //         newList.push(list[i])
// //         sum += Number(list[i])
// //         list.splice(i, 1);
// //         i--;
// //         continue;
// //     }
    
// //     if(list[i] > 0){
// //          posNum++;
// //     }
// //     else if(list[i] < 0){
// //         negNum++;
// //     }
 
// //     if(largestNum < list[i])
// //     {
// //         largestNum = list[i]
// //     }

// //     if(list[i] % 3 === 0 || list[i] % 5 === 0)
// //     {
// //         divisible.push(list[i]);
// //     }

// // }

// // console.log("Even numbers:", newList)
// // console.log("Remaining numbers:", list)
// // console.log(`Sum of even numbers: ${sum}`)
// // console.log(`Number of positive numbers: ${posNum}`)
// // console.log(`Number of negative numbers: ${negNum}`)
// // console.log(`Largest number: ${largestNum}`)
// // console.log(`Numbers divisible by 3 or 5: ${divisible}`)

// const Car = {
//     Brand: "Toyota ",
//     Model: 2500,
//     color: 'Black',
//     drive: () => {
//         console.log("battery at 100%, enroute at 314mph")
//     },
//     features : ["Air conditioning", "Power steering", "Anti-lock brakes", "Cruise control"] 
// }

// // [Car.drive()]
// // console.log(Car.features)

// let list = [
// {
    
//     name: "ade",
//     score: 89,
//     passed: true,
//     promoted: function() {console.log(`${this.name} is  ${this.passed}`)}
// }, 

// {
//     name: "peter",
//     score: 85,
//     passed: false,
//     promoted: function() {console.log(`${this.name} is  ${this.passed}`)}
// },

// {
//     name: "tunde",
//     score: 77,
//     passed: true,
//     promoted: function() {console.log(`${this.name} is  ${this.passed}`)}
// }];

// list[1].promoted()

// const greet = function(name){
//     console.log(`Hello ${name}`)
// }

// console.log(greet(list[2].name))
// list[2].promoted()

let rsp = [`Rock`, `Paper`, `Scissors`]
const RockPaperScissorsGame = { 

    playerScore: 0,
    computerScore: 0,
    playRound: function(playerChoice){
       
        const computerChoice = rsp[Math.floor(Math.random() * rsp.length)];

        if(playerChoice === computerChoice)
        {
            return `its a tie, both players chose ${playerChoice}`

        }
        else if ( (playerChoice === `Rock` && computerChoice === `Scissors`) 
            || ( playerChoice === `Scissors` && computerChoice === `Paper` )
            || ( playerChoice === `Paper` && computerChoice === `Rock` ))
            {
                this.playerScore++;
                return `Player 1 wins, ${playerChoice} beats ${computerChoice}`
            }
            else{
                this.computerScore++;
                return `Computer wins, ${computerChoice} beats ${playerChoice}`
            }


    },
    getwinningPlayer: function(){
        if( this.playerScore > this.computerScore)
        {
            return 'Player 1 is the winner'
        }
        else if( this.computerScore > this.playerScore)
        {
            return `Computer is the winner`
        }
        else if (this.playerScore === this.computerScore)
        {
            return `its a tie`
        }
    },
    
    resetGame: function(){
        this.playerScore = 0
        this.computerScore = 0
        
    },

    getScore: function(){
       
        return this.playerScore, this.computerScore;
    }
}

RockPaperScissorsGame.playRound("Rock");
console.log(RockPaperScissorsGame.playerScore)

RockPaperScissorsGame.playRound("Scissors")
console.log(RockPaperScissorsGame.computerScore)

RockPaperScissorsGame.playRound("Paper")
console.log(RockPaperScissorsGame.getwinningPlayer());
