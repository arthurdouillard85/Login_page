const container = document.querySelector(".container");
const signupButton = document.querySelector(".signup-section header");
const loginButton = document.querySelector(".login-section header");
let inputSignup = document.querySelector(".signup-section .mdp input");
let showBtnSignup = document.querySelector(".signup-section .mdp i");
let inputLogin = document.querySelector(".login-section .mdp input");
let showBtnLogin = document.querySelector(".login-section .mdp i");

showBtnSignup.addEventListener("click", () => {
  if (inputSignup.type === "password") {
    inputSignup.type = "text";
    showBtnSignup.classList.remove("bxs-show");
    showBtnSignup.classList.add("bxs-hide");
  } else {
    inputSignup.type = "password";
    showBtnSignup.classList.remove("bxs-hide");
    showBtnSignup.classList.add("bxs-show");
  }
});

showBtnLogin.addEventListener("click", () => {
  if (inputLogin.type === "password") {
    inputLogin.type = "text";
    showBtnLogin.classList.remove("bxs-show");
    showBtnLogin.classList.add("bxs-hide");
  } else {
    inputLogin.type = "password";
    showBtnLogin.classList.remove("bxs-hide");
    showBtnLogin.classList.add("bxs-show");
  }
});

loginButton.addEventListener("click", () => {
  container.classList.add("active");
});

signupButton.addEventListener("click", () => {
  container.classList.remove("active");
});
