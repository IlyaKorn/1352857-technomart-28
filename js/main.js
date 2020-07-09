var loginLink = document.querySelector(".login-link-red");
var loginPopup = document.querySelector(".pop-up-feedback");
var loginClose = loginPopup.querySelector(".close-button");
var loginForm = loginPopup.querySelector("form");
var loginLogin = loginPopup.querySelector(".input-name");
var loginEmail = loginPopup.querySelector(".input-email");
var loginTextarea = loginPopup.querySelector(".text-area-modal");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("login");
    storageEmail = localStorage.getItem("email");
}   catch (err) {
    isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("pop-up-modal-view");
       
    if (storageName) {
        loginLogin.value = storageName;
        loginEmail.value = storageEmail;
        loginTextarea.focus();
      } else {
        loginLogin.focus();
      }
});

loginClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("pop-up-modal-view");
    loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log("Отправляем форму");
    if (!loginLogin.value || !loginEmail.value) {
        evt.preventDefault();
        loginPopup.classList.remove("modal-error");
        loginPopup.offsetWidth = loginPopup.offsetWidth;
        loginPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", loginLogin.value);
        localStorage.setItem("email", loginEmail.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (loginPopup.classList.contains("pop-up-modal-view")) {
        evt.preventDefault();
        loginPopup.classList.remove("pop-up-modal-view");
        loginPopup.classList.remove("modal-error");
      }
    }
});

var divSlide = document.querySelector(".div-slides");
var buttonLeft = divSlide.querySelector(".left-button");
var buttonRight = divSlide.querySelector(".right-button");
var firstSlide = divSlide.querySelector(".first-slider-item");
var secondSlide = divSlide.querySelector(".second-slider-item");
var leftCircle = divSlide.querySelector(".slides-left-circle");
var rightCircle = divSlide.querySelector(".slides-right-circle");

buttonRight.addEventListener("click", function (evt) {
    divSlide.classList.remove("div-slide-1");
    divSlide.classList.add("div-slide-2");
    firstSlide.classList.remove("toys");
    secondSlide.classList.add("toys");
    leftCircle.classList.remove("slides-button-first");
    rightCircle.classList.add("slides-button-first");
    console.log("Кнопка для перехода на слайд 2 нажата!")
});

buttonLeft.addEventListener("click", function (evt) {
    divSlide.classList.remove("div-slide-2");
    divSlide.classList.add("div-slide-1");
    firstSlide.classList.add("toys");
    secondSlide.classList.remove("toys");
    rightCircle.classList.remove("slides-button-first");
    leftCircle.classList.add("slides-button-first");
    console.log("Кнопка для перехода на слайд 2 нажата!");
});

rightCircle.addEventListener("click", function (evt) {
    divSlide.classList.remove("div-slide-1");
    divSlide.classList.add("div-slide-2");
    firstSlide.classList.remove("toys");
    secondSlide.classList.add("toys");
    leftCircle.classList.remove("slides-button-first");
    rightCircle.classList.add("slides-button-first");
});

leftCircle.addEventListener("click", function (evt) {
    divSlide.classList.remove("div-slide-2");
    divSlide.classList.add("div-slide-1");
    firstSlide.classList.add("toys");
    secondSlide.classList.remove("toys");
    rightCircle.classList.remove("slides-button-first");
    leftCircle.classList.add("slides-button-first");
});

var services = document.querySelector(".services-flex");
var buttonDelivery = services.querySelector(".button-delivery");
var buttonGuarantee = services.querySelector(".button-guarantee");
var buttonCredit = document.querySelector(".button-credit");
var servicesDelivery = document.querySelector(".services-slide-delivery");
var servicesGuarantee = document.querySelector(".services-slide-guarantee");
var servicesCredit = document.querySelector(".services-slide-credit");


buttonDelivery.addEventListener("click", function (evt) {
    buttonDelivery.classList.add("button-view");
    buttonGuarantee.classList.remove("button-view");
    buttonCredit.classList.remove("button-view");
    servicesDelivery.classList.add("services-slide-view");
    servicesGuarantee.classList.remove("services-slide-view");
    servicesCredit.classList.remove("services-slide-view");
});

buttonGuarantee.addEventListener("click", function (evt) {
    buttonGuarantee.classList.add("button-view");
    buttonDelivery.classList.remove("button-view");
    buttonCredit.classList.remove("button-view");
    servicesGuarantee.classList.add("services-slide-view");
    servicesDelivery.classList.remove("services-slide-view");
    servicesCredit.classList.remove("services-slide-view");
});

buttonCredit.addEventListener("click", function (evt) {
    buttonCredit.classList.add("button-view");
    buttonDelivery.classList.remove("button-view");
    buttonGuarantee.classList.remove("button-view");
    servicesCredit.classList.add("services-slide-view");
    servicesDelivery.classList.remove("services-slide-view");
    servicesGuarantee.classList.remove("services-slide-view");
});

var buyBasket = document.querySelectorAll(".change-page-first");
var popupBasket = document.querySelector(".pop-up-basket");
var basketClose = popupBasket.querySelector("button");

buyBasket.forEach(function (evt) {
    evt.addEventListener("click",function (evt) {
        popupBasket.classList.add("modal-buy");
        evt.preventDefault();
        console.log("Нажали кнопочку");
    })
});

basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-buy");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupBasket.classList.contains("modal-buy")) {
        evt.preventDefault();
        popupBasket.classList.remove("modal-buy");
      }
    }
});

var linkMap = document.querySelector(".bottom-map");
var popupMap = document.querySelector(".big-map");
var closeMap = popupMap.querySelector("button");


linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-map");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-map");
});

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("modal-map")) {
        evt.preventDefault();
        popupMap.classList.remove("modal-map");
      }
    }
});