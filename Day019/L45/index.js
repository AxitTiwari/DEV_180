

// function Hoisting
say_my_name("exit");

function say_my_name(name) {
    console.log(name);
}

// variable hoisting

console.log(she);
var she = "sam";

// function -> first class citizens
function say_hello(func, name) {
    console.log(name);
    func();
}

function func() {
    console.log("inside func");
}

say_hello(func, "exit");

function solve(num) {
    return function(num) {
        return num * num;
    }
}

console.log(solve(10)(5));

let ans = solve(10);
ans(5);