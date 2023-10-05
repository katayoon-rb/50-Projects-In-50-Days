const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', e => {
    const blurValue = 20 - e.target.value.length * 2
    background.style.filter = `blur(${blurValue}px)`
})