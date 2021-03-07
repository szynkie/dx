class StatsApp{
    data1Input: HTMLInputElement;
    data2Input: HTMLInputElement;
    data3Input: HTMLInputElement;
    data4Input: HTMLInputElement;

    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;

    constructor(){
        this.startApp();
    }

    startApp(){
        this.getInputs();
        this.watchInput();
    }

    getInputs(){
        this.data1Input = document.querySelector('#data1');
        this.data2Input = document.querySelector('#data2');
        this.data3Input = document.querySelector('#data3');
        this.data4Input = document.querySelector('#data4');

        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }

    computeData(){
        const data1 = +this.data1Input.value;
        const data2 = +this.data2Input.value;
        const data3 = +this.data3Input.value;
        const data4 = +this.data4Input.value;

        const dataSum = data1+data2+data3+data4;
        const dataAvg = dataSum/4;
        const dataMin = Math.min(data1, data2, data3, data4);
        const dataMax = Math.max(data1, data2, data3, data4);
        
        this.sumInput.value = dataSum.toString();
        this.avgInput.value = dataAvg.toString();
        this.minInput.value = dataMin.toString();
        this.maxInput.value = dataMax.toString();
    }

    watchInput(){
        this.data1Input.addEventListener('input', () => this.computeData());
        this.data2Input.addEventListener('input', () => this.computeData());
        this.data3Input.addEventListener('input', () => this.computeData());
        this.data4Input.addEventListener('input', () => this.computeData());
    }
}

const statsApp = new StatsApp();