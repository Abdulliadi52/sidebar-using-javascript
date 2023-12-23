const btn = document.getElementById("bar");
const close = document.getElementById("close");
const menu = document.getElementById("menu");

btn.addEventListener("click", function () {
  menu.classList.add("active");
});

close.addEventListener("click", function () {
  menu.classList.remove("active");
});
