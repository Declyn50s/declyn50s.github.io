// Projet HuggyStudio
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");

// Initialisation : le contenu 1 est affiché et son bouton est actif
content1.style.display = "block";
btn1.classList.add("actived");

btn1.addEventListener("click", () => {
  content1.classList.add("fade-right");
  content2.classList.remove("fade-right");
  content3.classList.remove("fade-right");
  content4.classList.remove("fade-right");

  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";

  btn1.classList.add("actived");
  btn2.classList.remove("actived");
  btn3.classList.remove("actived");
  btn4.classList.remove("actived");
});

btn2.addEventListener("click", () => {
  content1.classList.remove("fade-right");
  content2.classList.add("fade-right");
  content3.classList.remove("fade-right");
  content4.classList.remove("fade-right");

  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
  content4.style.display = "none";

  btn1.classList.remove("actived");
  btn2.classList.add("actived");
  btn3.classList.remove("actived");
  btn4.classList.remove("actived");
});

btn3.addEventListener("click", () => {
  content1.classList.remove("fade-right");
  content2.classList.remove("fade-right");
  content3.classList.add("fade-right");
  content4.classList.remove("fade-right");

  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
  content4.style.display = "none";

  btn1.classList.remove("actived");
  btn2.classList.remove("actived");
  btn3.classList.add("actived");
  btn4.classList.remove("actived");
});

btn4.addEventListener("click", () => {
  content1.classList.remove("fade-right");
  content2.classList.remove("fade-right");
  content3.classList.remove("fade-right");
  content4.classList.add("fade-right");

  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "block";

  btn1.classList.remove("actived");
  btn2.classList.remove("actived");
  btn3.classList.remove("actived");
  btn4.classList.add("actived");
});
