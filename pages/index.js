const modal = document.querySelector(".popup");
const opaco = document.querySelector(".fade");
const nomePopup = document.querySelector(".popup__name");
const aboutPopup = document.querySelector(".popup__aboutme");
const nomePerfil = document.querySelector(".profile__noum");
const aboutPerfil = document.querySelector(".profile__hobbie");
const editButton = document.querySelector(".profile__edit-button");
const saveButton = document.querySelector(".popup__button-save");
const closeButton = document.querySelector(".popup__button-close");

nomePopup.value = nomePerfil.textContent;
aboutPopup.value = aboutPerfil.textContent;


editButton.addEventListener("click", function(){
  modal.classList.add("popup_opened");
  opaco.classList.add("fade_on");

});

closeButton.addEventListener("click", function(){
  modal.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

modal.addEventListener('submit', (event) => {
  event.preventDefault()
  nomePerfil.textContent = nomePopup.value;
  aboutPerfil.textContent = aboutPopup.value;

});

saveButton.addEventListener("click", function(){
  modal.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});
