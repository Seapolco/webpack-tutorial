import _ from 'lodash';
import myName from './myName.js';


function component() {

  const element = document.createElement('div');

  // XXXXX Lodash, currently included via a script, is required for 
  //   this line to work XXXXX

  //Lodash is now included in this script via 'import';

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.textContent = myName('Josh');

  return element;
}

document.body.appendChild(component());
