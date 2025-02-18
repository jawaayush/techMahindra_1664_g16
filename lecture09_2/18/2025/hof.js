// Higher order function

// const calculateDoubleData = function(data){
//     return output;


// }


// const calculateAddTen = function(data){
//     const output=[];
//     for(int i =0;i<=data.length;i++){
//         output.push(data[i]+10);
//     }
//     return output;
// }
// console.log(calculateAddTen(data));

// let data = [2,4,6,8,10];

// let newData = data.map((num)=>{
//     return num*2;
// })

// console.log(newData);




// function add(data){
//     let newData = data.map((num)=>{
//         return num+1;
//     })
//     console.log(newData);
// }
// function mul(data){
//     let newData = data.map((num)=>{
//         return num*2;
//     })
//     console.log(newData);
// }

// function x(data,callback){
//     callback(data);
// }
// const data = [1,2,3,4,5];
// x(data,add);
// x(data,mul);



//PollyFill of map
// Array.prototype.mapp = function(logic){
//     var output = [];
//     for(let i = 0;i<this.length;i++){
//         output.push(logic());
//     }
//     return output;
// }

// console.log(data.mapp(doubleData));




// function diameter(r){
//     let newData = r.map((num)=>{
//         return num*2;
//     })
//     console.log(newData);
// }
// function area(r){
//     let newData = r.map((num)=>{
//         return num*num*3.14;
//     })
//     console.log(newData);
// }

// function circum(r){
//     let newData = r.map((num)=>{
//         return 2*3.14*num;
//     })
//     console.log(newData);
// }
// function calc(r,callback){
//     callback(r);
// }
// const radius = [2,9,16,42,71];
// calc(radius,diameter);
// calc(radius,area);
// calc(radius,circum);



// const arr = [1,2,3,4,5,6];
// Array.prototype.fillter = function(){
//     let newd = this.filter((num)=>{
//         if(num%2!=0){
//             return num;
//         }
//     })
//     console.log(newd);
// }

// arr.fillter();


const users = [
    {firstname:"Pratiyush",lastName:"Ray",age:25},
    {firstname:"Piyush",lastName:"Saini",age:20},
    {firstname:"Ayush",lastName:"Jawa",age:28},
    {firstname:"Daksh",lastName:"Raj",age:27},
    {firstname:"Pratiyush",lastName:"Kumar",age:29},
]


const Fullname = users.map((user)=>{
    return user.firstname + " " + user.lastName
});

const age3 = users.filter((user)=>{
    return user.age>25;
})

console.log(Fullname);
console.log(age3);