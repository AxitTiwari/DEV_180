
// dynamic nature
let obj = {
    age: 20,
    ht: 180,
    wt: 55
};

console.log(obj);

obj.color = "brown";

console.log(obj);

// object clonning
let dest = Object.assign({}, obj);

dest.color = "white";

console.log(dest);


