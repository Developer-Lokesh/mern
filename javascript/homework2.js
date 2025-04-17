// Find the longest word in sentence

// function longstr(str){
//     let arr = str.split(" ");
//     let longest = "";
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i].length>longest.length){
//             longest = arr[i];
//         }
//     }
//     return longest;
// }
// let res =  longstr("hello myself lokesh kashyap");
// console.log(res);

//  celsius to fahrenheit

// function conversion(celsius){
//     let fah = (celsius*9/5) + 32;
//     return fah;
// }
// let fahrenheit = conversion(40);
// console.log(fahrenheit);


// find the smallest number

// function smallestnumber(arr){
//     arr.sort((a,b)=>{
//         return a-b;
//     });
//     return arr[0];
// }
// let res = smallestnumber([11,22,33,,32,43,54,1]);
// console.log(res);

//  Find the index of an element in an array

// function findindex(arr,element){
//    return arr.indexOf(element);
// }
// let res = findindex([1,2,3,4,5,6,7,8,9],1);
// console.log(res);

// swipe two number

// function swipenumber(a,b){
//     let c = a;
//     a = b;
//     b = c;
//     console.log(a,b);
// }
// swipenumber(5,4);

// count the number of words in sentence

// function countword(str){
//     let str1 = str.length;
//     let arr = str.split(" ");
//     let arrcount = arr.length-1;
//     let strcount = str1-arrcount;
//     return strcount;
// }
// let res = countword("my name is lokesh and your name is");
// console.log(res);


// sum of all odd number 

// function oddsum(arr){
//     return arr.reduce((acc,num)=>{
//         if(num%2!==0){
//             return acc+num;
//         }
//         return acc;
//     },0);
// }
// let res =  oddsum([1,2,3,4,5,6,7,8,9,10,11]);
// console.log(res);


//  Remove all falsy values

// function falsyvalue(arr){
//     return arr.reduce((acc,num)=>{
//         if(Boolean(num)){
//             acc.push(num);
//         }
//         return acc;
//     },[]);
// }
// let res = falsyvalue([0,1,2,3,"","lokesh",[4,5,6],{},false,NaN,undefined]);
// console.log(res);


//   String start with the specific character

// function specificchar(str,element){
//     if(str[0]==element){
//         return true
//     }
//     return false;
// }
// let res = specificchar("Lokesh","L");
// console.log(res);

// Check if an array contain a specific element

// function checkarray(arr,element){
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]==element){
//             return "Yes";
//         }
//     }
//     return "Element is not exist in an array";

// }
// let res = checkarray(["Dog", "Cat", "Cow", "Bull", "Lion", "Tiger"],"Tiger");
// console.log(res);



