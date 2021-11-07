// Using local storage, display the amount of time in days (rounded to a whole number) between
// user visits to this Gallery page by the user's agent (browser). You may elect to display this
// information where you deem fit on the page.

function displayAmountOfTime() {
    const today = Date.now()
    const milliSecondsToDays = 86400000;

    // today visit
    const todayVisit = Math.floor(( today / milliSecondsToDays));

    // store the last time the user visited our site
    let lastVisit = localStorage.getItem('lastvisit');

    // if it's the first visit of the user, just set it to today visit 
    if (lastVisit === 0) {
        lastVisit = todayVisit;
    }
    
    // the amount of time since last visit
    amountOfTime = todayVisit - lastVisit;

    // update the local storage info
    localStorage.setItem("lastvisit", todayVisit);

    // display it on the website (footer)
    document.getElementById("lastvisit").textContent = amountOfTime;
}

window.onload = addEventListener("load", displayAmountOfTime);