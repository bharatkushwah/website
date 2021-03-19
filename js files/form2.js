var form = document.getElementById('register-form');
var fullName = document.getElementById('fullname');
var userName = document.getElementById('username');
var emailId = document.getElementById('email');
var pass1 = document.getElementById('password');
var pass2 = document.getElementById('password2');

form.addEventListener('submit',function(event){
    event.preventDefault();
    checkinput();
}); 

function checkinput()
{
    var fullnamevalue = fullName.value;
    var usernamevalue = userName.value;
    var emailvalue = emailId.value;
    var pass1value = pass1.value;
    var pass2value = pass2.value;
    
    // fullname form controller functions
    
    if(fullnamevalue==="")
    {
        // add error class
        // show error MSG
        seterrorFor(fullName, 'fill this field');
    }
    else{
        // add success class
        setsuccessFor(fullName);
        // document.getElementById("fullname").value="";
    }
    
    // username form controller functions
    
    if(usernamevalue==="")
    {
        seterrorFor(userName, "fill this field");
    }
    else{
        // add success class
        setsuccessFor(userName);
    }
    
    // email varification functions
    
    if(emailvalue==="")
    {
        seterrorFor(emailId, "fill this field");
        
    }
    else{
        // add success class
        setsuccessFor(emailId);
    }
    // password validation fujnctions
    
    if(pass1value==="")
    {
        seterrorFor(pass1, "fill this field");
    }
    else{
        // add success class
        setsuccessFor(pass1);
    }
    
    // password validation functions
    
    if(pass2value==="")
    {
        seterrorFor(pass2, "fill this field");
    }
    else{
        // add success class
        if(pass1value===pass2value)
        {
            setsuccessFor(pass2);
        }
        else{
            seterrorFor(pass2, "password doesn't match!")
        }
    }
    
}

function seterrorFor(input,msg)
{
    var formcontrol = input.parentElement;
    var small = formcontrol.querySelector('small');
    small.innerText=msg;
    formcontrol.className ='form-control error';
}
function setsuccessFor(input)
{
    var formcontrol = input.parentElement;
    formcontrol.className ='form-control success';
    
}
// function clearform(){
    
//     addDefault(fullName);
// }

// function addDefault(input)
// {
//     var deaf = input.parentElement;
//     deaf.value="";
//     deaf.className = "form-control";

// console.log(fullnamevalue);
// console.log(usernamevalue);
// console.log(emailvalue);
// console.log(pass1value);
// console.log(pass2value);
 function myFunction(){

     var x = document.getElementById('login-form').style.visibility="visible";
     var y = document.getElementById('register-form').style.visibility="hidden";
     var z = document.getElementById("headmsg").innerText='Login';
     var con = document.getElementById('cont').style.height="420px";

 }

 function my2Function(){
    var x = document.getElementById('login-form').style.visibility="hidden";
    var y = document.getElementById('register-form').style.visibility="visible";
    var z = document.getElementById("headmsg").innerText='Register';
    var con = document.getElementById('cont').style.height="680px";
}