// Set date of Countdown
const finishDate = new Date("Apr 28, 2023 9:30:00").getTime();


// Function for get distance bewtween date and current time
function getDistance() {

    // Get current date and time
    const currentTime = new Date().getTime();

    // Calc distance bewteen two dates in ms
    const distanceBetweenDates = finishDate - currentTime;

    // Equivalence calc
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Get distance in dd/hh/mm/ss format
    const days = Math.floor(distanceBetweenDates / day);
    const hours = Math.floor(distanceBetweenDates % day / hour);
    const minutes = Math.floor(distanceBetweenDates % hour / minute);
    const seconds = Math.floor(distanceBetweenDates % minute / second);

    // Print to DOM
    document.querySelector("h1").innerHTML = days + ":" + hours + ":"
    + minutes + ":" + seconds;
};

// Set refresh every second
setInterval(getDistance, 1000)