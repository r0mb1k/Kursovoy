let burger = document.querySelector(".containers"); // получаем кнопку меню
let menu = document.querySelector(".menu"); // получаем меню
burger.addEventListener("click", function () {
  // при нажатии на кнопку меню
  burger.classList.toggle("change"); // меняем класс кнопки меню
  menu.classList.toggle("active"); // меняем класс меню
  if (menu.classList.contains("active")) {
    // если меню активно
    document.body.style.overflow = "hidden"; // запрещаем прокрутку страницы
  } else {
    // если меню не активно
    document.body.style.overflow = "visible"; // разрешаем прокрутку страницы
  }
});

let title_main = document.querySelector(".title_main"); // получаем заголовок главной страницы
let buy_ticket = document.querySelectorAll(".buy_ticket"); // получаем кнопки покупки билетов

buy_ticket.forEach((item) => {
  // перебираем кнопки покупки билетов
  item.addEventListener("click", function () {
    // при нажатии на кнопку покупки билетов
    burger.classList.remove("change"); // удаляем класс кнопки меню
    document.body.style.overflow = "visible"; // разрешаем прокрутку страницы
    menu.classList.remove("active"); // удаляем класс меню
    title_main.scrollIntoView({
      // прокручиваем заголовок главной страницы
      behavior: "smooth", // плавно
      block: "start", // в начало
    });
  });
});

let way = document.querySelector(".way");
let section_about_cards = document.querySelector(".section_about_cards");
way.addEventListener("click", function () {
  burger.classList.toggle("change");
  document.body.style.overflow = "visible";
  menu.classList.toggle("active");
  section_about_cards.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

let stok_btn = document.querySelector(".stok_btn");
let title_stocks = document.querySelector(".title_stocks");
stok_btn.addEventListener("click", function () {
  burger.classList.toggle("change");
  document.body.style.overflow = "visible";
  menu.classList.toggle("active");
  title_stocks.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
let news_btn = document.querySelector(".news_btn");
let title_news = document.querySelector(".title_news");
news_btn.addEventListener("click", function () {
  burger.classList.toggle("change");
  document.body.style.overflow = "visible";
  menu.classList.toggle("active");
  title_news.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

let contact_btn = document.querySelector(".contact_btn");
let title_form = document.querySelector(".title_form");
contact_btn.addEventListener("click", function () {
  burger.classList.toggle("change");
  document.body.style.overflow = "visible";
  menu.classList.toggle("active");
  title_form.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const btns = document.querySelectorAll('.btnn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelector('.modals');


btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
    

  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
  }
});

function questionfunc() {
  var popup = document.getElementById("mpopup");
  popup.classList.toggle("show");
}

function ticketfunc() {
  var popup = document.getElementById("mypopup");
  popup.classList.toggle("show");
}
