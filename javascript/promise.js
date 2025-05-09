
// let fetch = (age)=>{
//     return new Promise((resolve,reject)=>{
//        if(age>=18){
//         return resolve("you can vote");
//        } 
//        else{
//         return reject("you can't vote");
//        }
//     });
// };
// fetch()
//     .then((data)=>{
//         console.log("success");
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log("Error 504");
//     })
//     .finally(()=>{
//         console.log("finally I'm here");
//     })



// let promise = new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     // resolve("hello");
// reject("error");
// },2000)
// });
// console.log(promise);
// promise.then((msg)=>{
//     console.log("resolve data");
//     console.log(msg)
// }).catch((err)=>{
//     console.log("reject data");
//     console.log(err);
// }).finally(()=>{
//     console.log("always run");
// })

// async function handle() {
//     try{
//         const res  = await promise;
//         console.log(res);
//     } catch (err){
//         console.log(err);
//     }
// }
// handle();

// const promise1 = fetch("https://jsonplaceholder.typicode.com/users");
// promise1
// .then((res)=>res.json())
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))


// async function  handle() {
//     try{
//         let res  = await fetch("https://jsonplaceholder.typicode.com/users");
//         let data = await res.json();
//         let newData = data.map((user)=>{
//             return {name: user.name}
//         });
//         console.log(newData)
//     }
//     catch(err){
//         console.log("something went wrong");
//     }
// }
// handle();

// async function todos() {
//     try{
//         let res = await fetch("https://jsonplaceholder.typicode.com/todos");
//         let data = await res.json();
//         // console.log(data);
//         let newdata = data.map((user)=>{
//             return {id: user.id, title: user.title, };
//         });
//         console.log(newdata);
//     }
//     catch(err){
//         console.log("something went wrong");
//     }
// }
// todos();




// function getUserdata(age){
//     return new Promise(function(resolve,reject){
//         console.log("server sai data la rha ha....");
//         setTimeout(function(){
//             // let success=true;
//             // let failed=false;
//             if(age>99){
//                 resolve({name:"gaurav",age:21,gender:"male"});
//             }else{
//                 reject("data fatch nahi ho pa rha");
//             }
//         },1000);
//     })
// }
// getUserdata(21)
// .then(function(usre){
//     console.log("user data:",usre)
// }).catch(function(error){
//     console.log("Error",error);
// }).finally(function(){
//     console.log("Always run");
// });




// let mera_promse= new Promise(function(resolve,reject){
//     let kaamHoGaya=false;
//     if(kaamHoGaya){
//         resolve("kaam ho gaya!");
//     }else{
//         reject("kaam nahi haya!")
//     }
// });
// // console.log(mera_promse);
// mera_promse
//     .then(function(result){
//         console.log("success :",result);
//     })
//     .catch(function(error){
//         console.log("error :",error);
//     });


// let mypromise = new Promise((resolve,reject)=>{
//     let hindi = 88;
//     let english = 88;
//     let maths = 88;
//     let chemistry = 88;
//     let physics = 88;
//     let sum = hindi+english+maths+chemistry+physics;
//     let per = sum/5;
//     if(per>=60){
//         resolve("First");
//     }
//     else if(per>=50){
//         resolve("Second");
//     }
//     else if(per>=40){
//         resolve("Third");
//     }
//     else if(per>=33){
//         resolve("failed");
//     }
//     else{
//         reject("invalid marks");
//     }
// });
// mypromise
//     .then((result)=>{
//         console.log("Your division is ",result);
//     })
//     .catch((error)=>{
//         console.log("Error",error);
//     });
 






// function step1(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("hello");
//         resolve("data 1");
//         reject("can't found data");
//        },1000);
//     })
// }
// function step2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("how");
//         resolve("data 2");
//         reject("can't found data");
//         },1000);
//     })
// }
// function step3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("are");
//         resolve("data 3");
//         reject("can't found data");
//         }, 1000);
//     })
// }
// function step4(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("you");
//         resolve("data 4");
//         reject("can't found data");
//         }, 1000);
//     });
// }
// async function makeasentence() {
//     let stp1 = await step1();
//     let stp2 = await step2();
//     let stp3 = await step3();
//     let stp4 = await step4();
// }
// makeasentence();






console.log("start");
setTimeout(()=>{
    console.log("macrotask");

},500);
Promise.resolve().then(()=>{
    console.log("microtask");
});
console.log("end");