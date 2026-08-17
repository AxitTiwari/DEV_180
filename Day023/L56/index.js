


// asyc. code
// function say_my_name() {
//     console.log("My name is Axit Tiwari");
// }

// setTimeout(say_my_name, 10000);



let promise1 = new Promise((resolve, reject) => {
    let success = true;

    if(success) {
        resolve("Promise Fulfilled");
    }
    else {
        reject("Promise Rejected");
    }
});

promise1
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });