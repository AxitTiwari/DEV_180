

let fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "this is para" + i;

    // no reflow and no repaint
    fragment.appendChild(para);
}

// 1 reflow and 1 repaint
document.body.appendChild(fragment);

