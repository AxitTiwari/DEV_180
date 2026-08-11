
let obj = {
    name: "axit",
    age: 20,
    height: "5'7",
    weight: 50
}

console.log(obj);

let arr = [1, 2, 3];
console.log(arr);

let new_arr = new Array(1, "love", 3);
console.log(new_arr);

new_arr.push(true);
console.log(new_arr);

new_arr.pop();
console.log(new_arr);

let arr1 = [10, 20, 30];
let ans_arr = arr1.map((number) => {
    return number * number;
})

console.log(ans_arr);

let elements = [1, 2, 3, 4, 5, 6];
let sum = elements.reduce((acc, curr) => {
    return acc + curr;
}, 0)

console.log(sum);

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}

elements.forEach((value, index) => {
    console.log(value);
})

for (let value of elements) console.log(value);