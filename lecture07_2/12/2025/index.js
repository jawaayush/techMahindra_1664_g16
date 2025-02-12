console.log(1);
console.log(sum(10,5));
function sum(a,b){
    return a+b;
}
setTimeout(()=>{
    console.log(4)
},2000);
var start = 1;
var end = 100000;
while(start<end){
    start++;
    if(start===100000){
        console.log('in while');
    }
}
console.log('end');
setInterval(()=>{
    console.log(9)
},5000);