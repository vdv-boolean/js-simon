// Get current date and time
const currentTime = new Date().getTime();

// Add date of Countdown
const finishDate = new Date("Apr 28, 2023 9:30:00").getTime();

// Print two dates in ms
console.log(currentTime, finishDate)


// Calc distance bewteen two dates in ms
const distanceBetweenDates = finishDate - currentTime;

console.log(distanceBetweenDates);

