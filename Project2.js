// // // // // // let length = 10
// // // // // // let width = 12

// // // // // // function Area(l, w){
// // // // // //    return l * w;
// // // // // // }

// // // // // // let result = Area ( length, width)

// // // // // // console.log(result)

// // // // // // const greet = ( ) => {

// // // // // //     console.log("hello")
// // // // // // }

// // // // // let Member = false
// // // // // let cart = [100, 20, 10, 52]
// // // // // let sum = 0; 
// // // // // let discount = 0;;
// // // // // let price;

// // // // // function TotalAmount( sum, discount , price, member)
// // // // // {
// // // // //     for(let i = 0; i < cart.length; i++)
// // // // //     {
// // // // //         sum = cart[i] + sum
        
// // // // //     }
// // // // //     price = sum
// // // // //     if (member && price >= 20 ){
// // // // //         discount = sum * 0.10
// // // // //     }
// // // // //     else if(!member && price >= 50){ discount = sum * 0.05}
// // // // //     price = sum - discount
// // // // //     let result = price
// // // // //    console.log(result)
// // // // // }

// // // // // TotalAmount(sum, discount, price, Member)

// // // // const prices = [1200, 3500, 400, 950];
// // // // let total = 0;
// // // // prices.forEach((price) => {
// // // //     total += price;
// // // // });
// // // // console.log(total);

// // // let accountBalance = 100000;
// // // let continueWithdrawal = true;

// // // while (continueWithdrawal && accountBalance > 0) {

// // //     let input = prompt(`Enter the amount to withdraw: `);
// // // if (input === null) {
// // //     break;
// // // }

// // // let withdrawAmount = Number(input);

// // // if (withdrawAmount <= 0 || !Number.isFinite(withdrawAmount))
// // // {
// // //     alert("Invalid withdrawal amount. Please enter a valid positive number.")
    
// // // }
// // // else if (withdrawAmount < 0){
// // //     console.log(`Insufficient funds: ${accountBalance}`)
// // // }

// // // else if (withdrawAmount% 1000 !== 0){
// // //     alert("Invalid withdrawal amount. Please enter a multiple of 1000.")
// // // }

// // // else if (withdrawAmount > accountBalance){
// // //     alert("Insufficient funds!");
// // //     break;
// // // }

// // // else {
// // //     accountBalnce = accountBalnce - withdrawAmount;

// // //     alert()
// // // }
// // // }


// // let accountBalance = 100000;
// // let withdrawAmount = 20000;

// // if (withdrawAmount <= 0) {
// //     console.log("Please enter a valid withdrawal amount.");
// // }
// // else if (withdrawAmount > accountBalance) {
// //     console.log("Insufficient funds.");
// // }
// // else if (withdrawAmount % 1000 !== 0) {
// //     console.log("Withdrawal must be in multiples of 1000.");
// // }
// // else {
// //     accountBalance = accountBalance - withdrawAmount;

// //     console.log("Withdrawal successful!");
// //     console.log(`Remaining balance: ${accountBalance}`);
// // }


// let accountBalance = 100000;
// let continueWithdrawal = true;

// while (continueWithdrawal && accountBalance > 0) {

//     let input = prompt("Enter withdrawal amount:");

//     // Allow the user to cancel
//     if (input === null) {
//         break;
//     }

//     let withdrawAmount = Number(input);

//     // Check if the amount is positive
//     if (withdrawAmount <= 0 || !Number.isFinite(withdrawAmount)) {
//         alert("Please enter a valid positive amount.");
//     }

//     // Check if the amount is a multiple of 1000
//     else if (withdrawAmount % 1000 !== 0) {
//         alert("Withdrawal must be a multiple of 1000.");
//     }

//     // Check if there are sufficient funds
//     else if (withdrawAmount > accountBalance) {
//         alert("Insufficient funds!");
//         break;
//     }

//     // Process successful withdrawal
//     else {
//         accountBalance = accountBalance - withdrawAmount;

//         alert(
//             `Withdrawal successful!
//              Remaining balance: $${accountBalance}`
//         );
//     }

//     // Ask whether the user wants another withdrawal
//     if (accountBalance > 0) {
//         continueWithdrawal = confirm("Would you like to make another withdrawal?");
//     }
// }

// console.log(`ATM session ended. Final balance: $${accountBalance}`);

let Student = [100, 90, 87, 58, 76, 47, 90, 67, 96, 35 ];
let averageScore = 0;
let sumScore = 0;
let highestScore = Student[0];
let lowestScore = Student[0];
let countPass = 0;
let countFail = 0;
let grade;

function acceptItem(item)
{
    let item = prompt(`Enter Item Into List `)
    
} 

for ( let i = 0; i < Student.length ; i++)
{  
    sumScore += Student[i] 

    if( Student[i] >= highestScore)
    {
        highestScore = Student[i]
    }

    if (Student[i]<= lowestScore)
    {
        lowestScore = Student[i]
    }

    if(Student[i] >= 50)
    {
        countPass++
    }
    else {
      countFail++
    }
 
    switch(true) {
       case ( Student[i] >= 70 && Student[i] <= 100):
          grade = 'A';
          break;

       case ( Student[i] >= 60 && Student[i] <= 69):
         grade = 'B';
         break;

       case( Student[i] >= 50 && Student[i] <= 59):
         grade = 'C';
         break;

       case( Student[i] >= 45 && Student[i] <= 49):
         grade = 'D';
         break;

       case( Student[i] >= 0 && Student[i] <= 40):
         grade = 'F';
         break;

         default:
            grade = 'Invalid score'
    }

     console.log(`Student ${i + 1}: ${Student[i]} - Grade ${grade}`);
}

averageScore = sumScore / Student.length

console.log(`average = ${averageScore}`)
console.log(`highest Score = ${highestScore}`)
console.log(`lowest score = ${lowestScore}`)
console.log(`Number of student who passed ${countPass}`)
console.log(`Number of student who failed ${countFail}`)