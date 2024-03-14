"use strict";

// const wrapper = document.getElementById("wrapper")

// function header(component, textHeader) {
//    component.textContent = textHeader;
//    wrapper.appendChild(component);
// }

// function describeMe() {
//    const deskripsi = document.getElementById("deskripsi");
//    deskripsi.textContent = "Saya adalah seorang superman";
//    wrapper.appendChild(deskripsi)
   
// }

// function keahlian(...textList) {
   
//    textList.forEach(text => {
//       let list = document.createElement("li");
//       // unorderList.appendChild = list;
//       list.textContent = text;
//       wrapper.appendChild(list)
//    })
  
// }


// export {header, describeMe, keahlian};

const container = document.getElementById("container");

function header() {
   const HEADER_TEXT = document.createElement("h1");
   HEADER_TEXT.textContent = "Muhammad Shalrizky";
   container.appendChild(HEADER_TEXT)
   HEADER_TEXT.style.textAlign = "center"
}

function describeMe(tagDeskripsi, textDeskripsi) {
   tagDeskripsi.textContent = textDeskripsi;
   container.appendChild(tagDeskripsi)
   return;
}

function imgMe(imgContent) {
   let myImg = document.querySelector("#container img")
   myImg.style.width = "400px"
   myImg.style.borderRadius = "20px"
   myImg.src = imgContent;
   container.appendChild(myImg);
}

function btnKembali() {
   const kembaliBtn = document.getElementById("btn-kembali");
   kembaliBtn.textContent = "Kembali";
   kembaliBtn.style.marginTop = "50px";
   kembaliBtn.style.padding = "10px 10px";
   kembaliBtn.addEventListener("click", function() {
      window.location.href = "../index.html"
   })
   container.appendChild(kembaliBtn)
}


export {header, describeMe, imgMe, btnKembali}