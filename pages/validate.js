enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}); 

//FORMULARIO PERFIL E PLACES
const formProfile = document.querySelector(".popup_profile-edit");
const formPlace = document.querySelector(".popup_place-edit");

//INPUTS INSERIDOS PELO FORMULARIO PERFIL
const nameInputProfile = document.querySelector(".popup__name");
const aboutInputProfile = document.querySelector(".popup__aboutme");

//INPUTS INSERIDOS PELO FORMULARIO PLACES
const subtitleInputPlaces = document.querySelector(".popup__subtitle");
const linkInputPlaces = document.querySelector(".popup__link");

//formProfile.addEventListener("submit", (event) =>
//  event.preventDefault()
//  if (nameInputProfile.value === "") {
//    alert("Por favor, preencha seu nome");
//    return;
//  }

//);