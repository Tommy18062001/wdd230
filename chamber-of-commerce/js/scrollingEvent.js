const header = document.querySelector("header");
const breakPoint = document.querySelector(".banner");

const options = {
    rootMargin: "-100px",
}

const ourObserver = new IntersectionObserver(function(entries, ourObserver){
    entries.forEach(entry => {
        console.log(entry.target);
        if (!entry.isIntersecting) {
            header.classList.add("scrolled");
        }
        else {
            header.classList.remove("scrolled");
        }
    })
}, options);


ourObserver.observe(breakPoint);