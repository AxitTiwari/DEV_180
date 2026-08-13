
// global scope
let age = 20;

// function scope
function say() {
    let new_age = 21;
}

// block scope
{
    let me = "exit";
}

// not works for 'let' but do work when used 'var'
// console.log(me);