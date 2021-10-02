const myDate = new Date();
const currentYear = myDate.getFullYear();

/* update the year in the footer*/
document.querySelector("#year").textContent = currentYear;