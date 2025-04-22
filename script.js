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
const githubRegExp = /\B@([a-z0-9](?:-(?=[a-z0-9])|[a-z0-9]){0,38}(?<=[a-z0-9]))/gi;

button.addEventListener('click', evt => {
    evt.preventDefault();
    if (checkInput()){
        form.classList.add('hidden');
        ticket.classList.remove('hidden');
        fillData(ticketData, inputData);
    } else {
        return
    }
})

function fillData(position, data){
    congratsName.innerHTML = fullName.value;
    congratsEmail.innerHTML = email.value;
    
    ticketName.innerHTML = fullName.value;
    ticketGitHub.innerHTML = github.value;
    ticketNumber.innerHTML = "#" + Math.random().toString().slice(2,7);
}

function validateName(nameInput){
    if (nameInput.value != ''){
        document.querySelector('.errorName').classList.add('hidden');
    } else {
        document.querySelector('.errorName').classList.remove('hidden')
    }
}

function validateEmail(emailInput){
    if(emailRegExp.test(String(emailInput).toLowerCase())){
        document.querySelector('.errorEmail').classList.add('hidden')
    } else {
        document.querySelector('.errorEmail').classList.remove('hidden')
    }
}

function validateGitHub(githubInput){
    if(githubRegExp.test(String(githubInput).toLowerCase())){
        document.querySelector('.errorGitHub').classList.add('hidden')
    } else {
        document.querySelector('.errorGitHub').classList.remove('hidden')
    }
}

function checkInput(){
    let counter = 0;
    validateName(fullName);
    validateEmail(email.value);
    validateGitHub(github.value);
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        if (!error.classList.contains('hidden')){
            counter += 1;
        }
    });
    if (counter == 0){
        return true
    } else {
        return false
    }
}