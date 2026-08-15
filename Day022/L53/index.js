
// function change_text() {
//     let fpara = document.getElementById("fpara");
//     fpara.textContent = "hello babbar";

//     fpara.removeEventListener("click", change_text);
// }

// let fpara = document.getElementById("fpara");
// fpara.addEventListener("click", change_text);

// fpara.removeEventListener("click", change_text);

// ----------------------

// let a_ele = document.getElementById("fac");

// function no(event) {
//     event.preventDefault();
//     a_ele.textContent = "click done bhai";
// }

// a_ele.addEventListener("click", no);


// -----------------------
// Avoiding too mant listenrs.
function alertPara(event) {
    alert("You click on: "  + event.target.textContent);
}

// let paras = document.querySelectorAll('p');

// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];

//     para.addEventListener("click", alertPara);
// }

let mydiv = document.getElementById("fdiv");
mydiv.addEventListener("click", alertPara);