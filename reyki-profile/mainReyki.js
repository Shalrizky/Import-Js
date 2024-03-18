
"use strict";

import * as comp from "./component.js";

comp.header();

let tagline = document.getElementById("tagProfile");
let texttagline =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut totam animi cumque beatae non dicta iusto id eum exercitationem repudiandae hic veritatis numquam reprehenderit dolor maxime, tempore, veniam eaque voluptas! Nisi at commodi cum provident neque minus cumque ad architecto beatae, eaque mollitia, quod rerum officia numquam doloremque soluta repudiandae.";
tagline.style.textAlign = "center";

comp.describeMe(tagline, texttagline);

let img = document.getElementById("profileImg");
let imgSrc =
  "https://www.alucare.fr/wp-content/uploads/2023/08/Naruto-scaled.jpg";
img.setAttribute("src", imgSrc);

comp.btnKembali();
