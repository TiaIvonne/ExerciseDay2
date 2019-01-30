// Find the maximum, declare function
function maxOfTwoNumbers(number1,number2){
  return Math.max(number1,number2); //function sounds like MAd Max
}
console.log("The largest number it's " + maxOfTwoNumbers(70,80));

// Finding Longest Word
// Declare array 
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

// /* Declare function */
function findLongestWord(str){
  var long = 0;
  var nWord = ""; //Save string
    for (var i = 0; i < str.length; i++) { //iterations
        if (str[i].length > long) {
        long = str[i].length;
        nWord = str[i];
        }
    }
  return nWord
}
console.log("Most large word it's " + findLongestWord(words)); /*call function*/


// Calculating a Sum
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]
  function sumArray(someNumbers){
    var result = 0
    for (i = 0; i < someNumbers.length; i++){
    result += someNumbers[i];
    }
    return result;
  }
    console.log(sumArray(numbers));

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10].reduce(function (accumulator, currentValue){
return accumulator + currentValue;
},0);
console.log(numbers);


// Calculate the Average
/*With loop */
var numbersAvg = [2,6,9,10,7,4,1,9];
  function averageNumbers(someAverage){
    var resultSum = 0;
    var resultAverage = 0;
      for (i = 0; i < someAverage.length; i++){
        resultSum += someAverage[i]
      }
    return resultAverage = resultSum /= someAverage.length
  }
  console.log(averageNumbers(numbersAvg));

/*with reduce */
const arrAvg = numbersAvg => numbersAvg.reduce((a,b) => a + b, 0) / numbersAvg.length
console.log(arrAvg(numbersAvg));


//Array of Strings

var wordsArr = [
  'seat',//0
  'correspond',//1
  'linen',//2
  'motif',//3
  'hole',//4
  'smell',//5
  'smart',//6
  'chaos',//7
  'fuel',//8
  'palace'//9
];

sumCharacters = 0;
var someWords = wordsArr.length;
//Print how many words has my array it's just a comprobation
//console.log("words into array ", someWords)
//Declare a for statement which iterates 10 times (array length)
  function averageWordLength(someArray){
    for (i = 0; i < someArray.length; i++){
      sumarize = someArray.slice()[i];//New variable sumarize, when I save every item from my array, i indicates how many times.
      console.log(sumarize, sumarize.length);//Just a comprobation, print how many characters into string
      sumCharacters += sumarize.length;
    }
  var average = sumCharacters /= someWords;//calculates average
  return average;
  }
  console.log("The average is" , averageWordLength(wordsArr));


//Unique Arrays

var wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

  function makeNewCleanArray(someArray){
  newArray = [];
    for (let index = 0; index < someArray.length; index ++) {
      if(newArray.indexOf(someArray[index])==-1){//-1 indicates doesn't exist
      newArray.push(someArray[index]);
      }
    }
    return newArray;
  }
  console.log(makeNewCleanArray(wordsUnique));



// Finding Elements
var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

var newWord = prompt("Give me a word");

  function findWords(someArray){
    for (i=0; i < someArray.length; i++){
      if(someArray[i] === newWord){
      return true;
      }
    }
  return false;
  } console.log(findWords(wordsFind));


// Counting Repetion
// The function will return the number of times that word appears in the array.
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
//const words: Declaration
//counterWord: how many times a word appears into array
//words: Every item into array
//{} empty object
const words = wordsCount.reduce((counterWord, words) => {counterWord[words] = (counterWord[words] || 0) + 1; return counterWord;},{});
console.log(words);


