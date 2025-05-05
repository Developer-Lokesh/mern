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
//     if(!acc.hasOwnProperty(c)){
//         acc[c] = []; 
//     }
//     acc[c].push(curr.name);
//     return acc;
//   },{});
//   console.log(newarr);

