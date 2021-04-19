let inputBox: HTMLInputElement

const srchButton = document.querySelector('#srchBtn')
var nameh1 = document.querySelector('#name')

srchButtonAction()

function getInput(): void{
    inputBox = document.querySelector('#inputBox')
    painter(inputBox.value)
}

function srchButtonAction(): void{
    srchButton.addEventListener('click', getInput)
}

async function getData(city: string): Promise<any> {
    const apiKey = "ca4cb1a7df8506f208999f1975cb5627"

    const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const weatherResp = await fetch(apiURL)
    const weatherData = await weatherResp.json()
    //console.log(weatherData)
    return weatherData
}

function setLocationData(city){
    localStorage.setItem('city',city)
}

function getStorageData(){
    var city = "krakow"
    if (localStorage.getItem('city') === null) {

    } else {
        city = localStorage.getItem('city')
    }
    return city
}

function painter(data){
    getData(data)
    .then(value => 
        nameh1.innerHTML = value['name'])
}