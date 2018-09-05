/*-----логинимся----*/
var logIn = document.querySelector(".login");
var logOut = document.querySelector(".user");
var logExit = document.querySelector(".loginout");

var logInFooter = document.querySelector(".login-footer");
var logOutFooter = document.querySelector(".user-footer");
var logExitFooter = document.querySelector(".loginout-footer");


logIn.addEventListener("click", function () {
    logIn.classList.remove("active");
    logOut.classList.add("active");
    logExit.classList.add("exit");
    logInFooter.classList.remove("active");
    logOutFooter.classList.add("active");
    logExitFooter.classList.add("exit");
});

logExit.addEventListener("click", function () {
    logOut.classList.remove("active");
    logIn.classList.add("active");
    logExit.classList.remove("exit");
    logOutFooter.classList.remove("active");
    logInFooter.classList.add("active");
    logExitFooter.classList.remove("exit");
});


logInFooter.addEventListener("click", function () {
    logIn.classList.remove("active");
    logOut.classList.add("active");
    logExit.classList.add("exit");
    logInFooter.classList.remove("active");
    logOutFooter.classList.add("active");
    logExitFooter.classList.add("exit");
});

logExitFooter.addEventListener("click", function () {
    logOut.classList.remove("active");
    logIn.classList.add("active");
    logExit.classList.remove("exit");
    logOutFooter.classList.remove("active");
    logInFooter.classList.add("active");
    logExitFooter.classList.remove("exit");
});




/*--- переменные для Напишите нам----*/
var link = document.querySelector(".btn-main-contact");
var popup = document.querySelector(".popup-writeus");
/*---- переменные для попап Карты---*/
var linkMaps = document.querySelector(".maps-contact");
var popupMaps = document.querySelector(".popup-maps");
/*---Закрытие окон-----*/
var linkClose = document.querySelector(".close-popup-writeus");
var linkMapsClose = document.querySelector(".close-popup");

/*----Открытие Напишите нам----*/
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});
/*---Открытие Карты----*/
linkMaps.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMaps.classList.add("modal-show");
});
/*----- Закрытие напишите нам----*/
linkClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
/*---- закрытие Карты---*/
linkMapsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMaps.classList.remove("modal-show");
});



/*-----УСЛУГИ---*/

var delivery = document.querySelector(".service1");
var gaurante = document.querySelector(".service2");
var credit = document.querySelector(".service3");

delivery.addEventListener("click", function () {
    delivery.classList.add("active");
    gaurante.classList.remove("active");
    credit.classList.remove("active");
});

gaurante.addEventListener("click", function () {
    gaurante.classList.add("active");
    delivery.classList.remove("active");
    credit.classList.remove("active");
});

credit.addEventListener("click", function () {
    credit.classList.add("active");
    delivery.classList.remove("active");
    gaurante.classList.remove("active");

});
