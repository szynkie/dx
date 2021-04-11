let inputBox: HTMLInputElement

const srchButton = document.querySelector('#srchBtn')

srchButtonAction()

function getInput(): void{
    inputBox = document.querySelector('#inputBox')
    console.log(inputBox.value)
}

function srchButtonAction(): void{
    srchButton.addEventListener('click', getInput)
}