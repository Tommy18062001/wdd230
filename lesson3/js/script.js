let dateData = new Date();

let lastUpdated = document.getElementById("myDate");
let myYear = document.getElementById("myYear");

lastUpdated.textContent = document.lastModified;
myYear.textContent = dateData.getFullYear();