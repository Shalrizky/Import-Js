"use strict";
const kontener=document.getElementById("kontener");

function header() {
    const headText = document.createElement("h1");
    headText.textContent = "welcome to my profile";
    kontener.appendChild(headText)
    headText.style.textAlign = "center"
    headText.style.fontFamily = "'Helvetica'"
    headText.style.marginBottom = "30px"
    headText.style.color = "white"
}

function myBio(tagBio, textBio) {
    bio.textContent = textBio;
    kontener.appendChild(tagBio)
    bio.style.fontFamily = "'Helvetica'"
    bio.style.fontWeight = "100"
    bio.style.color = "white"
    bio.style.display = "block"
    bio.style.marginTop = "110px"
    return;
}

function myImage(imgContent) {
    let image = document.querySelector("#kontener img")
    image.style.width = "400px"
    image.style.justifyContent = "end"
    image.style.borderRadius = "15px"
    image.style.stroke = "5px"
    image.style.display = "inline-block"
    image.style.position = "absolute"
    image.style.left = "55%"
    image.src = imgContent;
    kontener.appendChild(image);
    image.addEventListener("mouseover", function() {
        image.style.transform = "scale(1.2)";
        image.style.transform.trasi
    })
    image.addEventListener("mouseout", function() {
        image.style.transform = "scale(1.0)";
    })
}

function name() {
    const nameText = document.createElement("h1");
    nameText.textContent = "NATAH."
    nameText.style.justifyContent = "start"
    nameText.style.color = "rgb(10, 0, 102)"
    nameText.style.fontFamily = "'Helvetica'"
    nameText.style.display = "inline-flex"
    nameText.style.fontSize = "140px"
    nameText.style.marginTop = "15px"
    nameText.style.marginBottom = "0px"
    kontener.appendChild(nameText)
}

function btnKembali() {
    const backButton = document.getElementById("btn-kembali")
    backButton.textContent = "Back";
    backButton.style.marginTop = "50px";
    backButton.style.backgroundColor = "rgb(255, 72, 72)";
    backButton.style.color = "white";
    backButton.style.fontSize = "15px";
    backButton.style.fontFamily = "'Helvetica'"
    backButton.style.fontWeight = "bold"
    backButton.style.borderRadius = "10px";
    backButton.style.padding = "10px 30px";
    backButton.style.alignItems = "center";
    backButton.addEventListener("click", function() {
        window.location.href = "../index.html"
        backButton.style.backgroundColor = "rgb(48, 0, 0)"
    })
    kontener.appendChild(backButton)
    
    backButton.addEventListener("mouseover", function() {
        backButton.style.backgroundColor = "rgb(255, 120, 120)";
    })
    backButton.addEventListener("mouseout", function() {
        backButton.style.backgroundColor = "rgb(255, 72, 72)";
    })
    
}

export {header, myBio, myImage, btnKembali, name}