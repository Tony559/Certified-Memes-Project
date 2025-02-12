const theDate = new Date;
let monthlol = theDate.getMonth() + 1;
let daylol = theDate.getDate() ;
let yearlol = theDate.getFullYear();

console.log("day = ", daylol);
console.log("month = ", monthlol);
console.log("year = ", yearlol);

let outputdate = document.querySelectorAll(".thedate");
console.log(outputdate);
for (let i = 0; i < outputdate.length; i++) {
    outputdate[i].innerText = `${monthlol}/${daylol}/${yearlol}`
}


let nameInput = document.getElementById("name-grabber").value;
let nameplate = document.querySelectorAll(".nameplatelol");

document.getElementById("submitthatthang").addEventListener("click", () => {
    let nameInput = document.getElementById("name-grabber").value;
    for (let i = 0; i < nameplate.length; i++) {
        nameplate[i].innerText = nameInput;
    }
});







const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Determine if we should move forward or backward
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]"); // Get the currently active slide
        
        // Calculate the new index based on offset
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        console.log("Current active slide index: ", [...slides.children].indexOf(activeSlide));
        console.log("Calculated new index: ", newIndex);

        // Ensure that the index wraps around if it goes out of bounds
        if (newIndex < 0) {
            newIndex = slides.children.length - 1; // Go to the last slide
        }
        if (newIndex >= slides.children.length) {
            newIndex = 0; // Go to the first slide
        }

        console.log("New index after wrap-around: ", newIndex);

        // Remove 'data-active' from the current active slide
        delete activeSlide.dataset.active;

        // Add 'data-active' to the new slide
        slides.children[newIndex].dataset.active = true;
    });
});




let certSelector = document.getElementById("select");
let buttonCont = document.querySelector(".bottombuttons");
let theChecker = 0;
function disabler() { 
    let lilButtons = document.querySelectorAll(`.sillybutton`);
    if (theChecker === 0) {
        for (let i = 0; i < lilButtons.length; i++) {
            lilButtons[i].classList.add("disable");
        }
        buttonCont.classList.add("getActive");
        certSelector.innerText = "Deselect?";
        theChecker++;

    } else {
        buttonCont.classList.remove("getActive");
        for (let i = 0; i < lilButtons.length; i++) {
            lilButtons[i].classList.remove("disable");
        }
        certSelector.innerText = "Select?";
        theChecker--;
    }
    



}


certSelector.addEventListener("click", (disabler));


