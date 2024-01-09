
// Declaring Variables and assigning to DOM elements.
const body = document.querySelector('body');
const HourNeedle = document.querySelector(".hour");
const MinuteNeedle = document.querySelector(".minute");
const SecondNeedle = document.querySelector(".second");


// Function to get Date & Time.
const updateTime = () => {

    let date = new Date(),
        DegForSec = (date.getSeconds() / 60) * 360,
        DegForMin = (date.getMinutes() / 60) * 360,
        DegForHrs = (date.getHours() / 12) * 360;

    SecondNeedle.style.transform = `rotate(${DegForSec}deg)`;
    MinuteNeedle.style.transform = `rotate(${DegForMin}deg)`;
    HourNeedle.style.transform = `rotate(${DegForHrs}deg)`;
}

// SetInterval makes the clock runs for every 1 seconds.
setInterval(updateTime, 1000);

// Invoking the Function.
updateTime();