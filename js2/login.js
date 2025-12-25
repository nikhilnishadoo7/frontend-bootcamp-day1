
let storedEmail = JSON.parse(localStorage.getItem("eemail"));
let storedPassword = JSON.parse(localStorage.getItem("ppassword"));


let loginEmail = document.getElementById('lEmail');
let loginPassword = document.getElementById('lPassword');
let loginForm = document.getElementById('loginForm');


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(loginEmail.value);
    console.log(loginPassword.value);

    if (storedEmail == loginEmail.value && storedPassword == loginPassword.value) {
        alert("Login successful!");
         localStorage.clear();
    } else {
        alert("Invalid email or password.");
    }
   
});