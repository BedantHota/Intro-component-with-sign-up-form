var button = document.querySelector(".claimTrial");
var lastName = document.querySelector("#lastName");
var firstName = document.querySelector("#firstName");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var errorIcons = document.querySelectorAll(".error-icon");
var errorText = document.querySelectorAll(".errorText");

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (firstName.value === "") {
    firstName.style.border = "1px solid hsl(0, 100%, 74%) ";
    errorText[0].style.visibility = "visible";
    errorText[0].textContent = "First Name cannot be empty";
    errorIcons[0].style.visibility = "visible";
  } else {
    errorText[0].style.visibility = "hidden";
    errorIcons[0].style.visibility = "hidden";
    firstName.style.border = "1.5px solid hsl(154, 59%, 51%)";
  }

  if (lastName.value === "") {
    errorText[1].style.visibility = "visible";
    errorText[1].textContent = "Last Name cannot be empty";
    lastName.style.border = "1px solid hsl(0, 100%, 74%) ";
    errorIcons[1].style.visibility = "visible";
  } else {
    errorText[1].style.visibility = "hidden";
    errorIcons[1].style.visibility = "hidden";
    lastName.style.border = "1.5px solid hsl(154, 59%, 51%)";
  }

  if (email.value === "") {
    errorText[2].style.visibility = "visible";
    errorText[2].textContent = "Email cannot be empty";
    email.style.border = "1px solid hsl(0, 100%, 74%) ";
    errorIcons[2].style.visibility = "visible";
  } else if (!isEmail(email.value)) {
    errorText[2].style.visibility = "visible";
    errorText[2].textContent = "Looks like this is not an email";
    email.style.color = "hsl(0, 100%, 74%)";
  } else {
    errorText[2].style.visibility = "hidden";
    errorIcons[2].style.visibility = "hidden";
    email.style.border = "1.5px solid hsl(154, 59%, 51%)";
  }

  if (password.value === "") {
    errorText[3].style.visibility = "visible";
    errorText[3].textContent = "Password cannot be empty";
    password.style.border = "1px solid hsl(0, 100%, 74%) ";
    errorIcons[3].style.visibility = "visible";
  } else {
    errorText[3].style.visibility = "hidden";
    errorIcons[3].style.visibility = "hidden";
    password.style.border = "1.5px solid hsl(154, 59%, 51%)";
  }
});

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
