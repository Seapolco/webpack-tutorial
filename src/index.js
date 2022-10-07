import _ from 'lodash';
import myName from './myName.js';
import './style.css';
import ravePlato from './ravePBSPlato.png';


function component() {

  const element = document.createElement('div');

  // XXXXX Lodash, currently included via a script, is required for 
  //   this line to work XXXXX

  //Lodash is now included in this script via 'import';

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.textContent = myName('Josh');
  element.classList.add('hello');

  const myImage = new Image(300,300);
  myImage.src = ravePlato;

  element.appendChild(myImage);

  return element;
}

document.body.appendChild(component());
