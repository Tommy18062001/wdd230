const ourImages = document.querySelectorAll("img[data-src]");

/*we are going to create a function that will load the image */
const loadImages = function(img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => {img.removeAttribute("data-src")};
}

const options = {
    threshold: 1,
}


if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
            console.log(item.target);
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        else {return;}
    });
    }, 
        options
    );

    ourImages.forEach((img) => {
        observer.observe(img);
    });
} 

// if it's not supported, just load the image as normal
else {
    ourImages.forEach((img) => {
    loadImages(img);
});
}

