"use strict";

// import {header, describeMe, keahlian} from "./component.js";

// const HEADER_TAG = document.createElement("h1");
// let headerText = "Muhammad Shalrizky";
// header(HEADER_TAG, headerText)

// describeMe()

// let listContent1 = "Sahel"
// let listContent2 = "H"
// let listContent3 = "H"
// keahlian(listContent1, listContent2, listContent3)

import * as comp from "./component.js";

comp.header();

let tagDeskripsi = document.getElementById("deskripsi");
let textDeskripsi =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut totam animi cumque beatae non dicta iusto id eum exercitationem repudiandae hic veritatis numquam reprehenderit dolor maxime, tempore, veniam eaque voluptas! Nisi at commodi cum provident neque minus cumque ad architecto beatae, eaque mollitia, quod rerum officia numquam doloremque soluta repudiandae.";
tagDeskripsi.style.textAlign = "center";

comp.describeMe(tagDeskripsi, textDeskripsi);

let imgSrc = "https://www.shutterstock.com/image-photo/smiling-arabian-man-arms-crossed-600nw-297418385.jpg";

comp.imgMe(imgSrc)

comp.btnKembali()
