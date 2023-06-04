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
  // eslint-disable-next-line class-methods-use-this
  myRemoveBook() {
    removeBook();
  }

  // display book function
  // eslint-disable-next-line class-methods-use-this
  myDisplayBook() {
    displayBook();
  }

  // add Book function
  // eslint-disable-next-line class-methods-use-this
  myAddBook() {
    addBook();
  }
}

const booklist = new App();
booklist.myDisplayBook();
setTime();
