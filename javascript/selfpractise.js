
// const students = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 19 }
//   ];
// let newarr = students.reduce((acc,num)=>{
//     if(num.age>=20){
//         acc.push(num.name);
//     }
//     return acc;
// },[]);
// console.log(newarr);





// const products = [
//     { name: "Laptop", inStock: true },
//     { name: "Phone", inStock: false },
//     { name: "Tablet", inStock: true }
//   ];
// let newarr = products.reduce((acc,num)=>{
//     if(num.inStock==true){
//         acc.push(num);
//     }
//     return acc;
// },[]);  
// console.log(newarr);





// const users = [
//     { name: "Alice", gender: "F", country: "USA" },
//     { name: "Bob", gender: "M", country: "Canada" },
//     { name: "Eve", gender: "F", country: "USA" },
//     { name: "Singh", gender: "M", country: "USA" },
//     { name: "Maya", gender: "F", country: "Canada" },
//   ];
//   let res=users.reduce((acc,num)=>{
//     if(!acc[num.gender]){
//       acc[num.gender]=1;
//     }
//     acc[num.gender]++;
//     return acc;
//   },{})
//   console.log(res);

// const users = [
//     { name: "Alice", gender: "F", country: "USA" },
//     { name: "Bob", gender: "M", country: "Canada" },
//     { name: "Eve", gender: "F", country: "USA" },
//     { name: "Singh", gender: "M", country: "USA" },
//     { name: "Maya", gender: "F", country: "Canada" },
//   ];

//   let res=users.reduce((acc,num)=>{
//     if(!acc[num.country]){
//         acc[num.country]=[num.name];
//     return acc;
//     }
//     acc[num.country].push(num.name);
//     return acc;
//   },{});
//   console.log(res);


// const users = [
//         { name: "Alice", gender: "F", country: "USA",salary:3000 },
//         { name: "Bob", gender: "M", country: "Canada",salary:8000 },
//         { name: "Eve", gender: "F", country: "USA",salary:7000 },
//         { name: "Singh", gender: "M", country: "USA" ,salary:5000},
//         { name: "Maya", gender: "F", country: "Canada",salary:6000 },
//       ];
//     let res=users.reduce((acc,num)=>{
//          return acc+num.salary;
//     },0);
//     console.log(res);


// const item=[
//     {name:"apple",category:"fruit"},
//     {name:"carrot",category:"vegetable"},
//     {name:"banana",category:"fruit"},
// ];
// let res=item.reduce((acc,num)=>{
//     if(!acc[num.category]){
//         acc[num.category]=[num.name];
//         return acc;
//     }
//     acc[num.category].push(num.name);
//     return acc;
// },{});
// console.log(res);

// const words=["apple","banana","mango","apple","banana","mango"];
// let res=words.reduce((acc,num)=>{
//     if(!acc[num]){
//         acc[num]=1;
//     }
//     acc[num]++;
//     return acc
// },{});
// console.log(res);


// let user=[
//     {name:"apple"},
//     {name:"carrot"},
//     {name:"banana"},
// ];
// let res=user.reduce((acc,num)=>{
//        return acc+num.name.length;
// },0);
// console.log(res);

// function match(string,element){
//     if(string[0]===element){
//         return true;
//     }else{
//     return false;
//     }
// };
// let res=match("mango","n");
// console.log(res);




// const users = [
//         { name: "Alice"},
//         { name: "Bob"},
//         { name: "Eve" },
//         { name: "Singh"},
//         { name: "Maya"},
//       ];
// let res=users.reduce((acc,num)=>{
//     if(!acc[num.name[0]]){
//         acc[num.name[0]]=[num.name];
//         return acc;
//     }
//     acc[num.name[0]].push(num.name);
//     return acc;
// },{});
// console.log(res);

// const product=[
//     {name:"shirt",category:"clothes",price:1000},
//     {name:"pants",category:"clothes",price:1500},
//     {name:"watch",category:"accessories",price:2000},
//     {name:"watch",category:"accessories",price:2000},
//     {name:"watch",category:"accessories",price:2000},
// ];
// let res=product.reduce((acc,num)=>{
//     if(!acc[num.category]){
//         acc[num.category]=num.price;
//         return acc;
//     }
//     acc[num.category] += num.price;
//     return acc;
// },{});
// console.log(res);

// const arr=[[1,2],[3,4],[5]];
// console.log(arr.flat(Infinity));

// const user=[
//     {name:"gaurav"},
//     {name:"abhishek"},
//     {name:"lokesh"},
// ];
// let res=user.reduce((acc,num)=>{
//     if(acc.name.length<num.name.length){
//         return num;
        
//     }
//     return acc;
// });
// console.log(res);


// const data=[
//     {id:1,value:"A"},
//     {id:2,value:"B"},
//     {id:3,value:"C"},
// ];
// let res=data.reduce((acc,num)=>{
//     // if(!acc[num.id]){
//         acc[num.id]=num.value;
//         return acc;
//     // }
//     // acc[num.id].push(num.value);
//     // return acc;
// },{});
// console.log(res);

// const user=[
//     {name:"gaurav",age:22},
//     {name:"lokesh",age:25},
//     {name:"rohit",age:28},
// ];
// let res=user.reduce((acc,num)=>{
//     acc[num.age]=num.name;
//     return acc;
// },{});
// console.log(res);


// let dat = [
//     {id: "1", name: "A"},
//     {id: "2", name: "B"},
//     {id: "9", name: "D"},
//     {id: "2", name: "B"},
//     {id: "3", name: "C"},
// ];

// let res = dat.reduce((acc, num) => {
//     if (!acc[num.id]) {
//         acc[num.id] = [num.name];
//     } else if (!acc[num.id].includes(num.name)) {
//         acc[num.id].push(num.name);
//     }
//     return acc;
// }, {});

// console.log(res);


// const user=[
//     {name:"gaurav",age:22},
//     {name:"lokesh",age:25},
//     {name:"rohit",age:21},
//     {name:"gon",age:28},
//     {name:"man",age:44},
//     {name:"son",age:34},
//     {name:"tonic",age:28},
// ];
// let res=user.map((num)=>num.age);
// console.log(res);