export const awesomBook = [];
export class Info {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
export const showBook = () => {
  const bookStorage = JSON.parse(localStorage.getItem('awesomBook'));
  if (awesomBook.length > 0 || bookStorage.length > 0) {
    const divList = document.getElementById('list');

    for (let i = 0; i < bookStorage.length; i += 1) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('onebook');

      newDiv.innerHTML = `
       <p class="title-pe">${bookStorage[i].title}</p> 
       <p>by</p>
       <p class="title-pe">${bookStorage[i].author}</p>
       <button type="submit" class="remove">remove</button>`;

      divList.appendChild(newDiv);
    }
  }
};
