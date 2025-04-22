// map method 

// function mod(arr){
//     return arr.map((value)=>{
//       return  value%2;
//     });
// }
// let res = mod([21,4,6,17]);
// console.log(res);

// reduce method

// function datareduce(arr){
//     return arr.reduce((acc,num)=>{
//         if(num%2==0){
//             acc.push(num);
//             return acc;
//         }
//         return acc;
//     },[]);
// }
// let res = datareduce([1,2,3,4,5,6,7,8,9,10]);
// console.log(res);

//  filter method

// function datafilter(arr){
//     let arr1 = arr.flat(Infinity);
//     return arr1.filter((num)=>{
//         return num%2==0;
//     });
// }
// let res = datafilter([1,2,[3,4],[5,[6,7],8,9,10]]);
// console.log(res);

// data fetch

// async function data() {
//     try{
//         let data = await fetch("https://jsonplaceholder.typicode.com/todos");
//         let res = await data.json();
//         let info = res.map((user)=>{
//             return {Id: user.id, title: user.title}
//         });
//         console.log(info);
//     }
//     catch(err){
//         console.log("something went wrong");
//     }
// }
// data();

// merge object

// function merge(){
//     let obj = {
//         name:"lokesh",
//         lastname:"kashyap"
//     };
//     let obj1 = {
//         ...obj,
//         grade:"A",
//         course:"BCA"
//     };
//     let obj2 = {
//         ...obj1,
//         courseduration:3
//     };
//     console.log(obj2);
// }
// merge();


