const hourEl = document.querySelector('.hour')
const minEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')

const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


toggle.addEventListener('click', e => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})


function setTime() {
    const time = new Date()

    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours() % 12
    const mins = time.getMinutes()
    const secs = time.getSeconds()


    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`
    minEl.style.transform = `translate(-50%, -100%) rotate(${scale(mins, 0, 59, 0, 360)}deg)`
    secEl.style.transform = `translate(-50%, -100%) rotate(${scale(secs, 0, 59, 0, 360)}deg)`


    timeEl.innerHTML = `${hours == 0 ? `12`: hours}:${mins < 10 ? `0${mins}`: mins}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}



const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


setTime()
setInterval(setTime, 1000)