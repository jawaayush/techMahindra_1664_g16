const users = [
    {firstname:"Pratiyush",lastName:"Ray",age:25},
    {firstname:"Piyush",lastName:"Saini",age:22},
    {firstname:"Ayush",lastName:"Jawa",age:22},
    {firstname:"Daksh",lastName:"Raj",age:22},
    {firstname:"Pratiyush",lastName:"Kumar",age:29},
]

// let newD = users.filter((user)=>{
//     return user.age===22;
// });

// console.log(newD);


// let newA = users.reduce((acc,curr)=>{
//     if(curr.age===22){
//         acc++;
//     }
//     return acc;
// },0)

// console.log(newA);

let newC = users.reduce((acc,curr)=>{
    if(curr.age===22){
        acc.push(curr);
    }
    else{
        acc.push(1);
    }
    return acc;
},[])

console.log(newC);

//Promise

// reachedRestaured(function(){
//     console.log("Reached eagle motel");
// })
// .then(TableFinding)
// .then(Menu)
// .then(PriceCheck)
// .then(Starter)
// .then(MainCourse)
// .then(dessert)
// .then(payBill)


// const myRestaurantPromise=new Promise(resolve,reject){
//     if(1:30>time>2:30){
//         resolve("Yes Successfully Reached");
//     }
//     else{
//         reject("Cant Reach at time");
//     }
// }

//Promise api's
//1. Promise.all()
//2. Promise.allSettled()
//3. Promise.race()
//4. Promise.any()

// const githubData=fetch("https://github.com/kuber-2003");
// setTimeout(()=>{
//     console.log(githubData);
// },1000)

// console.log(githubData);

// const cart=["shoes","watches","shirt", "glasses"];

// createOrder(cart,callback){
//     console.log("Order Creation")
//     orderPayment(orderId,callback){
//         console.log("Order Payment")
//         orderSummary(orderId,callback){
//         console.log("Order Summary")
//         updateWallet(){
//             console.log("Wallet Updated")
//         }

//         }
//     }
// }

const cart=["shoes","watches","shirt", "glasses"];

function createOrder(cart){
    const myPromise=new Promise(function(resolve,reject){
        if(cart.length>0){
            resolve("12345");
        }
        else{
            const err=new Error("Order Failed");
            reject(err.message);
        }

    });
    return myPromise;
}

function orderPayment(orderId){
    console.log("order Payment Successfull",orderId);
}
function orderSummary(orderId){
    console.log("Order Summary Created",orderId);

}
function updateWallet(){
    console.log("Wallest Updated");
}

// console.log(createOrder(cart));

createOrder(cart)
.then(function (orderId){
    return orderPayment(orderId);
})
.then(function (orderId){
    return orderSummary(orderId);

})
.then(function (orderId){
    return updateWallet();
})

// createOrder(cart)
// .then(function orderPayment(orderId){
//     console.log("Order Paymenyt Successfull"),orderId;
// })
// .then(function orderSummary(orderId){
//     console.log("Order Summary",orderId);
// })

// createOrder(cart)
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet)

