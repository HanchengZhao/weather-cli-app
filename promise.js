var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, 7).then((result) => {
    console.log("result:" + result);
}, (errorMessage) => {
    console.log(errorMessage);
})

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("it worked!");
//         reject("unable to fulfill promise");
//     }, 1500);
    
// });

// somePromise.then((message) => {
//     console.log("Sucess: ", message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// })