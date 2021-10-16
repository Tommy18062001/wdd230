const dateObject = new Date();

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const theDay = dateObject.getDay();
const today = dateObject.getDate();
const month = dateObject.getMonth();
const year = dateObject.getFullYear();

/* update the year in the footer*/
document.querySelector("#today").textContent =  weekDay[theDay] + ", " + today + " " + monthNames[month] + " " + year;

/* This will change the class of our nav to collapse */
function toggleMenu() {
    document.getElementById("ourNav").classList.toggle("hide")
}

/* Work on the banner message that will display a message*/
/* Friday = 5 */

if (theDay === 5) {
  document.querySelector("#banner").classList.toggle("show-banner");
}

else {
  document.querySelector("#banner").classList.toggle("hide-banner");
}

