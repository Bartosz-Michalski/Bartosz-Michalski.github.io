const contactForm = document.forms["form-contact"];
const nameInput = contactForm["name"];
const emailInput = contactForm["email"];
const messageTextArea = contactForm["message"];

const minimumCharacters = {
  name: 3,
  email: 6,
  message: 10,
};

const validateCondition = {
  0: (value) => value >= minimumCharacters.name,
  1: (value) => value >= minimumCharacters.email,
  2: (value) => value >= minimumCharacters.message,
};

/* ********** INPUTS VALIDATION ********** */

for (let i = 0; i < 3; i++) {
  contactForm[i].addEventListener("input", () => {
    if (validateCondition[i](contactForm[i].value.length)) {
      contactForm[i].classList.remove("form__input--bad-validation");
      contactForm[i].nextElementSibling.innerText = "";
    } else {
      contactForm[i].classList.add("form__input--bad-validation");
      contactForm[i].nextElementSibling.innerText = `* minimum ${minimumCharacters[contactForm[i].name]} characters`;
    }
  });
}

/* ********** FORM SUBMIT VALIDATION ********** */

const actionUrl = "https://formsubmit.co/b2f306b53206d12eac382baf3853be6b";

const formValidation = (e) => {
  //   e.preventDefault();

  const submitCondition = nameInput.value.length >= minimumCharacters.name && emailInput.value.length >= minimumCharacters.email && messageTextArea.value.length >= minimumCharacters.message;

  if (submitCondition) {
    contactForm.method = "POST";
    contactForm.action = actionUrl;
    console.log("form method", contactForm.method);
    console.log("form action", contactForm.action);

    alert("Message was sent!");
  } else {
    alert("Please fill in all fields correctly.");
  }
};

contactForm.addEventListener("submit", formValidation);
