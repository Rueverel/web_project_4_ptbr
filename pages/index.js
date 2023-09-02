const modal = document.querySelector(".popup");
const modalProfile = document.querySelector(".popup__profile-edit");
const modalPlace = document.querySelector(".popup__place-edit");
const opaco = document.querySelector(".fade");
const nomePopup = document.querySelector(".popup__name");
const aboutPopup = document.querySelector(".popup__aboutme");
const nomePerfil = document.querySelector(".profile__noum");
const aboutPerfil = document.querySelector(".profile__hobbie");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button") //teste//
const saveButton = document.querySelector(".popup__button-save");
const createButton = document.querySelector(".popup__button-create"); //teste//
const closeButton = document.querySelector(".popup__button-close");

nomePopup.value = nomePerfil.textContent;
aboutPopup.value = aboutPerfil.textContent;


editButton.addEventListener("click", function(){
  modalProfile.classList.add("popup_opened");
  opaco.classList.add("fade_on");

});

addButton.addEventListener("click", function(){
  modalPlace.classList.add("popup_opened");
  opaco.classList.add("fade_on");

});

closeButton.addEventListener("click", function(){
  modalProfile.classList.remove("popup_opened");
  modalPlace.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

modal.addEventListener('submit', (event) => { // correto??// FALTA BOTAO DE ADICIONAR LOCAL
  event.preventDefault()
  nomePerfil.textContent = nomePopup.value;
  aboutPerfil.textContent = aboutPopup.value;

});

saveButton.addEventListener("click", function(){
  modal.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

createButton.addEventListener("click", function(){
  modal.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});
