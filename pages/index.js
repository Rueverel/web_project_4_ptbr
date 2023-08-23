const modal = document.querySelector(".popup");
const opaco = document.querySelector(".fade");
const nomePopup = document.querySelector(".popup_name");
const aboutPopup = document.querySelector(".popup_aboutme");
const nomePerfil = document.querySelector(".profile_noum");
const aboutPerfil = document.querySelector(".profile_hobbie");
const editButton = document.querySelector(".edit_button");
const saveButton = document.querySelector(".button_save");
const closeButton = document.querySelector(".button_close");

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

//saveButton.addEventListener("submit", () => {
//  evt.preventDefault();
//  nomePerfil.textContent = nomePopup.value;
//  aboutPerfil.textContent = aboutPopup.value;

//});

//edit()


// TESTE 

2//function editInfo (){
  //modal.classList.remove("popup_opened");
  //opaco.classList.remove("fade_on");
2//  nome.textContent = nome.value;
2//  about.textContent = (about.value);

2//  console.log(nome);
2//  console.log(about);
2//};

2// document.querySelector(".button_save").addEventListener("submit", editInfo);

//document.querySelector(".button_save").addEventListener("submit", function(){
  //modal.classList.remove("popup_opened");
  //opaco.classList.remove("fade_on");
//  nome.textContent = nome.value;
//  hobbie.textContent = hobbie.value;
//});

//document.querySelector(".button_save").addEventListener("submit", function(evt){
//  nomePerfil.textContent = nomePopup.value;
//  aboutPerfil.textContent = aboutPopup.value;
3//  nomePopup = nomePerfil.textContent;
3//  aboutPopup = aboutPerfil.textContent;


//});