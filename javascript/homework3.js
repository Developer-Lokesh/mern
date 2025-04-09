// Reverse each word in a sentence

// function reverseString(str) {
//     let arr = str.split(" ");
//     return arr.map((num) => {
//         return num.split("").reverse().join("");
//     }).join(" ");
// }
// let res = reverseString("Javascript is fun");
// console.log(res);

//    Find all pairs in an array that sum to a given value

// function sumpair(arr, element) {
//     let arr1 = [];
//     let arr2;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) { 
//             arr2 = arr[i] + arr[j];
//             if (arr2 == element) { 
//                 arr1.push([arr[i], arr[j]]); 
//             }
//         }
//     }
//     return arr1; 
// }

// let res = sumpair([1, 2, 3, 4, 5], 6);
// console.log(res);

// group object in an array by properties

// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 30 }
// ];
// console.log(groupBy(users, "age"));
