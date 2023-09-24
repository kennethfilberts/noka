let barSlide = ()=>{
    let div = document.querySelector('.icon');
    let nav = document.querySelector('.navbar');

    div.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
}

barSlide();

let form = document.getElementById("register-form");

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let name = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let gender = document.getElementsByName("gender");
    let cp = document.getElementById("cp");
    let tos = document.getElementById("tos");

    // validation
    // name : panjang antara 1 - 40
    if(name.value.length < 1 || name.value.length > 40){
        alert("Username is invalid!\nMust between 5 - 40 characters !");
        return;
    }

    // gender : harus pilih salah satu gender
    let validGender = false;
    gender.forEach((option)=>{
        if(option.checked){
            validGender = true;
        }
    })

    if(!validGender){
        alert("You must select a gender!");
        return;
    }

    // email : harus ada '@' dan harus diakhiri '.com'
    if(!validateEmail(email.value)){
        alert("Email is invalid!\nMust contain '@' and '.com' !");
        return;
    }

    // password : harus aplhanumeric (ada huruf dan angka)
    if(!validatePassword(password.value) || password.value.length < 8){
        alert("Password is invalid!\nMust contain numbers and alphabets !\nMust have more than 7 characters !");
        return;
    }

    // confirm password : harus sama kek password
    if(password.value != cp.value){
        alert("Password did not match!\nTry again!");
        return;
    }

    // ToS: harus dicheck (centang)
    if(!tos.checked){
        alert("You must agree to the Terms of Service!");
        return;
    }

    // validasikan apakah aku yakin mau submit form ini
    let confirmResult = confirm("Are you sure you want to submit ?");
    if(confirmResult == true){
        alert("Register Success!");
        setInterval('refreshPage()', 1000);
    } else {
        alert("Register Canceled!");
        setInterval('refreshPage()', 1000);
    }
})

function validatePassword(password){
    let length = password.length;

    let huruf = false;
    let angka = false;

    for (let i = 0; i < length; i++){
        let charCode = password.charCodeAt(i)
        if(!isNaN(password[i])){
            angka = true;
        }

        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
            huruf = true;
        }
    }

    if(huruf && angka){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email){
    return email.indexOf('@') != -1 && email.endsWith('.com');
}

function refreshPage() { 
    location.reload(); 
}