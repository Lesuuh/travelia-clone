// PRELOADER

const preloader = document.querySelector("[data-preloader]")

window.addEventListener("load", () => {
    preloader.classList.add("remove")
})



// Function to add event on multiple elements
const addEventOnElements = function(elements, eventType, callback){
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback)
    }
}


// navbar toggler for mobile
const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[dat-overlay]")

const toggleNav = function(){
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
}

addEventOnElements(navTogglers, "click", toggleNav)



/*
HEADER
*/
const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
})