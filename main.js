// header menu button
const tg_btn = document.querySelector(".toggle_button");
const menu = document.querySelector(".menu_list");

tg_btn.addEventListener("click", () => {
    tg_btn.classList.toggle("close");
    menu.classList.toggle("open");
});

// image slide 

let i = 0; // current slide
let j = 5; // total slides

const dots = document.querySelectorAll(".dot_box button");
const images = document.querySelectorAll(".post_cont img")

console.log(images)

const next = () => {
    document.getElementById("post" + (i+1)).classList.remove("active");
    
    i = (j + i + 1) % j ;
    
    document.getElementById("post" + (i+1)).classList.add("active");

    indicator( i + 1 );
}

const prev = () => {
    document.getElementById("post" + (i+1)).classList.remove("active");
    
    i = (j + i - 1) % j ;
    
    document.getElementById("post" + (i+1)).classList.add("active");

    indicator(i+1);

}
