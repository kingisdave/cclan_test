nextbtn.disabled=true;
// var errors = [];
var state = false;

myinp=(e)=>{
    if (e == 'firstname') {
        if(firstn.value == ''){
            firstnmessage.innerHTML = "<small class='text-danger'>Enter your Name</small>";
        } else if (firstn.value.length <= 3) {
            firstnmessage.innerHTML = "<small class='text-danger'>Enter atleast 4 letters</small>";
        } else{
            firstnmessage.innerHTML = "";
        }
    }
    else if (e == 'lastname') {
        if(lastn.value == ''){
            lastnmessage.innerHTML = "<small class='text-danger'>Enter your Lastname</small>";
        } else if (lastn.value.length <= 3) {
            lastnmessage.innerHTML = "<small class='text-danger'>Enter atleast 4 letters</small>";
        } else{
            lastnmessage.innerHTML = "";
        }
    }
    else if (e == 'othernames') {
        if(othernames.value == ''){
            othernmessage.innerHTML = "<small class='text-danger'>Enter your Othernames</small>";
        } else if (othernames.value.length <= 3) {
            othernmessage.innerHTML = "<small class='text-danger'>Enter atleast 4 letters</small>";
        } else{
            othernmessage.innerHTML = "";
        }
    }
        else if (e == 'dob') {
        if(dobi.value == ''){
            dobmessage.innerHTML = "<small class='text-danger'>Enter your Date of Birth</small>";
        } else if (othernames.value) {
            othernmessage.innerHTML = "<small class='text-danger'>Enter atleast 4 letters</small>";
        } else{
            dobmessage.innerHTML = "";
        }
    }
    if(firstn.value !== "" && firstnmessage.innerHTML == "" && lastn.value !== "" && lastnmessage.innerHTML == "" && othernames.value !== "" && othernmessage.innerHTML == ""){
        nextbtn.disabled=false;
    }
}
function nexter(){
    secondstep.style.display = "block";
    firststep.style.display = "none";
    nextbtn.disabled=true;
    prevbtn.style.display = "inline";
}