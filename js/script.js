var link = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");
var form = document.querySelector(".form__box");

if (link) {
  menu.classList.remove("main-nav--show");
  link.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.toggle("main-nav--show");
    link.classList.toggle("main-nav__toggle--close");
  })
}

function hasValue(elem) {
  return elem.value;
}

if (form) {
  var required = form.querySelectorAll("[required]");
  var popupSuccess = document.querySelector(".popup--success");
  var popupFalse = document.querySelector(".popup--fail");
  var buttonOk = popupFalse.querySelector(".form-btn--ok");
  var buttonClose = popupSuccess.querySelector(".form-btn--close");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    for (i = 0; i < required.length; i++) {
      if (!required[i].value) {
        popupFalse.classList.add("popup--show");
        return;
      }
    }
    popupSuccess.classList.add("popup--show");
  });
  buttonOk.addEventListener("click", function(event) {
    popupFalse.classList.remove("popup--show");
  })
  buttonClose.addEventListener("click", function(event) {
    popupSuccess.classList.remove("popup--show");
  })
}