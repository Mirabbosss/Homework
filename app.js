// 1) String Scramble 
// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.
// Ex:
// scramble('abcd', [0,3,1,2]) -> 'acdb'

// function tartiblash(str, arr) {
//     let harfdanMassivga = str.split('');
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[arr[i]] = harfdanMassivga[i];
//     }

//     return result.join('');
// }

// let result = tartiblash('abcd', [0, 3, 1, 2])
// console.log(result);



// 2) Jenny the youngest detective
// In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.

// Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
// Spaces are not places, you need the actual letters. No spaces.
// The returned word should be all lowercase letters.
// if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(
// Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")

// function findWord(indexes, comment) {
//     let word = '';
//     for (let i = 0; i < indexes.length; i++) {
//         let index = indexes[i];
//         if (index < comment.length && comment[index] !==" ") {
//             word += comment[index].toLowerCase();
//         } else {
//             return "No mission today";
//         }
//     }
//     return word;
// }

// let indexes = [5, 0, 3];
// let comment = "I Love You";
// console.log(findWord(indexes, comment));



// 3) Convert an array of strings to array of numbers
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
// ie:["1", "2", "3"] to [1, 2, 3]
// Note that you can receive floats as well.

// function stringToNumber(string) {
//     return string.map(Number);
// }

// let string = ["1", "2", "3"];

// console.log(stringToNumber(string));



// 4) Scrolling Text
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// function rotations(str) {
//     const result = [];
//     str = str.toUpperCase();

//     for (let i = 0; i < str.length; i++) {
//         str = str.slice(1) + str[0];
//         result.push(str);
//     }

//     return result;
// }

// let word = "Codewars";
// let rotatedString = rotations(word);
// console.log(rotatedString);



// 5) Sort and Star
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

// function sortAndModify(arr) {
//     arr.sort();
//     let birinchiSoz = arr[0];
//     let ozgartirilganSoz = birinchiSoz.split('').join('***');
  
//     return ozgartirilganSoz;
//   }
  
//   let sozlar = ["abc", "def", "ghi"];
//   let natija = sortAndModify(sozlar);
//   console.log(natija);


// 6) Convert a string to an array

// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// function stringToArray(str) {
//     return str.split(' ');
// }

// let str = "I love arrays they are my favorite";

// console.log(stringToArray(str));



// 7) Remove First and Last Character Part Two
// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"
// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// function ortasi(qator) {
//     let qatorlar = qator.split(',');
//     qatorlar.pop();
//     qatorlar.shift();
//     let result = qatorlar.join(' ');
//     return result || null;
// }

// let qator = "1,2,3,4,5";

// console.log(ortasi(qator));



// 8) You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// function checkArray (array, x) {
//     return array.includes(x);
// }

// let array = [1, 2, 3, 4, 5];
// let x = 3;
 
// console.log(checkArray(array, x));


// 9) UEFA EURO 2016
// Finish the uefaEuro2016() function so it return string just like in the examples below:
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// function uefaEuro2016(teams, scores){
//     let winner = scores[0] > scores[1] ? teams[0] : scores[0] < scores[1] ? teams[1] : `teams played draw.`;
//     return `At match ${teams[0]} - ${teams[1]}, ${winner} won!`;
// }

// let teams = ['Germany', 'Ukraine'];
// let scores = [2, 0];

// console.log(uefaEuro2016(teams, scores));



// 10) Is there a vowel in there?
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// function replaceVowel(arr) {
//     return arr.map(num => {
//         if (num === 97 || num === 101 || num === 105 || num === 111 || num === 117) {
//             return String.fromCharCode(num);
//         } else {
//             return num;
//         }
//     })
// }

// let arr = [97, 111, 117];

// console.log(replaceVowel(arr));



// 11) Arrow style Functions
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

// function convertToAscii(arr) {
//     return arr.map(num => String.fromCharCode(num));
// };

// let arr = [97, 98, 99];

// console.log(convertToAscii(arr));