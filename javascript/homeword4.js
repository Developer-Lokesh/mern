//  convert a nested array into a flat array

// function flatarray(arr){
//    let arr1 =  arr.flat(Infinity);
//     return arr1;
// }
// let res = flatarray([1,[2,[3]],4]);
// console.log(res);

// Rotate an array to the right by k step

// function rotate(arr){
//     let arr1 = arr.slice(-2);
//     let arr2 =  arr1+","+arr.slice(0,3);
//     return arr2.split();
// }
// let res = rotate([1,2,3,4,5]);
// console.log(res);

// Find the maximum value in an array of numbers

// function largeno(arr){
//     return arr.reduce((acc,num)=>{
//         if(acc<num){
//             return num;
//         }
//         else{
//             return acc;
//         }
//     },0);
// }
// let res  = largeno([5,8,2,10,3]);
// console.log(res);

// Remove a duplicate value from an array

// function remove(arr){
//     return arr.reduce((acc,num)=>{
//         if(!acc.includes(num)){
//             acc.push(num);
//         }
//         return acc;
//     },[]);
// }
// let res = remove([1,2,2,3,4,4,5]);
// console.log(res);

// Creating an object representing a book and display it details

// function bookdetails(){
//     obj = {
//         tittle : "The Habbit",
//         author : "J.R.R Talkien",
//         year : 1937
//     };
//     console.log(obj.tittle ,"by ", obj.author,"published in", obj.year);
// }
// bookdetails();

//Merge two object into a new object

// function mergeobj(){
//     let obj = {
//         a:1,
//         b:2
//     };
//     let obj1 = {
//         ...obj,
//         c:3,
//         d:4
//     };
//     let obj2 = {
//         ...obj1,
//     } ;
//     console.log(obj2);
// }
// mergeobj();

// create a new object where keys and values are swapped

// function swapped(){
//     let obj = {
//         a:1,
//         b:2
//     };
//     console.log(Object.values(obj),Object.keys(obj));
// }
// swapped();

// calculate the all numeric value in an object

// function count(obj){
//     let sum = 0;
//     let value = Object.values(obj);
//     for(let i=0;i<value.length;i++){
//         sum+=value[i];
//     }
//     return sum;
// }
// let res = count({
//     apple:5,
//     orange:3,
//     bananas:2
// });
// console.log(res);

// write a function to check if a key exist in an object

// function checkkey(obj){
//     if(obj.hasOwnProperty("age")){
//         return true;
//     }    
//         return false;
// }
// let res = checkkey({name:"Alice",age:25});
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

//Return the longest word from an array of string

// function longestword(arr){
//     let longest = "";
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length>longest.length){
//             longest=arr[i];
//         }
//     }
//     return longest;
// }
// let res = longestword(["apple", "banana", "kiwi", "strawberry"])
// console.log(res);

// find the common element in an array

// function findcommon(arr,arr1){
//   let newarr = [];
//   for(let i = 0; i<arr.length;i++){
//     for(let j = 0;j<arr1.length;j++){
//       if(arr[i]==arr1[j]){
//         newarr.push(arr[i]);
//       }
//     }
//   }
//   return newarr;
  
// }
// let res = findcommon([1,2,3,4],[3,4,5,6]);
// console.log(res)


// Group User by Age

// const usersData = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 25 },
//   ];
//   let group = usersData.reduce((acc,data)=>{
//     if(!acc[data.age]){
//         acc[data.age]= [];
//     }
//     acc[data.age].push(data.name);
//     return acc;
// },{});
// console.log(group);

const reviews = [
  { productId: "a", rating: 4 },
  { productId: "a", rating: 5 },
  { productId: "b", rating: 3 },
];
let totalcount = 1;
let newobj = reviews.reduce((acc,data)=>{
  let property = data["productId"];
  let ratingcount = data["rating"];
  let count = 0;
  if(acc.hasOwnProperty(property)){
        acc[property]++;
  }
  else{
    acc[property] = totalcount;
 
  }
    return acc;
},{});




