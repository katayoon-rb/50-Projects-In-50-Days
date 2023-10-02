const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [ 'Message 1', 'Message 2', 'Message 3', 'Message 4']
const types = ['info', 'success', 'error']


button.addEventListener('click', () => createNotification())




function createNotification(message = null, type = null) {
    const notif = document.createElement('div')

    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandom(types))

    notif.innerText = message ? message : getRandom(messages)


    toasts.appendChild(notif)
    setTimeout(() => notif.remove(), 3000)
}


function getRandom(thing) {
    return thing[Math.floor(Math.random() * thing.length)]
}