const btnSignIn = document.getElementById("signin");
const btnSignUp = document.getElementById("signup");
const container = document.querySelector("body");

btnSignIn.addEventListener('click',() =>{
    console.log(btnSignIn);
    container.className = "sign-in-js";
});

btnSignUp.addEventListener('click',() =>{
    console.log(btnSignUp);
    container.className = "sign-up-js";
});