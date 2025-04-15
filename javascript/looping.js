function findindex(arr){
    return arr.reduce((acc,num,i)=>{
        if(num%3==0 && num%7==0){
            acc.push(i);
            return acc;
        }
        return acc;
    },[]);
}
let res = findindex([10,21,33,49,84,100,105]);
console.log(res);