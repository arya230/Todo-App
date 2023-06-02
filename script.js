const addBtn = document.querySelector(".addBtn");
const modalcont = document.querySelector(".modal-cont");

let isModalPresent = false;
addBtn.addEventListener("click", function() {
    if(!isModalPresent) {
        modalcont.style.display = "flex";//modal aa gaya ha
        //screen pe
        
    }
    else {
        modalcont.style.display = "none";
    }
    isModalPresent = !isModalPresent //toggling effect

})
let allPriorityColors = document.querySelectorAll(".priority-color");

allPriorityColors.forEach(function (colorElement) {
    colorElement.addEventListener("click", function() {
        allPriorityColors.forEach(function(priorityColorElem) {
            priorityColorElem.classList.remove("active");
        });
            colorElement.classList.add("active");

    });
});