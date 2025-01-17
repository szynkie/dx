var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var inputBox;
var srchButton = document.querySelector('#srchBtn');
var nameh1 = document.querySelector('#name');
var desch2 = document.querySelector('#desc');
var tempp = document.querySelector('#temp');
var pressp = document.querySelector('#press');
var icoscr = document.getElementById("ico");
srchButtonAction();
alterPainer();
function getInput() {
    inputBox = document.querySelector('#inputBox');
    painter(inputBox.value);
    inputBox.value = "";
}
function srchButtonAction() {
    srchButton.addEventListener('click', getInput);
}
function getData(city) {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, apiURL, weatherResp, weatherData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = "ca4cb1a7df8506f208999f1975cb5627";
                    apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
                    return [4 /*yield*/, fetch(apiURL)];
                case 1:
                    weatherResp = _a.sent();
                    return [4 /*yield*/, weatherResp.json()];
                case 2:
                    weatherData = _a.sent();
                    console.log(weatherData);
                    if (weatherData['cod'] != 400 && weatherData['cod'] != 404)
                        setLocationData(JSON.stringify(weatherData));
                    return [2 /*return*/, weatherData];
            }
        });
    });
}
function setLocationData(city) {
    localStorage.setItem('city', city);
}
function getStorageData() {
    var city = "krakow";
    if (localStorage.getItem('city') === null) {
    }
    else {
        city = localStorage.getItem('city');
    }
    return (JSON.parse(city))['name'];
}
function painter(data) {
    getData(data)
        .then(function (value) {
        if (value['cod'] != "400" && value['cod'] != "404") {
            var icon = value['weather'][0]['icon'];
            icoscr.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            nameh1.innerHTML = value['name'];
            desch2.innerHTML = value['weather'][0]['description'];
            tempp.innerHTML = value['main']['temp'] + "°C";
            pressp.innerHTML = value['main']['pressure'] + "hPa";
        }
    })
        .catch(function (err) { return alert("Invalid data"); });
}
function alterPainer() {
    painter(getStorageData());
}
