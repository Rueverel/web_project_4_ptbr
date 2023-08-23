const modal = document.querySelector(".popup");
const opaco = document.querySelector(".fade");

document.querySelector(".edit_button").addEventListener("click", function(){
  modal.classList.add("popup_opened");
  opaco.classList.add("fade_on");
});

document.querySelector(".button_close").addEventListener("click", function(){
  modal.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");
});

// TESTE 

let nome = document.querySelector(".popup_name").textContent;
let about = document.querySelector(".popup_aboutme").textContent;

function editInfo (){
  //modal.classList.remove("popup_opened");
  //opaco.classList.remove("fade_on");
  nome.textContent = nome.value;
  about.textContent = (about.value);
};

document.querySelector(".button_save").addEventListener("submit", editInfo);

//document.querySelector(".button_save").addEventListener("submit", function(){
  //modal.classList.remove("popup_opened");
  //opaco.classList.remove("fade_on");
//  nome.textContent = nome.value;
//  hobbie.textContent = hobbie.value;
//});

console.log(nome);
console.log(about);