// Using local storage, display the amount of time in days (rounded to a whole number) between
// user visits to this Gallery page by the user's agent (browser). You may elect to display this
// information where you deem fit on the page.

function displayAmountOfTime() {
    const todayVisit = Date.now()
    
    // store the last time the user visited our site
    let lastVisit = localStorage.getItem('lastvisit');

    // check the lastVisit value
    if (lastVisit == null) {
        localStorage.setItem("lastvisit", todayVisit);
    }
    // the amount of time since last visit
    amountOfTime = todayVisit - lastVisit;

    // convert it to be in days
    toDays = Math.floor(amountOfTime / (1000 * 60 * 60 * 24));

    // update the local storage info
    localStorage.setItem("lastvisit", todayVisit);

    // display it on the website (footer)
    document.getElementById("lastvisit").textContent = toDays;
}

window.onload = addEventListener("load", displayAmountOfTime);