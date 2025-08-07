// const result=new Promise(function(resolve, reject){
//     var x=10
//     if(x>10){
//         resolve("Success")
//     }else{
//         reject("Failure")
//     }
// })
//
// console.log(result)


//2

// const result=new Promise(function(resolve,reject){
//     var x=10
//     if(x==10){
//         resolve()
//     }
//     else{
//         reject()
//     }

// })
// console.log(result)


//for pending
const result=new Promise(function(resolve,reject){
    var x=10
    if(x==10){
       // resolve()
    }
    else{
      //  reject()
    }

})
console.log(result)


//.then->if it is completed the what we do
const result1=new Promise(function(resolve,reject){
    var x=10
    if(x!=10){
        resolve()
    }
    else{
       reject()
    }

})
console.log(result1)
result1.then(function(){
    console.log("success")
})
//.catch if it is wrong
.catch(function(){
    console.log("fail")
})

//changing the functions in to depending using promisies and link that 3 functions

// function fun1(){
//     return new Promise(function(resolve){
//         setTimeout(function () {
//             resolve()
//         },1000)
//     })
// }
// function fun2(value){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve()
//         },1000)
//     })
// }
// function fun3(value){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve()
//         },1000)
//     })
// }

// fun1().then(function(){
//     console.log("fun1 is completed")
//     fun2().then(function(){
//         console.log("fun2 is completed")
//         fun3().then(function(){
//             console.log("fun3 is completed")
//         })
//     })
// })


function fun1(){
    return new Promise(function(resolve){
        setTimeout(function () {
            resolve(1)
        },1000)
    })
}
function fun2(value){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(value+1)
        },1000)
    })
}
function fun3(value){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(value+1)
        },1000)
    })
}
//.THEN FUNCTION
// fun1().then(function(res1){
//     console.log("fun1 is completed",res1)
//     fun2(res1).then(function(res2){
//         console.log("fun2 is completed",res2)
//         fun3(res2).then(function(res3){
//             console.log("fun3 is completed",res3)
//         })
//     })
// })

//await->if you want to wait for the function to complete they use await and they need to be in async function
// async function Execute(){
//     const res1 = await fun1();
//     console.log("fun1 is completed", res1);
//     const res2 = await fun2(res1);
//     console.log("fun2 is completed", res2);
//     const res3 = await fun3(res2);
//     console.log("fun3 is completed", res3);
// }
// Execute();

//another method to use async and await
// async function Execute(){
//     try {
//         const res1 = await fun1();
//         console.log("fun1 is completed", res1);
//         const res2 = await fun2(res1);
//         console.log("fun2 is completed", res2);
//         const res3 = await fun3(res2);
//         console.log("fun3 is completed", res3);
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// }
// Execute();

//another 
async function Execute(){
    try {
        const res1 = await fun1();

        
        const res2 = await fun2(res1);
        
        const res3 = await fun3(res2);
        console.log(res3)
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
Execute();  