let email = document.getElementById('email');
let pass =document.getElementById('password');
 let sub = document.getElementById('submitBtn');
 let formsub = document.getElementById('registerForm');
formsub.addEventListener('submit',(e)=>{
e.preventDefault();
alert(email.value);
console.log(email.value);
console.log(pass.value);

localStorage.setItem("eemail",JSON.stringify(email.value));
localStorage.setItem("ppassword",JSON.stringify(pass.value));
let storedEmail = JSON.parse(localStorage.getItem("eemail"));
let storedPassword = JSON.parse(localStorage.getItem("ppassword"));



console.log("Stored Email:", storedEmail.email);
console.log("Stored Password:", storedPassword.pass);
//   window.location.href = "loginpage.html";
});
 
// localStorage.clear();