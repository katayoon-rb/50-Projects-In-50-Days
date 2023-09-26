const buttons = document.querySelectorAll('.ripple')

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const X = e.clientX - e.target.offsetLeft
        const Y = e.clientY - e.target.offsetTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = Y + 'px'
        circle.style.left = X + 'px'

        this.appendChild(circle)
        setTimeout(() => circle.remove(), 500)
    })
})