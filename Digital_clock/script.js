const clock = document.querySelector('.clock');

setInterval(() => {
    getTime();
}, 1000);

function getTime() {
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