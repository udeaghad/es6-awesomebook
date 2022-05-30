const list = document.getElementById('list');
export const awesomBook = [];
export class Info {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
export const createBook = () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const liTitle = document.createElement('li');
  const liAuthor = document.createElement('li');
  const removeBotton = document.createElement('button');
  const by = document.createElement('p');
  const newDiv = document.createElement('div');

  newDiv.classList.add('onebook');
  for (let i = 0; i < awesomBook.length; i += 1) {
    newDiv.classList.toggle('removebg');
  }

  by.innerHTML = 'by';
  removeBotton.classList = 'remove';
  liTitle.className = 'title-pe';
  liAuthor.className = 'title-pe';
  liTitle.innerHTML = title.value;
  liAuthor.innerHTML = author.value;
  removeBotton.innerText = 'Remove';
  newDiv.append(liTitle, by, liAuthor, removeBotton);
  list.appendChild(newDiv);
};

// const book = new myBook.Info(title.value, author.value);
