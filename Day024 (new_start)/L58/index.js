
function outerFunction() {

    let name = "sam";

    // closures
    function innerFunction() {
        console.log(name);
    }

    return innerFunction;
}

let inner = outerFunction();

inner();