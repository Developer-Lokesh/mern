//find largest number

// function largenumber(arr){
//     return arr.reduce((acc,num)=>{
//         if(num>acc){
//             return num;
//         }
//         else{
//             return acc;
//         }
//     },0);
// }
// let arr1 = largenumber([111,2,3,4,5,4,5,4,5,44,555]);
// console.log(arr1);

// string length

// function string(str){
//     let str1= str.length;
//     return str1;
// }
// let res = string("hello");
// console.log(res);

//remove duplicate value

// function removeduplicate(arr){
//     return arr.reduce((acc,num)=>{
//         if(!acc.includes(num)){
//             acc.push(num);
//         }
//         return acc;
//     },[])
// }
// let arr1 = removeduplicate([1,2,3,4,5,6,5,4,3,2,1,6]);
// console.log(arr1);

//reverse string

// function reverse(str){
//     let str1 = "";
//     for(let i=str.length-1;i>=0;i--){
//          str1 += str[i];
//     }
//     return str1;
// }
// let str2 = reverse("hello");
// console.log(str2);

// find n number factorial

// function factorial(n){
//     let fact = 1;
//     for(let i=1;i<=n;i++){
//         fact = fact*i;
//     }
//     return fact;
// }
// let fact1 = factorial(7);
// console.log(fact1);

//  second large no.

// function secondlarge(arr){
//    arr.sort((a,b)=>{
//       return b-a;
//    });
//     return arr[1];
// }
// let arr1 = secondlarge([1,2,3,4,5,44,55,66,77,78,88]);
// console.log(arr1);

// some of all even number

// function evensum(arr){
//     return arr.reduce((acc,num)=>{
//         if(num%2==0){
//             return num+acc;
//         }
//         else{
//             return acc;
//         }
        
//     },0);
// }
// let arr1 = evensum([1,2,3,4,5,6,7,8,9,10,11]);
// console.log(arr1);


// sort an array in ascending order

// function sorting(arr){
//     return arr.sort((a,b)=>{
//         return a-b;
//     });
// }
// let arr1 = sorting([4,5,3,2,1,6,7]);
// console.log(arr1);

// count vowels in string

// function vowels(str){
//     let arr = [...str];
//     return arr.reduce((acc,num)=>{
//         if(num=="a"||num=="e"||num=="i"||num=="o"||num=="u"||num=="A"||num=="E"||num=="I"||num=="O"||num=="U"){
//             return acc+=1;
//         }
//         else{
//             return acc;
//         }
//     },0);
// }
// let str1 = vowels("my self lokesh kashyap");
// console.log(str1);

// check the no. is positive

// function positive(){
//     let arr = [1,2,3,4,5,6,-7];
//     let arr1 = [];
//     for(let i = 0;i<=arr.length;i++){
//         if(arr[i]>=0){
//           return arr1.push(arr[i]);
//         }
//         return str = "the array is negative";
//     }
//     console.log(arr1);
// }
// positive();

// merge two object

// function merge(){
//     let obj2 = {
//         name:"lokesh",
//         age:20
//     };
//     let obj3 = {
//         ...obj2,
//         grade:"A",
//         course:"BCA"
//     };
//    return obj4 = {
//         ...obj3
//     };
// }
// let obj = merge();
// console.log(obj);

//check object has specific property

// function specificproperty(){
//     let obj = {
//         name:"Lokesh",
//         lastName:"Kashyap",
//         grade:"A",
//         course:"BCA"
//     };
//     console.log(obj.hasOwnProperty("grade"));
//     console.log(obj.hasOwnProperty("gender"));
// }
// specificproperty();

// object into array

// function conversion(){
//     let obj = {
//         name:"Lokesh",
//         lastName:"Kashyap",
//         grade:"A",
//         course:"BCA"
//     };
//     console.log(Object.keys(obj));
//     console.log(Object.values(obj));
// }
// conversion();

// capital letter  

// function capital(str){
//     let arr = str.split(" ");
//     return arr.map((str1)=>{
//         return str1[0].toUpperCase()  + str1.slice(1);
//     }).join(" ");
// }
// let arr1 = capital("my name is lokesh");
// console.log(arr1);



