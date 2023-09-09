//POPUP PERFIL E PLACES
const modalProfile = document.querySelector(".popup__profile-edit");
const modalPlace = document.querySelector(".popup__place-edit");
const modalPictureBig = document.querySelector(".popup__image-bigger");

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
const closeButtonPictureBig = document.querySelector(".popup__button-close-image-bigger");

const addButton = document.querySelector(".profile__add-button"); //teste//

const elements = document.querySelector(".elements");
const template = document.querySelector("#element__template");
const elementItem = template.content.cloneNode(true);
const elementList = elementItem.querySelector(".element");  
const elementTrash = elementItem.querySelector(".element__trash");
const elementLike = document.querySelector(".element__img-like-button"); //TESTE LIKE ACTIVE BOTAO EM SI

const addNomePlace = elementItem.querySelector(".element__text");
const addLinkPlace = elementItem.querySelector(".element__picture");

//INFO PERFIL = INFO POPUP PERFIL 
nomeInputProfile.value = nomePerfil.textContent;
aboutInputProfile.value = aboutPerfil.textContent;

//INFO POPUP IMAGE BIGGER = INFO IMAGEM SELECIONADA // TESTE!
nomeInputProfile.value = nomePerfil.textContent;
aboutInputProfile.value = aboutPerfil.textContent;

//INFOS INSERIDO PELO POPUP PLACES
const subtitleInputPlaces = document.querySelector(".popup__subtitle");
const linkInputPlaces = document.querySelector(".popup__link");

//CARTOES INICIAIS
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
]; 

//FUNÇÃO DOS CARDS ORIGINAIS - NAO MEXER
function createCards() {
  const template = document.querySelector("#element__template").content;
  const elements = document.querySelector(".elements");

  initialCards.forEach((cardData) => {
    const elementItem = template.querySelector(".element").cloneNode(true);
    const addNomePlace = elementItem.querySelector(".element__text");
    const addLinkPlace = elementItem.querySelector(".element__picture");

    addNomePlace.textContent = cardData.name;
    addLinkPlace.src = cardData.link;
    addLinkPlace.alt = cardData.name;

    elements.append(elementItem);
  });
}

//chama função para cards originais
createCards();

//BOTAO ABRIR POPUP PERFIL
editButton.addEventListener("click", function(){
  modalProfile.classList.add("popup_opened");
  opaco.classList.add("fade_on");
});

//BOTAO ABRIR POPUP PLACES
addButton.addEventListener("click", function(){
  modalPlace.classList.add("popup_opened");
  opaco.classList.add("fade_on");
});

//BOTAO FECHAR POPUP PERFIL
closeButtonProfile.addEventListener("click", function(){
  modalProfile.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

//BOTAO FECHAR POPUP PLACES
closeButtonPlace.addEventListener("click", function(){
  modalPlace.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

//BOTAO FECHAR POPUP IMAGEM GRANDE
closeButtonPictureBig.addEventListener("click", function(){
  modalPictureBig.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

// BOTAO SALVAR POPUP PERFIL (SAVE INFO)
modalProfile.addEventListener('submit', (event) => {
  event.preventDefault()
  nomePerfil.textContent = nomeInputProfile.value;
  aboutPerfil.textContent = aboutInputProfile.value;
});

//BOTAO SALVAR POPUP PERFIL (CLOSE)
saveButton.addEventListener("click", function(){
  modalProfile.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

//FUNÇÃO DOS NOVOS CARDS
function newCard() {

  const template = document.querySelector("#element__template");      
  const elementItem = template.content.cloneNode(true);               
  const elements = document.querySelector(".elements");                   
  const addNomePlace = elementItem.querySelector(".element__text");
  const addLinkPlace = elementItem.querySelector(".element__picture");

  addNomePlace.textContent = subtitleInputPlaces.value;
  addLinkPlace.src = linkInputPlaces.value;
  addLinkPlace.alt = subtitleInputPlaces.value;
  
    const cardList = elementItem.querySelector(".element");
    elements.prepend(cardList);
};

//BOTAO CRIAR POPUP PLACES (SAVE INFO) - RETIFICAR PORQUE BOTAO CLOSE TAMBEM CRIA CARD?!
modalPlace.addEventListener('submit', (event) => {
  event.preventDefault()

  const tempCard = {
  name: subtitleInputPlaces.value,
  link: linkInputPlaces.value,
  }
  newCard(tempCard);

  subtitleInputPlaces.value = "";
  linkInputPlaces.value = "";
});

//BOTAO CRIAR POPUP PLACES (CLOSE)
createButton.addEventListener("click", function(){
  modalPlace.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

//BOTAO LIKE PLACES - NAO MEXER

elements.addEventListener("click", (event) => {
  if (event.target.classList.contains("element__img-like-button")) {
    const button_like = event.target; 
    const active = button_like.getAttribute("data-liked") === "true";

  if (active) {
    button_like.src = "/images/buttons/like_button.png"; //altera a imagem
    button_like.setAttribute("data-liked", "false");
  
  } else {
    button_like.src = "/images/buttons/like_button_active.png";
    button_like.setAttribute("data-liked", "true");

}}});

//EVENTO DE CLICK PARA ABRIR IMAGEM

elements.addEventListener("click", (event) => {
  if (event.target.classList.contains("element__picture")) {
  modalPictureBig.classList.add("popup_opened");
  opaco.classList.add("fade_on");
  alert("4rd STEP :)");

}});

//1 ST STEP - REAGIR AO CLICAR NA IMAGEM
//2 ND STEP - ABRIR POPUP
//3 RD STEP - POPUP COM BLOCOS FORMADOS (IMAGEM E TEXTO)
// 4RD STEP - POPUP EXIBE A IMAGEM CLICADA E O TEXTO DA MESMA (EM CONSTRUÇÃO)

