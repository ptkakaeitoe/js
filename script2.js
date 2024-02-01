// // // const calcAverage = (first, second, third) => {
// // //   return (first + second + third) / 3;
// // // };

// // // let scoreDolphins = calcAverage(5, 6, 7);
// // // let scoreKoalas = calcAverage(5, 6, 8);

// // // function checkwinner(avgd, avgk) {
// // //   if (avgd > avgk) {
// // //     console.log(`dolphin win`);
// // //   } else {
// // //     console.log("dkoara win");
// // //   }
// // // }
// // // checkwinner(scoreDolphins, scoreKoalas);
// // const calcAverage = (first, second, third) => {
// //   return (first + second + third) / 3;
// // };

// // // Function to get scores from user input
// // const getScores = (teamName) => {
// //   let scores = [];
// //   for (let i = 1; i <= 3; i++) {
// //     let score = prompt(`Enter score ${i} for ${teamName}:`);
// //     scores.push(parseInt(score, 10));
// //   }
// //   return scores;
// // };

// // // Getting scores for Dolphins
// // let dolphinScores = getScores("Dolphins");
// // let scoreDolphins = calcAverage(
// //   dolphinScores[0],
// //   dolphinScores[1],
// //   dolphinScores[2]
// // );

// // // Getting scores for Koalas
// // let koalaScores = getScores("Koalas");
// // let scoreKoalas = calcAverage(koalaScores[0], koalaScores[1], koalaScores[2]);

// // function checkWinner(avgDolphins, avgKoalas) {
// //   if (avgDolphins > avgKoalas) {
// //     console.log("Dolphins win");
// //   } else if (avgKoalas > avgDolphins) {
// //     console.log("Koalas win");
// //   } else {
// //     console.log("It's a draw");
// //   }
// // }

// // checkWinner(scoreDolphins, scoreKoalas);
// // const social = ["fb", "instgram", "twitter"];
// // const devs = ["zukerberg", "dunno", "dontknow"];
// // social[social.length - 1] = "pornsite";

// // years = [2005, 2007, 2009];
// // const age = function (birth) {
// //   return 2024 - birth;
// // };
// // ages = [age(years[0]), age(years[1]), age(years[2])];

// // pplik = ["mgmg", "myamya", "tun tun", "aungaung"];
// // console.log(pplik);
// // pplik.push("leemall");
// // pplik.push("leemallyi");
// // console.log(pplik);
// // console.log(pplik.push("leegyi"));
// // console.log(pplik);
// // pplik.pop();
// // pplik.pop();
// // pplik.pop();
// // console.log(pplik);
// // console.log(pplik.pop());
// // console.log(pplik);
// // pplik.unshift("firstguy");
// // console.log(pplik);
// // pplik.unshift("firstguy");
// // pplik.unshift("firstguy");
// // console.log(pplik);
// // console.log(pplik.unshift("firstguy"));
// // var namee = prompt("what the f is ur name");
// // var greeti = "glad to meet you   ";
// // document.write(namee + "  " + greeti);
// // result = namee + "  " + greeti;
// // alert(result);
// // var greetingString = "Hello";
// // var myName = prompt("Please enter your name", "");
// // var concatString;

// // concatString = greetingString + " " + myName;
// // document.write(concatString);
// var num1 = "123";
// var num2 = "456";
// sum = parseInt(num1) + parseInt(num2);
// console.log(sum);

// var num = prompt("insert a number;;");
// if (num % 2 == 0) {
//   if (num >= 0) {
//     alert("this is positve even number");
//   } else {
//     alert("this is negative even number");
//   }
// } else {
//   if (num % 2 >= 0) {
//     alert("this is positve odd number");
//   } else {
//     alert("this is negative odd number");
//   }
// }
document.getElementById("callme").addEventListener("click", defin);
function defin() {
  var num = prompt("insert a number;;");
  if (num % 2 == 0) {
    if (num >= 0) {
      alert("this is positve even number");
    } else {
      alert("this is negative even number");
    }
  } else {
    if (num % 2 >= 0) {
      alert("this is positve odd number");
    } else {
      alert("this is negative odd number");
    }
  }
}
var namee = prompt("what the f is ur name");
var greeti = "glad to meet you   ";
document.write(namee + "  " + greeti);
