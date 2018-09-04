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
