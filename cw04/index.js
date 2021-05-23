var addNoteBtn = document.querySelector('#add-note');
var closeBtn = document.querySelector('#close-modal-btn');
var modalEl = document.getElementById('modal');
function revModal() {
    addNoteBtn.addEventListener('click', asa);
}
function hidModal() {
    closeBtn.addEventListener('click', sas);
}
function asa() {
    console.log('dupa');
    modalEl.classList.add('modal--visible');
}
function sas() {
    console.log('au');
    modalEl.classList.remove('modal--visible');
}
revModal();
hidModal();
