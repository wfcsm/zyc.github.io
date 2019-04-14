// let topNavBar = document.getElementById("topNavBar");
let specialTags = document.querySelectorAll("[data-x]");
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add("offset");
}


setTimeout(() => {
    findClosestAndRemoveOffset();
}, 1000);

window.addEventListener("scroll",()=>{
    findClosestAndRemoveOffset();
})

function findClosestAndRemoveOffset() {
    let min = 0;
    let special = document.querySelectorAll("[data-x]");
    for (let i = 0; i < special.length; i++) {
        if (Math.abs(special[i].offsetTop - window.scrollY) < Math.abs(special[min].offsetTop - window
                .scrollY)) {
            min = i;
        }
    }
    special[min].classList.remove("offset");
    let id = special[min].getAttribute("id");

    // console.log(id);
    let a = document.querySelector("a[href='#" + id + "']");
    // console.log(a);
    let li = a.parentElement;
    let brothersAndMe = li.parentNode.children
    for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove("linehigh");
    }
    li.classList.add("linehigh");
}
