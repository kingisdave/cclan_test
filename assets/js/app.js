
let state = false;

// function for the input value errors display
// for generating qrcode
geninput=()=>{
    if(myPhone.value == ''){
        myPhoneRes.innerHTML = "<small class='text-danger'>Enter your Phone Number</small>";
    } else{
        myPhoneRes.innerHTML = "";
    }
    if(myPhone.value != "" && myPhoneRes.innerHTML == ""){
        generatorBtn.disabled = false;
    }
}

// for login inputs
loginput=(e)=>{
    if (e == 'logemail') {
        if(mymail.value == ''){
            mailRes.innerHTML = "<small class='text-danger'>Enter your email</small>";
        } else{
            mailRes.innerHTML = "";
        }
    }
    else if (e == 'logpassword') {
        if(mypass.value == ''){
            passRes.innerHTML = "<small class='text-danger'>Enter your Password</small>";
        } else{
            passRes.innerHTML = "";
        }
    }
    if(mymail.value != "" && mailRes.innerHTML == "" && mypass.value != "" && passRes.innerHTML == ""){
        loggerbtn.disabled = false;
    }
}

// for register inputs
reginput=(e)=>{
    if (e == 'fullName') {
        if(fName.value != '' && fName.value.length >= 3){
            fNameRes.innerHTML = "";
        } else{
            fNameRes.innerHTML = "<small class='text-danger'>Enter your Name</small>";
        }
    }
    else if (e == 'email') {
        if(email.value == ''){
            emailRes.innerHTML = "<small class='text-danger'>Enter your email</small>";
        } else if (email.value.length <= 3) {
            emailRes.innerHTML = "<small class='text-danger'>Enter atleast 4 characters</small>";
        } else{
            emailRes.innerHTML = "";
        }
    }
    else if (e == 'phoneNo') {
        if(phoneNo.value == ''){
            phoneNoRes.innerHTML = "<small class='text-danger'>Enter your phone Number</small>";
        } else if (phoneNo.value.length <= 3) {
            phoneNoRes.innerHTML = "<small class='text-danger'>Enter atleast 4 characters</small>";
        } else{
            phoneNoRes.innerHTML = "";
        }
    }
    else if (e == 'password'){
        if(password.value == ''){
            passwordRes.innerHTML = "<small class='text-danger'>Enter your Password</small>";
        } else if (password.value.length <= 3) {
            passwordRes.innerHTML = "<small class='text-danger'>Enter atleast 4 characters</small>";
        } else{
            passwordRes.innerHTML = "";
        }
    }

    if(fName.value.length > 0 && fNameRes.innerHTML == "" && email.value.length > 0 && emailRes.innerHTML == "" && 
        phoneNo.value.length > 0 && phoneNo.innerHTML == "" && password.value.length > 0 && passwordRes.innerHTML == ""){
        createAccBtn.disabled=false;
    }else{
        createAccBtn.disabled=true;
    }
}

// This is the password show and hide function
togimage=()=>{
    if (mypassword.type == "password") {
        mypassword.type = "text";
        imgmi.src="/images/icons/eyeclose.png";
    } else {
        mypassword.type = "password";
        imgmi.src="/images/icons/eye.png";
    }
}
