function enableValidation () {
  const inputs = document.querySelectorAll(".popup__input");
  inputs.forEach(function(input) {
    input.addEventListener("input", function(event) {
      const inputElement = event.target;
      const errorElement = inputElement.closest(".popup__container").querySelector(".popup__error");
      if(inputElement.validity.valid) {
        hideInputError(errorElement);
      } else {
        showInputError(errorElement, inputElement.validationMessage);
      }
    });
  })
}

function hideInputError(errorElement) {

  errorElement.classList.remove("popup__error-active");
}

function showInputError(errorElement, message) {
  errorElement.classList.add("popup__error-active")
  errorElement.textContent = message;
}

enableValidation({ //permite validar os diferentes formularios
  formSelector: ".popup__form", //alterar classe?
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button", //alterar classe?
  inactiveButtonClass: "popup__button_disabled", //alterar classe?
  inputErrorClass: "popup__input_type_error", //alterar classe?
  errorClass: ".popup__error-active"
}); 


//FORMULARIO PERFIL E PLACES
//const formProfile = document.querySelector(".popup_profile-edit");
//const formPlace = document.querySelector(".popup_place-edit");

//INPUTS INSERIDOS PELO FORMULARIO PERFIL
//const nameInputProfile = document.querySelector(".popup__name");
//const aboutInputProfile = document.querySelector(".popup__aboutme");

//INPUTS INSERIDOS PELO FORMULARIO PLACES
//const subtitleInputPlaces = document.querySelector(".popup__subtitle");
//const linkInputPlaces = document.querySelector(".popup__link"); //input link

//formProfile.addEventListener("submit", (event) =>
//  event.pr eventDefault()
//  if (nameInputProfile.value === "") {
//    alert("Por favor, preencha seu nome");
//    return;
//  }

//);

// console.log("Hello World Validate");





  