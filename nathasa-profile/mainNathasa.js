"use strict";

import * as comp from "./component.js";

comp.header();

let tagDeskripsi = document.getElementById("deskripsi");
let textDeskripsi =
  "maybe in another universe someone likes me, my character, my face, my body, my appearance and says that i'm pretty with all that";
tagDeskripsi.style.textAlign = "center";

comp.describeMe(tagDeskripsi, textDeskripsi);

let imgSrc = "https://i.pinimg.com/564x/8e/db/69/8edb69ef19535f64434c562c83982fb4.jpg";

comp.imgMe(imgSrc)

comp.btnKembali()
