for (let i = 0; i < 5 * 3; i++) {
    const img = document.createElement('img')
    img.src = `https://source.unsplash.com/random/${getRandomNr()}x${getRandomNr()}`
    document.querySelector('.container').appendChild(img)
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}