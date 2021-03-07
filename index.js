var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInputs();
        this.watchInput();
    };
    StatsApp.prototype.getInputs = function () {
        this.data1Input = document.querySelector('#data1');
        this.data2Input = document.querySelector('#data2');
        this.data3Input = document.querySelector('#data3');
        this.data4Input = document.querySelector('#data4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    StatsApp.prototype.computeData = function () {
        var data1 = +this.data1Input.value;
        var data2 = +this.data2Input.value;
        var data3 = +this.data3Input.value;
        var data4 = +this.data4Input.value;
        var dataSum = data1 + data2 + data3 + data4;
        var dataAvg = dataSum / 4;
        var dataMin = Math.min(data1, data2, data3, data4);
        var dataMax = Math.max(data1, data2, data3, data4);
        this.sumInput.value = dataSum.toString();
        this.avgInput.value = dataAvg.toString();
        this.minInput.value = dataMin.toString();
        this.maxInput.value = dataMax.toString();
    };
    StatsApp.prototype.watchInput = function () {
        var _this = this;
        this.data1Input.addEventListener('input', function () { return _this.computeData(); });
        this.data2Input.addEventListener('input', function () { return _this.computeData(); });
        this.data3Input.addEventListener('input', function () { return _this.computeData(); });
        this.data4Input.addEventListener('input', function () { return _this.computeData(); });
    };
    return StatsApp;
}());
var statsApp = new StatsApp();
