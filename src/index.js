import {APP_NAME, hello, Figure} from "./myutil";

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  console.log('!!開発モードで動作中!!');
}
console.log(APP_NAME);
hello();
console.log(Figure.getTriangle(10, 5));
console.log(Figure.getTriangle(30, 10));

import './style.css';

let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');

import pic from '../images/wings.jpg';

window.addEventListener('DOMContentLoaded', function(){
  [pic].forEach((p) => {
    let img = new Image();
    img.src = p;
    document.body.appendChild(img);
  });
}, false);
