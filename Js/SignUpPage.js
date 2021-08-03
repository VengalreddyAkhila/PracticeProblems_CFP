window.addEventListener('DOMContentLoaded',(event) => {    
    var name = document.querySelector("#name");
    var button = document.querySelector("#button");
    var textError = document.querySelector(".text-error");
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
    name.addEventListener("input",function() {
        if(nameRegex.test(name.value))
        {
          textError.textContent = "Valid name";
          button.disabled = false;
        }                
        if(!nameRegex.test(name.value))
        {
        textError.textContent = "invalid name";
        button.disabled =true;
        }       
    }); 
var number = document.querySelector("#PhoneNumber");
var button = document.querySelector("#button");
var textError = document.querySelector(".text-error");
number.addEventListener("input", function () {
  let numberRegex = RegExp("^[0-9]{10,}$");
  if (numberRegex.test(number.value)) {
    textError.textContent = "";
    button.disabled = false;
  }
  if (number.value >= 0 && number.value.length < 10) {
    textError.textContent ="Invalid Phone Number";
    button.disabled = true;
  }
  if (!number.value > 0) {
    textError.textContent ="Invalid Phone Number";
    button.disabled = true;
  }
});
 var email = document.querySelector("#emailid");
 var button = document.querySelector("#button");
var textError = document.querySelector(".text-error");
email.addEventListener("input", function () {
  let emailRegex = RegExp("^[A-Za-z0-9]+[.+-]{0,1}[0-9a-zA-Z]+@[A-Za-z]+[.][A-Za-z]{2,3}(.[a-zA-Z]{2,3}){0,1}$");
  if (emailRegex.test(email.value)) {
    textError.textContent = "";
    button.disabled = false;
  } else {
    textError.textContent = "InvalidEmail";
    button.disabled = true;
  }
});
 var pwd = document.querySelector("#Password");
 var button = document.querySelector("#button");
var textError = document.querySelector(".text-error");
pwd.addEventListener("input", function () {
  let passwordRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()]).{8,}$");
  if (passwordRegex.test(pwd.value)) {
    textError.textContent = "";
    button.disabled = false;
  }
  if (pwd.value.length < 8) {
    textError.textContent = "Password Invalid";
    button.disabled = true;
  } 
  if(!passwordRegex.test(pwd.value)) {
    textError.textContent ="Password Invalid";
    button.disabled = true;
  }
});
});
