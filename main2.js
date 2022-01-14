const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const start = document.getElementById('start')
const pause = document.getElementById('pause')
const reset = document.getElementById('reset')

const timer = () => {
    seconds.textContent = (+seconds.textContent + 1).toString().padStart(2, '0')
    if (+seconds.textContent === 60) {
        minutes.textContent = (+minutes.textContent +1).toString().padStart(2, '0')
        seconds.textContent = '00'
    }
}
const Start = () => {
    timerInterval = setInterval(timer, 1000)
    start.disabled = true;
    pause.disabled = false;
    reset.disabled = false;
}
const Pause = () => {
    clearInterval(timerInterval)
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = false;
}
const Reset = () => {
    clearInterval(timerInterval)
    minutes.textContent = `00`
    seconds.textContent = `00`
    start.disabled = false;
    pause.disabled = false;
    reset.disabled = true;
}