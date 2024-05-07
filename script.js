// 1-lesson. Spelling it Out

// function spellingOut(word) {
//     let arr = [];
//     for(let i=0; i<=word.length; i++) {
//         arr.push(word.slice(0, i + 1))
//     }
//     return arr
// }

// console.log(spellingOut("happy"));


// 2-lesson. First and Last Index

// function indexFinder(word, letter) {
//     let firstIndex = word.indexOf(letter);
//     let lastIndex = word.lastIndexOf(letter);
//     return [firstIndex, lastIndex];
// }

// console.log(indexFinder("Developer", "e"));



// 3-lesson. Remove Duplicates from an Array

// let array = [1, 2, 3, 4, 5];

// function arrFunction (array) {
//     return array.filter((element, index) => array.indexOf(element) === index);
// }

// console.log(arrFunction(array));



// 4-masala. Mirror Array

// function reverseArr(arr) {
//     let slicedArr = arr.slice(0, -1).reverse();
//     return [...arr, ...slicedArr]
// }

// let result = reverseArr([1, 2, 3, 4, 5]);
// console.log(result);



// 5-lesson. Number to Reversed Array

// let son = 987654321;
// let arr = [];

// function reversedNumbers (son) {
//     son = son.toString();
//     for (let i=0; i<son.length; i++) {
//         arr.push(son[i]) 
//     };
//     return arr.reverse();
// }

// console.log(reversedNumbers(son));