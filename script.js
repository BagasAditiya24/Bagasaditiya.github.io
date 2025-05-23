document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("connectKontak");

  button.addEventListener("click", function () {
    window.open("https://wa.me/6281293277441", "_blank");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("connectBtn");
  const target = document.getElementById("connect");

  button.addEventListener("click", function () {
    target.scrollIntoView({ behavior: "smooth" });
  });
});
