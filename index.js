const firstname = document.getElementById("firstname");
const fnWrap = document.getElementById("firstname-i");
const lastname = document.getElementById("lastname");
const lnWrap = document.getElementById("lastname-i");
const email = document.getElementById("email");
const emailWrap = document.getElementById("email-i");
const password = document.getElementById("password");
const passWrap = document.getElementById("password-i");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function () {
  if (firstname.value == "") {
    firstname.classList.toggle("firstname-toggle");
    fnWrap.classList.toggle("input-toggle");
  }
  if (lastname.value == "") {
    lastname.classList.toggle("lastname-toggle");
    lnWrap.classList.toggle("input-toggle");
  }
  if (email.value == "") {
    email.classList.toggle("email-toggle");
    emailWrap.classList.toggle("input-toggle");
  }
  if (password.value == "") {
    password.classList.toggle("password-toggle");
    passWrap.classList.toggle("input-toggle");
  }
});
