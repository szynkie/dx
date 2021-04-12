let inputBox: HTMLInputElement

const srchButton = document.querySelector('#srchBtn')

srchButtonAction()

function getInput(): void{
    inputBox = document.querySelector('#inputBox')
    getData(inputBox.value)
}

function srchButtonAction(): void{
    srchButton.addEventListener('click', getInput)
}

async function getData(city: string): Promise<any> {
    const apiKey = "ca4cb1a7df8506f208999f1975cb5627"

    const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const weatherResp = await fetch(apiURL)
    const weatherData = await weatherResp.json()
    
    console.log(weatherData)
}
