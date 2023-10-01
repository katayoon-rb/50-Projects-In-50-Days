const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const slidesLen = slideRight.querySelectorAll('div').length

let activeSlide = 0
slideLeft.style.top = `-${(slidesLen - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))


const changeSlide = (dir) => {
    const sliderHeight = sliderContainer.clientHeight
    if (dir === 'up') {
        activeSlide++
        if (activeSlide > slidesLen - 1) {
            activeSlide = 0
        }
    } else if (dir === 'down') {
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = slidesLen - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlide * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlide * sliderHeight}px)`
}