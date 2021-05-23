const addNoteBtn = document.querySelector('#add-note') as HTMLButtonElement
const closeBtn = document.querySelector('#close-modal-btn') as HTMLButtonElement
let modalEl = document.getElementById('modal') as HTMLElement

function revModal(): void{
    addNoteBtn.addEventListener('click',asa)
}

function hidModal():void{
    closeBtn.addEventListener('click',sas)
}

function asa(): void{
    console.log('dupa')
    modalEl.classList.add('modal--visible')
}

function sas(): void{
    console.log('au')
    modalEl.classList.remove('modal--visible')
}

revModal()
hidModal()