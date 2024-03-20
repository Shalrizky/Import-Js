"use strict";
import * as compo from "./component.js";

compo.header();

let imgSrc = "https://stickershop.line-scdn.net/stickershop/v1/product/25795705/LINEStorePC/main.png?v=1"

compo.name();
compo.myImage(imgSrc)
let tagBio = document.getElementById("bio");
let textBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in massa vitae magna lobortis tempus. Curabitur augue neque, tincidunt a lacus vel, congue ultrices tortor. Vivamus vitae ultrices ex. Etiam sit amet lorem ut ipsum efficitur sollicitudin. Maecenas imperdiet varius odio, eu rutrum nisi bibendum ac. Pellentesque suscipit mi scelerisque nulla tincidunt, in porta diam placerat. Suspendisse tristique orci et mi scelerisque suscipit. Quisque aliquet felis nec sagittis vulputate. Suspendisse vel magna id quam vestibulum sodales sit amet eget metus. Sed gravida finibus ullamcorper. Nunc commodo pharetra dui vel pulvinar. Nunc cursus, enim eget molestie volutpat, est justo luctus massa, in tincidunt tortor ipsum et lorem. Integer volutpat mauris turpis.";
tagBio.style.textAlign = "right";

compo.myBio(tagBio, textBio);

compo.btnKembali() 
