//redirecting to homepage
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader');

const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-conds') || null;
const notification = document.querySelector('#notification') || null;

//validations
submitBtn.addEventListener('click', () => {
    if (name != null){//for the sing up page
        if(name.value.length < 6){ 
            showAlert('name must be at least 6 letters long');
        }else if(!email.value.length){
            showAlert('enter your email');
        }else if(password.value.length < 8){
            showAlert('password should be at least 8 symbols long');
        }else if(!number.value.length){
            showAlert('enter your phone number');
        }else if(!Number(number.value) || number.value.length < 10){
            showAlert('invalid number');
        }else if(!tac.checked){
            showAlert('you must agree to our terms and conditions');
        }else{//submit form
            loader.style.display = 'block';
            sendData('/signup', {
                name: name.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
                notification: notification.checked,
            })
        }
    }else{//login page
        if (!email.value.length || !password.value.length){
            showAlert('fill all the inputs')
        }else{
            loader.style.display = 'block';
            sendData('/login',{
                email: email.value,
                password: password.value,
            })
        }
    }
})

//send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response =>{
        processData(response);
    })
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    }else if (data.name){
        //creating authToken
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}

//alert func
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() =>{
        alertBox.classList.remove('show');
    }, 3000);
}