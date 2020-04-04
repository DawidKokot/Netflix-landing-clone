"use strict"

const navBtns = document.querySelectorAll(".nav-item")
const sections = document.querySelectorAll("section")

//hide all sections and remove borders
const hideAll = () => {
    for (let i = 0; i < 3; i++) {
        sections[i].classList.add("hidden")
        navBtns[i].classList.remove("nav-active");

    }
}

//add border and show given section
const toggleDisplay = (section, btn) => {
    hideAll()
    section.classList.remove("hidden")
    btn.classList.add("nav-active")

}


// add event to nav btns
for (let i = 0; i < 3; i++) {
    navBtns[i].addEventListener("click", () => toggleDisplay(sections[i], navBtns[i]))
}