const nav = document.querySelectorAll('.nav')

document.querySelector('.open-btn').addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

document.querySelector('.close-btn').addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})