let it = document.querySelectorAll(".grid-item");
// let allrr = document.querySelectorAll(".grid-item");


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

// Function to generate a random color in the format "rgb(r, g, b)"
function getRandomColor() {
    const r = getRandomNumber(0, 255);
    const g = getRandomNumber(0, 255);
    const b = getRandomNumber(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}
let color = "rgb(255, 255, 255)";
let k=0;

let butcos = document.querySelector(".rainbow");
butcos.addEventListener("click", ()=>{
    return k++;
}
)


it.forEach((i) => {
    i.addEventListener("mouseover", () => { 
        
        
        if(k==0)
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
