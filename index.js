document.addEventListener('DOMContentLoaded', function(){
  const bookTable = document.getElementById('bookTable')

function Book (title, author, numPages, wellRead, info) {
  this.title = title
  this.author = author
  this.numPages = numPages
  this.wellRead = wellRead
  this.info = () => {
    console.log(`${this.title} by ${this.author}, ${this.numPages}, ${this.wellRead}`)
  }
}

function addBookToLibrary () {
  myLibrary.forEach(book => {
    const row = document.createElement('tr')
    row.innerHTML = 
    `<td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.numPages}</td>
      <td>${book.wellRead}</td>`;
      bookTable.appendChild(row)
  });
}

const book1 = new Book('Silmarilion', 'J.R.R Tolkien', '450 pages', 'already read');
const book2 = new Book('The Hobbit', 'J.R.R Tolkien', '350 pages', 'already read');
const book3 = new Book('The Lord of the rings', 'J.R.R Tolkien', '1350 pages', 'already read');

const myLibrary = [book1, book2, book3];

document.querySelector('form').addEventListener('submit', enterBook())
addBookToLibrary();
})







