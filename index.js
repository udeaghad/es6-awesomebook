import * as myBook from './modules/createBook.js';

import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

import * as links from './modules/interraction.js';

const add = document.getElementById('add-button');
const list = document.getElementById('list');

add.addEventListener('click', () => {
 
  const author = document.getElementById('author');
  const book = new myBook.Info(title.value, author.value);
  myBook.awesomBook.push(book);
  myBook.createBook(book);
  localStorage.setItem('awesomBook', JSON.stringify(myBook.awesomBook));

  title.value = '';
  author.value = '';
});

list.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('remove')) {
    e.target.parentElement.remove();
    const newAwesemBook = myBook.awesomBook.filter(
      (ele) => ele.Title !== e.target.parentElement.children[0].innerText,
    );

    myBook.awesomBook.splice(myBook.awesomBook.indexOf(newAwesemBook), 1);
    localStorage.setItem('awesomBook', JSON.stringify(myBook.awesomBook));
  }
});
document.querySelector('.time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

const listLink = document.querySelector('.list-link');
const addLink = document.querySelector('.add-link');
const contactLink = document.querySelector('.contact-link');

listLink.addEventListener('click', (e) => {
  e.preventDefault();
  links.allSection.style.display = 'flex';
  links.inputSection.style.display = 'none';
  links.contactSection.style.display = 'none';
  links.copyRight.style.marginTop = '5%';
  links.linksAll.style.color = 'blue';
  links.linksAdd.style.color = 'black';
  links.linksContact.style.color = 'black';
  document.querySelector('.time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
});
addLink.addEventListener('click', (e) => {
  e.preventDefault();
  links.allSection.style.display = 'none';
  links.inputSection.style.display = 'flex';
  links.contactSection.style.display = 'none';
  links.copyRight.style.marginTop = '23%';
  links.linksAdd.style.color = 'blue';
  links.linksAll.style.color = 'black';
  links.linksContact.style.color = 'black';
  document.querySelector('.time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  links.allSection.style.display = 'none';
  links.inputSection.style.display = 'none';
  links.contactSection.style.display = 'flex';
  links.copyRight.style.marginTop = '19%';
  links.linksContact.style.color = 'blue';
  links.linksAdd.style.color = 'black';
  links.linksAll.style.color = 'black';
  document.querySelector('.time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
});
