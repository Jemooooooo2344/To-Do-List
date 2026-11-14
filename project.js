// // // // // // // // //

// // // // // // // // let score = [86,76,56,67,90];
// // // // // // // // let studentName = ["John Doe", "Ella Wilson", "Derrick Jones", "Sam James", "Denis Junior"];
// // // // // // // // let bool= [true, false, false, true, false];
// // // // // // // // console.log(studentName[3])
// // // // // // // // console.log(score[4])
// // // // // // // // console.log(bool[2]

// // // // // // // // )

// // // // // // // let counter = 1
// // // // // // // while(counter <= 10)
// // // // // // // {
// // // // // // //     console.log(counter)
// // // // // // //     counter++;

// // // // // // let countdown = 20
// // // // // // for(i =0; i < countdown ; i+=2)
// // // // // // {
// // // // // //     console.log(countdown - i)
// // // // // // }

// // // // // let num = 5;
// // // // // for(i = 0; i <= 10; i++)
// // // // // {
// // // // //     console.log(num + ` X ` + i + ` = ` + i * num)
// // // // // }

// // // // let list = [12, 7, 19, 24, 35, 42, 50, 34]
// // // // let evenCounter = 0;
// // // // let oddCounter = 0;
// // // // for(i =0; i <= list.length; i++)
// // // // {
// // // //     console.log(list[i])
// // // //     if(list[i]%2 === 0)
// // // //     {
// // // //         console.log(`list is even`)
// // // //         evenCounter++;
// // // //     }
// // // //     else{
// // // //         console.log(`list is odd`)
// // // //         oddCounter++;
// // // //     }
// // // // }
// // // //     console.log(`number of even numbers = ` + evenCounter);
// // // //     console.log(`number of odd numbers = ` + oddCounter);

// // // let num = [20, 34, 45, 56, 78, 89, 23];
// // // for (i = 0; i <= num.length; i++) {
// // //   if (num[i] % 2 === 0) {
// // //     console.log(num[i]);
// // //   }
// // // }

let list = [];
let keepAdding = true;

function addItemToList(item){

    while(keepAdding) {
    let item = prompt(`Enter an item to add to the list (or type 'done' to finish):`);

    if (item === null || item.toLowerCase() === 'done') {
        keepAdding = false;
    } else if (item.trim() !== "" ){
        list.push(item.trim());
    }
}
}


console.log(list);
let max = null;

for(let i = 0; i < list.length; i++) {
    if(list[i]%3 === 0){
if( max === null || list[i] > max ) {
        max = list[i];
    }
    }
}
 if(max !== null){
        console.log(`Largest number divisible by 3:`, max);
    } else {
        console.log(`None Exists`);
}

// let score = [20, 10, 27,10,15]
// let num = 5;
// let newScore = []
// // for(let i = 0; i <score.length ; i++)
// // {
// //   newScore [i] = score[i]+ num
   
// // }
// // console.log(newScore)

// score.forEach(function(score, index){
//     newScore = score + 5;
//     console.log(`new score for this ${index}: is now ${newScore}`)
// })

// let student = ["Ade", " Emeka", " Dave"]

// student.forEach(function(student, index){
    
//     newName = student + " -sco ";
//     console.log(` ${index} is also known as ${newName}`);
// });

// const greet = function(name){
//     console.log("hello " + name)
// }

// function Add(a, b){
//     sum = a + b
//     console.log(sum)
// }
// Add(5, 2)


