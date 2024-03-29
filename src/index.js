/*
import {APP_NAME, hello, Figure} from './myutil';

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  console.log('!!開発モードで動作中!!');
}
console.log(APP_NAME);
hello();
console.log(Figure.getTriangle(10, 5));
console.log(Figure.getTriangle(30, 10));

// import './style.css';
import './style.scss';
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

import data from './sample.json';
console.log(data[0].title);

import csv from './sample.csv';
console.log(csv[0][1]);

import html from './sample.html';
console.log(html);

import xml from './sample.xml';
console.log(xml.data.row[0]);
console.log(xml.data.row[1].$.id);
console.log(xml.data.row[1]._);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

import { triangle } from './util';
console.log(triangle(10, 5));

const name = 'webpack';
console.log(`${name}`);
const v = 3;
console.log(v === 3);
*/

import './style.css';

const body = document.getElementsByTagName('body')[0];
body.classList.add('sky');
