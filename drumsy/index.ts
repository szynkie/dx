let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;

let channel1: any[] = []
const A = [];
startApp();

function startApp(): void{
    document.addEventListener('keypress', onKeyDown);
    const btnChannelPlay = document.querySelector('#channel1Play');
    btnChannelPlay.addEventListener('click', onChannel1Play);
    const btnChannelRecord = document.querySelector('#channel1Record');
    btnChannelRecord.addEventListener('click', onChannel1Record);
    getAudio();
}

function onChannel1Play(): void{
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
        
    })
}

function onChannel1Record(): void{
    channel1 = [];
}

function getAudio(){
    clapSound = document.querySelector('[data-sound="clap"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    snareSound = document.querySelector('[data-sound="snare"]');
}

function onKeyDown(ev: KeyboardEvent): void{
    const key = ev.key;
    const time = ev.timeStamp;

    channel1.push({key,time})
    playSound(key);
    
    console.log(ev)
}
function playSound(key: string): void{
    switch(key){
        case 'a':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 's':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 'd':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
    }
   
}