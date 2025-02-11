const theDate = new Date;

let monthlol = theDate.getMonth() + 1
let daylol = theDate.getDate() 
let yearlol = theDate.getFullYear()
console.log("day = ", daylol)
console.log("month = ", monthlol)
console.log("year = ", yearlol)

let outputdate = document.querySelectorAll(".thedate");
console.log(outputdate);
for (let i = 0; i < outputdate.length; i++) {
    outputdate[i].innerText = `${monthlol}/${daylol}/${yearlol}`
}

let nameInput = document.getElementById("name-grabber").innerText;
console.log(nameInput);
let nameplate = document.querySelectorAll(".nameplatelol");
for (let i = 0; i < nameplate.length; i++) {
    nameplate.innerText = nameInput;
}





const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0 ) {
            newIndex = slides.children.length - 1;
        }
        if (newIndex >= slides.children.length) { newIndex = 0 }
            console.log(newIndex);
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })

})

