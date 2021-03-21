var clapSound;
var kickSound;
var snareSound;
var channel1 = [];
var A = [];
startApp();
function startApp() {
    document.addEventListener('keypress', onKeyDown);
    var btnChannelPlay = document.querySelector('#channel1Play');
    btnChannelPlay.addEventListener('click', onChannel1Play);
    var btnChannelRecord = document.querySelector('#channel1Record');
    btnChannelRecord.addEventListener('click', onChannel1Record);
    getAudio();
}
function onChannel1Play() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onChannel1Record() {
    channel1 = [];
}
function getAudio() {
    clapSound = document.querySelector('[data-sound="clap"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    snareSound = document.querySelector('[data-sound="snare"]');
}
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({ key: key, time: time });
    playSound(key);
    console.log(ev);
}
function playSound(key) {
    switch (key) {
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
