// function x(c){
//     console.log('x');
//     c();
// }

// function c(){
//     console.log('c');
// }

// x(c);
// document.getElementById("btn-click").addEventListener("click",function(){
//     console.log(count++);
// })
// document.getElementById("btn-stop").addEventListener("click",function(){
//     console.log(count--);
// })


// function x(){
//     let count = 0;
//     return {
//         inc: function(){
//             console.log(count++);
//         },
//         inc2: function(){
//             let z = x();
//             z.inc();
//             z.inc();
//             z.inc();
//         }
//     }
// }

// let y = x();
// y.inc();
// y.inc();
// y.inc2(); 


function reachedRes(c){
    setTimeout(()=>{
        console.log("reached restraunt");
    },1000)
    c(menuDiscover);
}
function tableFinding(c){
    setTimeout(()=>{
    
        console.log("finding table");
    },1000)
    c(priceCheck);
}
function menuDiscover(c){
    setTimeout(()=>{
        console.log("menu discovery");
    },1000)
    c(starterOrder);
}
function priceCheck(c){
    setTimeout(()=>{
        console.log("price check");
    },1000);
    c(MainOrder);
}
function starterOrder(c){
    setTimeout(()=>{
        console.log("starter order");
    },1000);
    c(dessertOrder);
}
function MainOrder(c){
    setTimeout(()=>{

        console.log("main order");
    },1000);
    c(billPay);
}
function dessertOrder(c){
    setTimeout(()=>{
        console.log("dessert");
    },1000);
    c();
}
function billPay(){
    setTimeout(()=>{
        console.log("bill");
    },1000);
}

reachedRes(tableFinding);
