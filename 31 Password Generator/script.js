const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const symbols = '!@#$%^&*(){}[]=<>/,.'
const randomFunc = {
    lower: () => String.fromCharCode(Math.floor(Math.random() * 26) + 97),
    upper: () => String.fromCharCode(Math.floor(Math.random() * 26) + 65),
    number: () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),
    symbol: () => symbols[Math.floor(Math.random() * symbols.length)]
}


clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;
    if (!password) { return; }

    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!')
})


generateEl.addEventListener('click', () => {
    resultEl.innerText = generatePassword(lowercaseEl.checked,
                            uppercaseEl.checked, numbersEl.checked,
                            symbolsEl.checked, +lengthEl.value)
})



function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}]
                        .filter(item => Object.values(item)[0])
    
    if (typesCount === 0) { return '' }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}
