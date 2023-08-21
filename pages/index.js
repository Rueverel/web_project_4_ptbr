const button = document.querySelector(".edit_button");

const modal = document.querySelector("dialog");

const button_close = document.querySelector(".button_close");

button.onclick = function () {
  modal.show()
}

button_close.onclick = function () {
  modal.close()
}