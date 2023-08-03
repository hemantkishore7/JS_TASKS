///////// login  /////////
const form = document.querySelector("#login");
const email = document.querySelector("#email");
const pass = document.getEquerySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

function validation() {
  const emailVal = email.value.trim();
  const passVal = pass.value.trim();

  console.log(emailVal,passVal);

  if (emailVal == "") {
    setError(email, "E-mail is required");
  } else if (!emailValidation(emailVal)) {
    setError(email, "Enter valid email");
  } else {
    setSuccess(email);
  }

  if (passVal == "") {
    setError(pass, "Password is required");
  } else if (passVal.length <= 8) {
    setError(pass, "Password should be minimum 8 charcters");
  } else {
    setSuccess(pass);
  }
}

function emailValidation(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
}

function setError(ele, msg) {
  const inputGrp = ele.parentElement;
  const error = inputGrp.querySelector(".error");
  error.innerText = msg;

  inputGrp.classList.add("error");
  inputGrp.classList.remove("success");
}

function setSuccess(ele) {
  const inputGrp = ele.parentElement;
  const message = inputGrp.querySelector(".error");
  message.innerText = "";

  inputGrp.classList.add("success");
  inputGrp.classList.remove("error");
}
