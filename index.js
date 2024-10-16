
const library = document.getElementById('library')

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
  library.innerText(myLibrary1.map(x => x))
}

const book1 = new Book('Silmarilion', 'J.R.R Tolkien', '450 pages', 'already read');
const book2 = new Book('The Hobbit', 'J.R.R Tolkien', '350 pages', 'already read');
const book3 = new Book('The Lord of the rings', 'J.R.R Tolkien', '1350 pages', 'already read');

const myLibrary1 = [book1, book2, book3];

let myLibrary2 = [];

