let it = document.querySelectorAll(".grid-item");
// let allrr = document.querySelectorAll(".grid-item");
let grd = document.querySelector(".grid-container");
let size = 8;;
let buts2 = document.querySelector(".b1");
buts2.addEventListener("click", () => {
    let col = getRandomColor();
    it.forEach((i) => {
        i.style.backgroundColor = col;
    })
})
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const but3 = document.querySelector(".grid_size");
but3.addEventListener("click", () => {
    size = prompt("Enter Size", 8);
    while (grd.firstChild) {
        grd.removeChild(grd.firstChild);
    }
    // const root = document.documentElement;
    // root.style.setProperty('--size', 'size');
    for (let i = 0; i < size * size; i++) {
        let div1 = document.createElement('div');
        div1.classList.add("grid-item");
        grd.appendChild(div1);
    }
    console.log(size);
    const pp = size;
    console.log(pp);
    grd.style.display = "grid";
    grd.style.gridTemplateColumns = ` repeat(${pp},1fr)`;
    const a = grd.gridTemplateColumns;
    console.log(a);
    grd.style.gridTemplateRows = `repeat(${size},1fr)`;
})
// document.addEventListener('DOMContentLoaded', function () {
//     const numberOfRows = size; // Replace this with your desired number of rows
//     console.log(size);
//     // const gridContainer = document.getElementsByClassName('grid-container');

//     grd.style.gridTemplateRows = `repeat(${numberOfRows}, 1fr)`;
// });
// grd.style.gridTemplateColumns = "repeat(size, 1fr)";

// const changeColorButton = document.querySelector(".grid_size");

// changeColorButton.addEventListener('click', () => {

// });
// grd.setAttribute("style", "grid-template-columns:size;");
// Function to generate a random color in the format "rgb(r, g, b)"
function getRandomColor() {
    const r = getRandomNumber(0, 255);
    const g = getRandomNumber(0, 255);
    const b = getRandomNumber(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}
let color = "rgb(255, 255, 255)";
let k = 0;

let butcos = document.querySelector(".rainbow");
butcos.addEventListener("click", () => {
    return k == 0 ? k = 1 : k = 0;
}
)


it.forEach((i) => {
    i.addEventListener("mouseover", () => {


        if (k == 0)
            i.style.backgroundColor = color;
        else
            i.style.backgroundColor = getRandomColor();

    })
})

it.forEach((i) => {
    i.addEventListener("dblclick", () => { i.style.backgroundColor = "aqua"; })
})
const but1 = document.querySelector(".reset");
but1.addEventListener("click", () => {

    it.forEach((i) => {
        i.style.backgroundColor = "aqua";
    })
});

// addEventListener("mousedown")
