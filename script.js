const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const switchBtn = document.querySelector('.switch-btn');
const container = document.querySelector('.container');
const clock = document.querySelector('.clock');


let _hour = 0, _minutes = 0, _seconds = 0;


const setSecond = setInterval(() => {
    _seconds++;
    seconds.textContent = format(_seconds);
    if (_seconds == 60) _seconds = 0;
}, 1000);
const setMinutes = setInterval(() => {
    _minutes++;
    minutes.textContent = format(_minutes);
    if (_minutes == 60) _minutes = 0;
}, 60000);
const setHour = setInterval(() => {
    _hour++;
    hour.textContent = _hour;
    if (_hour == 24) _hour = format(_hour);
}, 360000000);
setSecond;
setMinutes;
setHour;


function format(number) {
    return ('0' + number).slice(-2);
}

switchBtn.addEventListener('click', () => {
    container.classList.toggle('dark');
    clock.classList.toggle('dark-shadow');
    switchBtn.classList.toggle('dark-shadow');
});

