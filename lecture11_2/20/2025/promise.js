// const myPromiseFromnetflix = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // resolve("fetched from Netflix");
//         reject("error in Netflix");
//     }, 1000);
// })
// const myPromiseFromGithub = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // resolve("fetched from gitHub");
//         reject("error in github");
//     }, 2000);
// })
// const myPromiseFromHotstar = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // resolve("fetched from Hotstar");
//         reject("error in Hotstar");
//     }, 3000);
// })
// const myPromiseFromTwitter = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         // resolve("fetched from twitter");
//         reject("error in twitter");
//     }, 4000);
// })
// const datafromAll=Promise.all([myPromiseFromnetflix,myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromTwitter]);

// datafromAll.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error("Error occurred:", error);
// });


// const datafromAny=Promise.any([myPromiseFromnetflix,myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromTwitter]);

// datafromAny.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error("Error occurred:", error);
// });


// const datafromAllSettled=Promise.allSettled([myPromiseFromnetflix,myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromTwitter]);

// datafromAllSettled.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error("Error occurred:", error);
// });

// const datafromRace=Promise.race([myPromiseFromnetflix,myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromTwitter]);

// datafromRace.then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error("Error occurred:", error);
// });

// const step1 = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Step 1 complete"), 1000);
//     });
// };

// const step2 = (message) => {
//     console.log(message);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Step 2 complete"), 1000);
//     });
// };

// step1()
//     .then(step2) // Chain step2 after step1
//     .then((result) => {
//         console.log(result); // Output: "Step 2 complete"
//     });




// async function techDirect(){
//     console.log("This is hello mahindra");
// }

// const techData = techDirect();
// techData.then((res)=>{
//     return res;
// })

console.log("class start");
async function project() {
    const ans = await setTimeout(()=>{
        console.log("harshit written file");
        setTimeout(()=>{
            console.log("file checked");
            console.log("class end");
        },10000)
    },10000);
}
project();
console.log("attandance marking");
