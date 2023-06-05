import { Book } from './modules/book.js';
import addBook from './modules/add.js';
import displayBook from './modules/display.js';
import removeBook from './modules/remove.js';
import setTime from './modules/dateTime.js';

class App {
  constructor() {
    this.myBook = new Book();
    this.myBook.addBtn.addEventListener('click', this.myAddBook.bind(this));
  }

  // Remove book function
  myRemoveBook = () => {
    removeBook();
  }

  // display book function
  myDisplayBook = () => {
    displayBook();
  }

  // add Book function
  myAddBook = () => {
    addBook();
  }
}

const booklist = new App();
booklist.myDisplayBook();
setTime();
