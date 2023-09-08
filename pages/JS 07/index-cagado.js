//POPUP PERFIL E PLACES
const modalProfile = document.querySelector(".popup__profile-edit");
const modalPlace = document.querySelector(".popup__place-edit");

//EFEITO OPACITY - DESCONTINUAR?
const opaco = document.querySelector(".fade");

//INFOS INSERIDO PELO POPUP
const nomeInputProfile = document.querySelector(".popup__name");
const aboutInputProfile = document.querySelector(".popup__aboutme");

//INFOS EXIBIDOS NO PEFIL
const nomePerfil = document.querySelector(".profile__noum");
const aboutPerfil = document.querySelector(".profile__hobbie");

//BUTOES POPUP PERFIL
const editButton = document.querySelector(".profile__edit-button");
const saveButton = document.querySelector(".popup__button-save");
const createButton = document.querySelector(".popup__button-create"); //teste//
const closeButtonProfile = document.querySelector(".popup__button-close-profile");
const closeButtonPlace = document.querySelector(".popup__button-close-place");

const addButton = document.querySelector(".profile__add-button"); //teste//

const elements = document.querySelector(".elements");
const template = document.querySelector("#element__template");
const elementItem = template.content.cloneNode(true);
const elementList = elementItem.querySelector(".element");
const elementTrash = elementItem.querySelector(".element__trash");
const elementLike = elementItem.querySelector(".element__like-button"); //TESTE LIKE ACTIVE BOTAO EM SI
const elementLike2 = elementItem.querySelector(".element__img-like-button"); //TESTE LIKE ACTIVE IMAGEM

const addNomePlace = elementItem.querySelector(".element__text");
const addLinkPlace = elementItem.querySelector(".element__picture");

//INFO PERFIL = INFO POPUP PERFIL
nomeInputProfile.value = nomePerfil.textContent;
aboutInputProfile.value = aboutPerfil.textContent;

//CARTOES INICIAIS
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

//CRIAÇÃO DOS CARDS ORIGINAIS
function createCards(cardData) {

  const cardTemplate = document.querySelector("#element__template");
  const cardElement = cardTemplate.content.cloneNode(true);
  const elements = document.querySelector(".elements");
  const addNomePlace = cardElement.querySelector(".element__text");
  const addLinkPlace = cardElement.querySelector(".element__picture");

  addNomePlace.textContent = cardData.name;
  addLinkPlace.src = cardData.link;
  addLinkPlace.alt = cardData.name;

  const cardList = cardElement.querySelector(".element");
  elements.append(cardList);
}
//createCards();


//const elementItem = template.querySelector(".element").cloneNode(true);



//BOTAO ABRIR POPUP PERFIL
editButton.addEventListener("click", function () {
  modalProfile.classList.add("popup_opened");
  opaco.classList.add("fade_on");
});

//BOTAO ABRIR POPUP PLACES
addButton.addEventListener("click", function () {
  modalPlace.classList.add("popup_opened");
  opaco.classList.add("fade_on");
});

//BOTAO FECHAR POPUP PERFIL
closeButtonProfile.addEventListener("click", function () {
  modalProfile.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

//BOTAO FECHAR POPUP PLACES
closeButtonPlace.addEventListener("click", function () {
  modalPlace.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

// BOTAO SALVAR POPUP PERFIL (SAVE INFO)
modalProfile.addEventListener("submit", (event) => {
  event.preventDefault();
  nomePerfil.textContent = nomeInputProfile.value;
  aboutPerfil.textContent = aboutInputProfile.value;
});

//BOTAO SALVAR POPUP PERFIL (CLOSE)
saveButton.addEventListener("click", function () {
  modalProfile.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

// criar novos cartões AINDA EM TESTE - BOTAO CRIAR POPUP (SAVE INFO)

modalPlace.addEventListener("submit", (event) => {
  event.preventDefault();

  const tempCard = {
    name: addNomePlace.value,
    link: addLinkPlace.value,
  };
  createCards(tempCard);

  addNomePlace.value = " ";
  addLinkPlace.value = " ";
});

//BOTAO CRIAR POPUP PLACES (CLOSE)
createButton.addEventListener("click", function () {
  modalPlace.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

//BOTAO LIKE PLACES
//try {
elementLike.addEventListener("click", function () {
  const elementLike = elementItem.querySelector(".element__like-button"); //TESTE LIKE ACTIVE BOTAO EM SI
  const elementLike2 = elementItem.querySelector(".element__img-like-button"); //TESTE LIKE ACTIVE IMAGEM
  //elementLike.classList.remove("element__img-like-button");
  elementLike.classList.add("element__img-like-button-active"); //TESTE LIKE ACTIVE
  //img.setAttribute src = "/images/buttons/like_button_active.png";
  //elementLike.setAttribute("src")

  //  this.classList.add("element__img-like-button-active", "true");
  //  //setAttribute("data-clicked", "true");
  //classList.add("element__img-like-button-active");
});
//} catch (error) {
//  console.error(error);
//}
