
// try-catch block

try {
    console.log(x);
}
catch(e) {
    console.log("inside catch block", e);
}
finally {
    console.log("closing everything");
}
console.log("hello");

try {
    console.log(y);
}
catch(e) {
    throw new Error("Bhai pehle declare to kr de");
}