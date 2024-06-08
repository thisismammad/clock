const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const switchBtn = document.querySelector('.switch-btn');
const container = document.querySelector('.container');
const clock = document.querySelector('.clock');




setInterval(() => {
    let date = new Date();
    hour.textContent = format(date.getHours());
    minutes.textContent= format(date.getMinutes());
    seconds.textContent = format(date.getSeconds());
},1000)


function format(number) {
    return ('0' + number).slice(-2);
}

switchBtn.addEventListener('click', () => {
    container.classList.toggle('dark');
    clock.classList.toggle('dark-shadow');
    switchBtn.classList.toggle('dark-shadow');
});

