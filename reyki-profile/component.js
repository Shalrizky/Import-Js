
"use strict";

const container = document.querySelector(".container");

function header() {
  const HEADER_TEXT = document.getElementById("header");
  HEADER_TEXT.textContent = "Muhammad Reyki Almadani";
  HEADER_TEXT.style.textAlign = "center";
}

function describeMe(tagline, texttagline) {
  tagline.textContent = texttagline;
  container.appendChild(tagline);
}

function btnKembali() {
  const kembaliBtn = document.getElementById("btn-kembali");
  kembaliBtn.textContent = "Kembali";
  kembaliBtn.style.marginTop = "50px";
  kembaliBtn.style.padding = "10px 10px";
  kembaliBtn.addEventListener("click", function () {
    window.location.href = "../index.html";
  });
  container.appendChild(kembaliBtn);
}

export { header, describeMe, btnKembali };
