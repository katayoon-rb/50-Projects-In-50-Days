const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', () => {
    this.className += ' hold' 
    setTimeout(function() {
        this.className = 'invisible', 0
    })
})
fill.addEventListener('dragend', function() {
    this.className = 'fill'
})

for(const empty of empties) {
    empty.addEventListener('dragover', e => e.preventDefault())

    empty.addEventListener('dragenter', function(e) {
        e.preventDefault()
        this.className += ' hovered'
    })

    empty.addEventListener('dragleave', function() {
        this.className = 'empty'
    })

    empty.addEventListener('drop', function() {
        this.className = 'empty'
        this.append(fill)
    })
}
