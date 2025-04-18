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
//         console.log("error");
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

async function todos() {
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await res.json();
        let newdata = data.map((user)=>{
            return {tittle: user.tittle};
        });
        console.log(newdata);
    }
    catch(err){
        console.log("something went wrong");
    }
}
todos();