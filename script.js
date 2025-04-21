const button = document.querySelector('button')
const form = document.querySelector('.form_section')
const ticket = document.querySelector('.ticket_section')
//input:
const fullName = document.querySelector('#FullName')
const email = document.querySelector('#email')
const github = document.querySelector('#GitHub')

const congratsName = document.querySelector('.name')
const congratsEmail = document.querySelector('.email')

const ticketName = document.querySelector('.name_ticket')
const ticketGitHub = document.querySelector('.ticket_github')
const ticketNumber = document.querySelector('.number')

const ticketData = [ticketName, ticketNumber, ticketGitHub]
const inputData = [fullName, email, github]

const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

button.addEventListener('click', evt => {
    evt.preventDefault();
    if ()
    form.classList.add('hidden');
    ticket.classList.remove('hidden')
    fillData(ticketData, inputData);
})

function fillData(position, data){
    congratsName.innerHTML = fullName.value;
    congratsEmail.innerHTML = email.value;
    
    ticketName.innerHTML = fullName.value;
    ticketGitHub.innerHTML = github.value;
}

function validateEmail(emailInput){
    return emailRegExp.test(String(emailInput).toLowerCase());
}

function checkInput(){
    if (validateEmail(email.value)){
        
    }
}