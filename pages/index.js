const modal = document.querySelector(".popup");
const opaco = document.querySelector(".fade");

function abrirModal () {
  modal.classList.add("popup_opened");
  opaco.classList.add("fade_on");

}

function fecharModal () {
  modal.classList.remove("popup_opened");
  opaco.classList.remove("fade_on");

}