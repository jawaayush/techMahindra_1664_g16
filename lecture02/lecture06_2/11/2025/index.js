// function two(){
//     return 2;
// }
// function four() {
//     return 4;
// }
// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3);
// },3000)

// console.log(four());
// setInterval(()=>{
//     console.log(5)
// },5000)
// console.log(6);


// for(var i = 0;i<=6;i++){
//     function x(i){
//         setTimeout(()=>{
//             console.log(i);
//         },3000)
//     }
//     x(i);
// }

// function y(l){
//     setTimeout(()=>{
//         console.log(l);
//     },3000)
//     return l;
// }

// for(var l=0;l<=6;l++){
//     console.log(y(l));
// }



//closures
// function x(){
//     var a =7;
//     function y(){
//         console.log(a);

//     }
//     return y;
// }

// var z = x();
// console.log(z);
// z();


// function z(){
//     var b = 900;
//     function x(){
//         var a =7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();


function z(){
    let count = 0;
    function inc(){
        count++;
        console.log(count);
    }
    return inc;
}

let x = z();
x();
x();


// function z(){
//     var count =0;
//     console.log(count);
//     return {
//         inc: function(){
//             count++;
//             console.log(count);
//         },
//         dec: function(){
//             count--;
//             console.log(count);
//         }
//     }
// }


// var x= z();
// x.inc();
// x.inc();
// z().inc();
// z().inc();