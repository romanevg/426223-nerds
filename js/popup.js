
const link = document.querySelector(".contacts-block__button");
const popup = document.querySelector(".modal-letter");
const close = document.querySelector(".modal-close");

const name = popup.querySelector("[name=name]");
const email = popup.querySelector("[name=email]");
const form = popup.querySelector("form");

const storage = localStorage.getItem("email");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    email.value = storage;
    name.focus();
  }
  else {
    email.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  }
  else {
    localStorage.setItem("email", email.value);
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    }
  }
})
