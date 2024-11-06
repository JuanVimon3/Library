document.addEventListener('DOMContentLoaded', function() {
  const bookTable = document.getElementById('bookTable');  

  function Book(title, author, numPages, wellRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.wellRead = wellRead;
  }
  const book1 = new Book('Silmarilion', 'J.R.R Tolkien', 450, true);
  const book2 = new Book('The Hobbit', 'J.R.R Tolkien', 350, true);
  const book3 = new Book('The Lord of the rings', 'J.R.R Tolkien', 1350, true);

  const myLibrary1 = [book1, book2, book3];
  function addBookToLibrary() {
    bookTable.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Pages</th>
      <th>Already read</th>
      <th>Delete</th>
      <th>Change read state</th>
    </tr>
    `;
    myLibrary1.forEach((book, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.numPages}</td>
        <td>${book.wellRead ? 'Yes' : 'No'}</td>        
        <td><button onclick="deleteBook(${index})">Delete</button></td>
        <td><button onclick="toggleBookReadState(${index})">Already read?</button></td>
      `;
      bookTable.appendChild(row);
    });
  }

  function enterBook(event){
    event.preventDefault()
    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newNumPages = document.getElementById('pages').value;
    const newWellRead = document.getElementById('alreadyRead').checked;
    
    const userBook = new Book(newTitle, newAuthor, newNumPages, newWellRead)
    myLibrary1.push(userBook)
    addBookToLibrary();
    closeForm();
  }

  window.deleteBook = function(index){
    myLibrary1.splice(index, 1)
    addBookToLibrary()
  }

  window.toggleBookReadState = function (index) {
    myLibrary1[index].wellRead = !myLibrary1[index].wellRead;
    addBookToLibrary()
  }
  
  window.openForm = function () {
    document.getElementById('myForm').style.display = 'block'
  }

  window.closeForm = function () {
    document.getElementById('myForm').style.display = 'none'
  }
  
  addBookToLibrary();  
  
  document.getElementById('open-button').addEventListener('click', openForm);
  document.getElementById('bookForm').addEventListener('submit', enterBook);

  console.log(myLibrary1)
  console.log(myLibrary1)

});
