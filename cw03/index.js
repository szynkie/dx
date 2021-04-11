var inputBox;
var srchButton = document.querySelector('#srchBtn');
srchButtonAction();
function getInput() {
    inputBox = document.querySelector('#inputBox');
    console.log(inputBox.value);
}
function srchButtonAction() {
    srchButton.addEventListener('click', getInput);
}
