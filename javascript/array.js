// let arr = [1,2,3,4,5];
// let arr1 = arr.reduce((acc,num)=>{
//     return acc+num;
// },0);
// console.log(arr1);

// let arr = [2,3,4,2,5];
// let check = arr.every((num)=>{
//     return num>0;
// });
// console.log(check);

// let arr = [1,2,3,4,5];
// let some = arr.some((num)=>{
//     return num>0;
// })
// console.log(some);

// let arr = [1,2,3,4,5,6];
// console.log(arr.includes(6));

// let arr = [0,2,3,4,5];
// let find = arr.find((num)=>{
//     return num>0;
// });
// console.log(find);

// let arr = [1,24,34,44,5];
// arr.sort();
// console.log(arr);

// let arr = [1,24,54,34,3];
// arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr);

// let arr = ["a","c","d","b"];
// arr.sort();
// console.log(arr);

// let arr = [1,2,3,4,5];
// let arr1 = [];
// for(let i=arr.length-1;i>=0;i--){
//     arr1.push(arr[i]);
// }
// console.log(arr1);

// let arr = [1,2,3,4,5];
// let arr1 = [1,2,3,4,5];
// let arr2= arr.filter((num)=>{
//     return arr.includes(num);
// });
// console.log(arr2);

// let arr = [1,2,[3,4,5],6,[7,8,9],10];
// let arr1 = arr.flat(Infinity);
// let sum = arr1.reduce((acc,num)=>{
//     return acc+num;
// },0);
// console.log(sum);

// let arr = [1,2,[3,4,5,[6,7,[8,9,10]]]];
// let arr1 = arr.flat(Infinity);
// let sum = arr1.reduce((acc,num)=>{
//     return acc+num;
// },0);
// console.log(sum);

// let arr = [1,2,[3,4,5,[6,7,[8,9,10]]]];
// let arr1 = arr.flat(Infinity).reduce((acc,num)=>{
//     return acc+num;
// },0);
// console.log(arr1);

// function nestedarray(arr){
//     let sum = 0;
//     let arr1 = arr.flat();
//     for(let i=0;i<arr.lenght;i++){
//         if(Array.isArray(arr1)){
//             sum += nestedarray(arr1[i]);
//         }
//         else{
//             sum += arr1[i];
//         }
//     }
//     return sum;
// }
// let res = nestedarray([1,2,3,[4,5],6,[7,8,9],10]);
// console.log(res);

// let arr = [1,2,3,4,5,6,7];
// console.log(Array.isArray(arr));

// let arr = [1,2,1,2,3,3,4,5,4,5];
// let arr1= arr.reduce((acc,num)=>{
//     if(!acc.includes(num)){
//         acc.push(num);
//     }
//     return acc;
// },[]);
// console.log(arr1);

// console.log(undefined==null);
// console.log(typeof null);

// Homework question

// arr1= largenumber([1,2,3,4,5,6,7,1,2,3,5,89])

// function largenumber(arr){
    
//     return arr.reduce((acc,num)=>{
//         return num>acc?num:acc; 
//     },0);
// }
// let arr1 = largenumber([12,32,4,344,54,65,45,36]);
// console.log(arr1);

// find even number

// function evenvales(arr){
//     return arr.reduce((acc,num)=>{
//         if(num%2==0){
//             acc.push(num);
//         }
//         return acc; 
//     }, []);
// }
// let arr1 = evenvales([1,2,3,4,5,6,7,8,9,10]);
// console.log(arr1);