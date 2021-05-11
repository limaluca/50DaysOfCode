const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// the last number of each return stands for
// the code of each char on the String Chart
function getRandomLower() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 67)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)]
}