//POPUP PERFIL E PLACES
const modalProfile = document.querySelector(".popup_profile-edit");
const modalPlace = document.querySelector(".popup_place-edit");
const modalPictureBig = document.querySelector(".popup_image-bigger");

//EFEITO OPACITY
const opacity = document.querySelector(".fade");

//INFOS INSERIDO PELO POPUP
const nameInputProfile = document.querySelector(".popup__name");
const aboutInputProfile = document.querySelector(".popup__aboutme");

//INFOS EXIBIDOS NO PEFIL
const nameProfile = document.querySelector(".profile__noum");
const aboutProfile = document.querySelector(".profile__hobbie");

//INFOS EXIBIDOS NO POPUP IMAGE BIG
const imageBigger = document.querySelector(".popup__container-image-bigger");
const imageText = document.querySelector(".popup__title-image-bigger");

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
const elementTrash = elementItem.querySelector(".element__img-trash");
const elementLike = document.querySelector(".element__img-like-button");
const addNomePlace = elementItem.querySelector(".element__text");
const addLinkPlace = elementItem.querySelector(".element__picture");

//INFO PERFIL = INFO POPUP PERFIL
nameInputProfile.value = nameProfile.textContent;
aboutInputProfile.value = aboutProfile.textContent;

//INFOS INSERIDO PELO POPUP PLACES
const subtitleInputPlaces = document.querySelector(".popup__subtitle");
const linkInputPlaces = document.querySelector(".popup__link");

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

// FUNÇÃO FECHAR COM ESC
const escClick = function (event) {
  if (event.key === "Escape") {
    modalProfile.classList.remove("popup_opened");
    modalPlace.classList.remove("popup_opened");
    modalPictureBig.classList.remove("popup_opened");
    opacity.classList.remove("fade_on");
    document.removeEventListener("keydown", escClick);
  }
};

// FUNÇÃO NÃO FECHAR COM ENTER
const enterClick = function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("funcemina");
  }
};

//FUNÇÃO FECHAR POPUPS
const closePopup = function () {
  modalProfile.classList.remove("popup_opened");
  modalPlace.classList.remove("popup_opened");
  modalPictureBig.classList.remove("popup_opened");
  opacity.classList.remove("fade_on");
};

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

//BOTAO ABRIR POPUP PERFIL E FECHAR CLICANDO ESC
editButton.addEventListener("click", function () {
  modalProfile.classList.add("popup_opened");
  opacity.classList.add("fade_on");
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalProfile.classList.remove("popup_opened");
    opacity.classList.remove("fade_on");
  }
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
document.addEventListener("mousedown", (event) => {
  if (
    !modalProfile.contains(event.target) &&
    !modalPlace.contains(event.target) &&
    !modalPictureBig.contains(event.target)
  ) {
    modalProfile.classList.remove("popup_opened");
    opacity.classList.remove("fade_on");
    console.log("ok", event.target);
  }
  document.removeEventListener("mousedown", event);
});

//BOTAO ABRIR POPUP PLACES  E FECHAR CLICANDO ESC
addButton.addEventListener("click", function () {
  modalPlace.classList.add("popup_opened");
  opacity.classList.add("fade_on");
  createButton.disabled = true;
  createButton.classList.add("popup__button-create-disabled");
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalPlace.classList.remove("popup_opened");
    opacity.classList.remove("fade_on");
  }
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
document.addEventListener("mousedown", (event) => {
  if (
    !modalPlace.contains(event.target) &&
    !modalProfile.contains(event.target) &&
    !modalPictureBig.contains(event.target)
  ) {
    modalPlace.classList.remove("popup_opened");
    opacity.classList.remove("fade_on");
    console.log("ok", event.target);
  }
  document.removeEventListener("mousedown", event);
});

//BOTAO ABRIR IMAGEM E FECHAR CLICANDO ESC
elements.addEventListener("click", (event) => {
  if (event.target.classList.contains("element__picture")) {
    modalPictureBig.classList.add("popup_opened");
    opacity.classList.add("fade_on");

    const bigPicture = event.target;

    imageText.textContent = bigPicture.alt;
    imageBigger.src = bigPicture.src;
    imageBigger.alt = bigPicture.alt;

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        modalPictureBig.classList.remove("popup_opened");
        opacity.classList.remove("fade_on");
      }
    });
  }
});
document.addEventListener("mousedown", (event) => {
  if (
    !modalPlace.contains(event.target) &&
    !modalProfile.contains(event.target) &&
    !modalPictureBig.contains(event.target)
  ) {
    modalPictureBig.classList.remove("popup_opened");
    opacity.classList.remove("fade_on");
    console.log("ok", event.target);
  }
  document.removeEventListener("mousedown", event);
});

//BOTAO FECHAR POPUP PERFIL
closeButtonProfile.addEventListener("click", closePopup);

//BOTAO FECHAR POPUP PLACES
closeButtonPlace.addEventListener("click", closePopup);

//BOTAO FECHAR POPUP IMAGEM GRANDE
closeButtonPictureBig.addEventListener("click", closePopup);

// BOTAO SALVAR POPUP PERFIL (SAVE INFO)
modalProfile.addEventListener("submit", (event) => {
  event.preventDefault();
  nameProfile.textContent = nameInputProfile.value;
  aboutProfile.textContent = aboutInputProfile.value;
});

//BOTAO SALVAR POPUP PERFIL (CLOSE)
saveButton.addEventListener("click", closePopup);

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
}

//BOTAO CRIAR POPUP PLACES (SAVE INFO)
modalPlace.addEventListener("submit", (event) => {
  event.preventDefault();

  subtitleInputPlaces.value = "";
  linkInputPlaces.value = "";
});

//BOTAO CRIAR POPUP PLACES (CLOSE)
createButton.addEventListener("click", function (closePopup) {
  const tempCard = {
    name: subtitleInputPlaces.value,
    link: linkInputPlaces.value,
  };

  newCard(tempCard);
});

//TECLA ENTER CRIA NOVO CARD
modalPlace.addEventListener("keydown", (event) => {
  if (
    event.keyCode === 13 &&
    subtitleInputPlaces.validity.valid &&
    linkInputPlaces.validity.valid
  ) {
    const tempCard = {
      name: subtitleInputPlaces.value,
      link: linkInputPlaces.value,
    };

    newCard(tempCard);

    event.preventDefault();

    subtitleInputPlaces.value = "";
    linkInputPlaces.value = "";

    modalPlace.classList.remove("popup_opened");
    opacity.classList.remove("fade_on");
  }
});

//BOTAO CRIAR POPUP PLACES (CLOSE)
createButton.addEventListener("click", function (closePopup) {
  const tempCard = {
    name: subtitleInputPlaces.value,
    link: linkInputPlaces.value,
  };

  newCard(tempCard);
});

//BOTAO LIKE PLACES - NAO MEXER
elements.addEventListener("click", (event) => {
  if (event.target.classList.contains("element__img-like-button")) {
    const button_like = event.target;
    const active = button_like.getAttribute("data-liked") === "true";

    if (active) {
      button_like.src = "/images/buttons/botao_curtir.png"; //altera a imagem
      button_like.setAttribute("data-liked", "false");
    } else {
      button_like.src = "/images/buttons/botao_curtir_ativo.png";
      button_like.setAttribute("data-liked", "true");
    }
  }
});

//FUNÇÃO EXCLUIR CARDS
elements.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("element__img-trash")) {
    const button_like = event.target.parentNode.parentNode;
    button_like.remove();
  }
});
