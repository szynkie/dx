let inputBox: HTMLInputElement

const srchButton = document.querySelector('#srchBtn')
var nameh1 = document.querySelector('#name')
var desch2 = document.querySelector('#desc')
var tempp = document.querySelector('#temp')
var pressp = document.querySelector('#press')

srchButtonAction()
alterPainer()

function getInput(): void{
    inputBox = document.querySelector('#inputBox')
    painter(inputBox.value)
    inputBox.value=""
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
    if(weatherData['cod']!=400 && weatherData['cod']!=404)
    setLocationData(JSON.stringify(weatherData))
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
    
    return (JSON.parse(city))['name']
}

function painter(data){
    getData(data)
    .then(value =>{  if(value['cod']!= "400" && value['cod']!="404")
        nameh1.innerHTML = value['name']
        desch2.innerHTML = value['weather'][0]['description']
        tempp.innerHTML = value['main']['temp'] + "°C"
        pressp.innerHTML = value['main']['pressure'] + "hPa"})
        .catch(err => alert("Invalid data"))
}

function alterPainer(){
    painter(getStorageData())
}