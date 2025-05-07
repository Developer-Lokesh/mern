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







// calculate rating of a product 

// const reviews = [
//     { productId: "a", rating: 4 },
//     { productId: "a", rating: 5 },
//     { productId: "b", rating: 3 },
//     { productId: "z", rating: 3 },
//     { productId: "b", rating: 3 },
//     { productId: "v", rating: 3 },
//     { productId: "b", rating: 3 },
//   ];
//   let newobj = reviews.reduce((acc,data)=>{
//     let property = data["productId"];
//     if(!acc.hasOwnProperty(property)){
//           acc[property]=[];  
//     }
//       acc[property].push(data["rating"]);   
//       return acc;
//   },{});

// //   console.log(newobj)
  
//   let ratingcount = {};
//   for(let i in newobj){
//     let ratings = newobj[i];
//     let count = ratings.reduce((a,b)=>{
//       return a+b;
//     },0);
//     let average = count/ratings.length;
//     ratingcount[i]= average;
//   }
//   console.log(ratingcount);






// const query = "name=john&age=25&skill=js&skill=react";
// let newquery = query.split("&");
// // console.log(newquery);
// let obj = newquery.reduce((acc,num)=>{
//   let [key ,value] = num.split("=")
//   acc[key] = value;
//   return acc;
// },{});
// console.log(obj);

 

// const query = "name=john&age=25&skill=js&skill=react";
// let newquery = query.split("&");
// // console.log(newquery);
// let obj = newquery.reduce((acc,num)=>{        
//     let [key ,value] = num.split("=");
//     if(acc[key]){
//         if(Array.isArray(acc[key])){
//             acc[key].push(value);
//         }
//         else{
//             acc[key] = [acc[key], value];
//         }
//     }
//     else{
//         acc[key] = value;
//     }
//     return acc;
// },{});
// console.log(obj);




// const users = [{name:"A",age:25},{name:"B"},{name:"C",age:20}];
// users.sort((a,b)=>{
//     return (a.age || Infinity) - (b.age || Infinity);
// })
// console.log(users);




// const users = [
//     { name: "Alice", gender: "F", country: "USA" },
//     { name: "Bob", gender: "M", country: "Canada" },
//     { name: "Eve", gender: "F", country: "USA" },
//     { name: "Singh", gender: "M", country: "USA" },
//     { name: "Maya", gender: "F", country: "Canada" },
//   ];
//   let newarr = users.reduce((acc,curr)=>{
//     let c = curr.country;
//     let g = curr.gender;
//     if(!acc.hasOwnProperty(g)){
//         acc[g] = 1; 
//     }
//     acc[g]++;
//     return acc;
//   },{});
//   console.log(newarr);



// const users = [
//     { name: "Alice", gender: "F", country: "USA" },
//     { name: "Bob", gender: "M", country: "Canada" },
//     { name: "Eve", gender: "F", country: "USA" },
//     { name: "Singh", gender: "M", country: "USA" },
//     { name: "Maya", gender: "F", country: "Canada" },
//   ];
// let newarr = users.reduce((acc,data)=>{
//     let c = data.country;
//     if(!acc.hasOwnProperty(c)){
//         acc[c] = [];
//     }
//     acc[c].push(data.name);
//     return acc;
// },{});
// console.log(newarr);


// const item=[
//     {name:"apple",category:"fruit"},
//     {name:"carrot",category:"vegetable"},
//     {name:"banana",category:"fruit"},
//     {name:"cherry",category:"fruit"},
//     {name:"patato",category:"vegetable"},
//     {name:"mango",category:"fruit"},
//     {name:"onion",category:"vegetable"},
// ];

// let newobj = item.reduce((acc,num)=>{
//     if(!acc.hasOwnProperty(num.category)){
//         acc[num.category] = [];
//     }
//     acc[num.category].push(num.name);
//     return acc;
// },{});
// console.log(newobj);


// const words=["apple","banana","mango","apple","banana","mango"];
// let newarr = words.reduce((acc,num)=>{
//     if(!acc[num]){
//         acc[num] = 1;
//     }
    
//     acc[num]++;
//     return acc;
// },{});
// console.log(newarr);



// const product=[
//         {name:"shirt",category:"clothes",price:1000},
//         {name:"pants",category:"clothes",price:1500},
//         {name:"watch",category:"accessories",price:2000},
//         {name:"watch",category:"accessories",price:2000},
//         {name:"watch",category:"accessories",price:2000},
//     ];
// let newobj = product.reduce((acc,data)=>{
//     if(!acc.hasOwnProperty(data.category)){
//         acc[data.category] = data.price;
//     }
//     acc[data.category] += data.price;
//     return acc;
// },{});
// console.log(newobj);




// const query = "name=John&age=25&skills=js&skills=react&skills=html";
// const res5 = query.split("&").reduce((acc, curr) => {
//     let [key, value] = curr.split("=");
//     if (!acc[key]) {
//       acc[key] = value;
//       return acc;
//     }
//     acc[key] = [acc[key], value];
//     return acc;
//   }, {});
//   console.log(res5);



















// const query = "name=John&age=25&skills=js&skills=react&skills=html&skills=css";
// const res5 = query.split("&").reduce((acc, curr) => {
//     let [key, value] = curr.split("=");
//     if (!acc[key]) {
//       acc[key] = value;
//       return acc;
//     }
//     acc[key] = Array.isArray(acc[key])?[...acc[key], value]:[acc[key],value];
//     return acc;
//   }, {});
//   console.log(res5);