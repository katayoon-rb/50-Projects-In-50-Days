const container = document.getElementById('container')
const files = [
    'Expanding Cards',
    'Progress Steps',
    'Rotating Navigation',
    'Hidden Search',
    'Blurry Loading',
    'Scroll animation',
    'Split Landing Page',
    'Form Wave Animation',
    'Sound Board',
    'Dad Jokes',
    'Event Keycodes',
    'Faq Collapse',
    'Random Choice Picker',
    'Animated Navigation',
    'Incrementing Counter',
    'Drink Water',
    'Movie App',
    'Background Slider',
    'Theme Clock',
    'Button Ripple Effect',
    'Drag N Drop',
    'Drawing App',
    'Kinetic Loader',
    'Content Placeholder',
    'Sticky Navbar',
    'Double Vertical Slider',
    'Toast Notification',
    'Github Profiles',
    'Double Click Heart',
    'Auto Text Effect',
    'Password Generator',
    'Good Cheap Fast',
    'Notes App',
    'Animated Countdown',
    'Image Carousel',
    'Hoverboard',
    'Pokedex',
    'Mobile Tab Navigation',
    'Password Strength Background',
    '3D Background Boxes',
    'Verify Account UI',
    // ADD //
]



for (let i = 1; i < files.length + 1; i++) {
    const number = i < 10? `0${i}`: i
    container.innerHTML += `
        <div class="project">
            <div>
                <h1>${number}</h1>
                <div class="line"></div>
            </div>
            <div>
                <h2 class="name">${files[i - 1]}</h2>
                <img alt="project ${i} image" src="${number} ${files[i - 1]}/Screen.jpg" />
                <a href="${number} ${files[i - 1]}/index.html">
                    <button type="button">Go to Site</button>
                </a>
            </div>
        </div>
    `
}
