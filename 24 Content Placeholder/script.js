const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile-img')
const AName = document.getElementById('name')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')



setTimeout(getData, 2500)


function getData() {
    header.innerHTML = `<img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg">`
    title.innerHTML = `Lorem ipsum dolor sit amet`
    excerpt.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quo.`
    profileImg.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHwIfa83tAQNOjJdd9LRhjc9LNakC8v3jZnnOWc1dil6XHmsEdaab8z7DYAhcTiT3DGw&usqp=CAU">`
    AName.innerHTML = `John Doe`
    date.innerHTML = `Oct 01, 2023`

    animatedBgs.forEach(bg => {
        bg.classList.remove('animated-bg')
    })
    animatedBgTexts.forEach(bg => {
        bg.classList.remove('animated-bg-text')
    })
}
