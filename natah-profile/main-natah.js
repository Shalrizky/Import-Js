"use strict";
import * as compo from "./comp.js";

compo.header();

let imgSrc = "https://static.hiphopdx.com/2024/03/playboi-carti-suffers-apparent-machete-injury-in-video-for-new-ketamine-single-1200x675.png"

compo.name();
compo.myImage(imgSrc)
let tagBio = document.getElementById("bio");
let textBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in massa vitae magna lobortis tempus. Curabitur augue neque, tincidunt a lacus vel, congue ultrices tortor. Vivamus vitae ultrices ex. Etiam sit amet lorem ut ipsum efficitur sollicitudin. Maecenas imperdiet varius odio, eu rutrum nisi bibendum ac. Pellentesque suscipit mi scelerisque nulla tincidunt, in porta diam placerat. Suspendisse tristique orci et mi scelerisque suscipit. Quisque aliquet felis nec sagittis vulputate. Suspendisse vel magna id quam vestibulum sodales sit amet eget metus. Sed gravida finibus ullamcorper. Nunc commodo pharetra dui vel pulvinar. Nunc cursus, enim eget molestie volutpat, est justo luctus massa, in tincidunt tortor ipsum et lorem. Integer volutpat mauris turpis.";
tagBio.style.textAlign = "right";

compo.myBio(tagBio, textBio);

compo.btnKembali() 
