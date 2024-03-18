import * as comp from "./component.js";


comp.header();

let tagDeskripsi = document.getElementById("deskripsi");
let textDeskripsi =
 "我其实是印度尼西亚人，但我已经留了很久了在茨博达斯。";
tagDeskripsi.style.textAlign = "center";

comp.describeMe(tagDeskripsi, textDeskripsi);

let imgSrc = "https://cdn.britannica.com/26/244926-050-9E508963/Sydney-Sweeney-Euphoria.jpg";

comp.imgMe(imgSrc)

comp.btnKembali()


