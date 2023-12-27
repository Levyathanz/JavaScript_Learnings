// Declaring variables.
const clock = document.querySelector('.clock');
const stopwatch = document.querySelector('.stopwatch');
const digitalclock = document.querySelector(".digitalclock")
clock.addEventListener("load", clockinterval);
stopwatch.addEventListener("click", timer);
digitalclock.addEventListener("click", clockinterval);

let IntervalElement;
let timerInterval;
let timercount;
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let hrString = "00";
let minString = "00";
let secString = "00";
let countString = "00";
clockinterval();

// Digital clock Function 
function clockinterval() {
    digitalclock.disabled = true;
    timercount = false;
    clearInterval(timerInterval);
    IntervalElement = setInterval(getTime, 1000);
    getTime();
}

// Function to get Time in Digital clock.
function getTime() {
    digitalclock.classList.add("js-selected");
    stopwatch.classList.remove("js-selected");
    stopwatch.classList.add("js-select");
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();

    midday = 0;

    if (hour > 12) {
        hour = hour - 12;
        midday = 1;
    }

    hour == 0 ? hour = 12 : hour;
    hour < 10 ? hour = '0' + hour : hour;
    minute < 10 ? minute = '0' + minute : minute;
    seconds < 10 ? seconds = '0' + seconds : seconds;

    clock.innerHTML = `<div><span>${hour}:${minute}:${seconds}</span>
    <span class="js-midday">
    <span class="js-midday-A">AM</span>
    <span class="js-midday-P">PM</span>
    </span>
    </div>`

    let AM = document.querySelector('.js-midday-A').classList;
    let PM = document.querySelector('.js-midday-P').classList;
    if (midday == 1) {
        PM.add('js-midday-light');
    } else {
        AM.add('js-midday-light');
    }

}

// Function for stop watch.
function timer() {
    clearInterval(IntervalElement);
    digitalclock.disabled = false;
    clock.innerHTML = `<div class="js-stopwatch" ><span>${hrString}:${minString}:${secString}:${countString}</span>
    </div>
    <div class="js-stopwatch-element" >
    <button class="js-stopwatch-btn" id="start" >START</button>
    <button class="js-stopwatch-btn" id="stop">STOP</button>
    <button class="js-stopwatch-btn" id="reset">RESET</button></div>`

    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");

    stop.disabled = true;
    stop.classList.add("js-clicked");

    start.addEventListener('click', () => {
        start.disabled = true;
        stop.disabled = false;
        timercount = true;
        timerInterval = setInterval(startcount, 10);
        start.classList.add("js-clicked");
        stop.classList.remove("js-clicked");
    })
    stop.addEventListener('click', function () {
        stop.disabled = true;
        start.disabled = false;
        timercount = false;
        clearInterval(timerInterval);
        start.classList.remove("js-clicked");
        stop.classList.add("js-clicked");
    });

    reset.addEventListener('click', function () {
        clearInterval(timerInterval);
        start.disabled = false;
        stop.disabled = false;
        hour = 0;
        minute = 0;
        second = 0;
        count = 0;
        timercount = false;
        format();
        start.classList.remove("js-clicked");
        stop.classList.add("js-clicked");
    });
    digitalclock.classList.remove("js-selected");
    digitalclock.classList.add("js-select");
    stopwatch.classList.add("js-selected");
}

// Function to start Timer.
function startcount() {
    if (timercount) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        format();
    }
}

// Function that formats the stopwatch timer digits.
function format() {
    hrString = hour;
    minString = minute;
    secString = second;
    countString = count;

    if (hour < 10) {
        hrString = "0" + hrString;
    }

    if (minute < 10) {
        minString = "0" + minString;
    }

    if (second < 10) {
        secString = "0" + secString;
    }

    if (count < 10) {
        countString = "0" + countString;
    }

    document.querySelector(".js-stopwatch").innerHTML = `${hrString}:${minString}:${secString}:${countString}`;
}
