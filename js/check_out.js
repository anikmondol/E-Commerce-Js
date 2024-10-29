// Animations
ScrollReveal().reveal(".top_nav", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
});

ScrollReveal().reveal(".nav", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay: 100,
});

ScrollReveal().reveal(".header", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay: 200,
});

ScrollReveal().reveal(".section", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
});

ScrollReveal().reveal(".footer", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
});



//mobile nav 
const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", e =>{
  mobile_nav.classList.toggle("mobile_nav_hind");
});

//user toggle 
const toggle_icon = document.querySelector(".toggle_icon");
const user_toggle = document.querySelector(".user_toggle");

toggle_icon.addEventListener("click", e =>{
  user_toggle.classList.toggle("user_toggle_hind");
});
