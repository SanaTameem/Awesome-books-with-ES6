import displayBook from './display.js';
import { myBook } from './book.js';

const addBook = () => {
  const bookId = new Date().getTime().toString();
  const titleValue = myBook.titleInput.value;
  const authorValue = myBook.authorInput.value;
  if (myBook.listOfbooks.length === 0) {
    myBook.listOfbooks.style.display = 'none';
  }
  if (titleValue && authorValue) {
    const book = {
      id: bookId,
      title: titleValue,
      author: authorValue,
    };
    myBook.listOfbooks.innerHTML = '';
    myBook.arrayOfBooks.unshift(book);
    displayBook();
    myBook.titleInput.value = '';
    myBook.authorInput.value = '';
    localStorage.setItem('arrayOfBooks', JSON.stringify(myBook.arrayOfBooks));
  }
  myBook.container.classList.remove('show');
};
export default addBook;