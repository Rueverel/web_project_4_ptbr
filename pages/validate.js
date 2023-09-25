function enableValidation () {
  const inputs = document.querySelectorAll(".popup__input");
  inputs.forEach(function(input) {
    input.addEventListener("input", function(event) {
      const inputElement = event.target;
      const errorElement = inputElement.nextElementSibling;
      if(inputElement.validity.valid) {
        hideInputError(errorElement)
      } else {
        showInputError(errorElement, inputElement.validationMessage)
      }
      if (nameInputProfile.validity.valid && aboutInputProfile.validity.valid) {
        saveButton.disabled = false;
        saveButton.classList.remove("popup__button-save-disabled");
      } else {
          saveButton.disabled = true;
          saveButton.classList.add("popup__button-save-disabled");
      }
      if (subtitleInputPlaces.validity.valid && linkInputPlaces.validity.valid) {
        createButton.disabled = false;
        createButton.classList.remove("popup__button-create-disabled");
      } else {
          createButton.disabled = true;
          createButton.classList.add("popup__button-create-disabled");
      }
    });
  })
}

function hideInputError(errorElement) {
  errorElement.classList.remove("popup__error-active");
};

function showInputError(errorElement, message) {
  errorElement.classList.add("popup__error-active")
  errorElement.textContent = message;
  };


enableValidation({ //permite validar os diferentes formularios
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}); 
