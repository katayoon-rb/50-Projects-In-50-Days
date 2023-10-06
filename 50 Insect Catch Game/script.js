const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('start-btn')

let seconds = 0
let score = 0
let selected_insect = {}


start_btn.addEventListener('click', () => screens[0].classList.add('up'))

document.querySelectorAll('.choose-insect-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt }

        screens[1].classList.add('up')

        setTimeout(createInsect, 1000)
        setInterval(function() {
            let m = Math.floor(seconds / 60)
            let s = seconds % 60

            m = m < 10 ? `0${m}` : m
            s = s < 10 ? `0${s}` : s

            document.getElementById('time').innerHTML = `Time: ${m}:${s}`
            seconds++
        }, 1000)
    })
})


function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')

    const x = Math.random() * (window.innerWidth - 200) + 100
    const y = Math.random() * (window.innerHeight - 200) + 100

    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', function() {
        score++
        if (score > 19) { document.getElementById('message').classList.add('visible') }
        document.getElementById('score').innerHTML = `Score: ${score}`

        this.classList.add('caught')
        setTimeout(() => this.remove(), 2000)
        setTimeout(createInsect, 1000)
        setTimeout(createInsect, 1500)
    })

    document.getElementById('game-container').appendChild(insect)
}