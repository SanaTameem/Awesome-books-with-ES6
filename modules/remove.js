import { myBook } from './book.js';

const removeBook = (e) => {
  const artcl = e.currentTarget.parentElement;
  myBook.listOfbooks.removeChild(artcl);
  myBook.arrayOfBooks = myBook.arrayOfBooks.filter((item) => item.id !== artcl.dataset.id);
  localStorage.setItem('arrayOfBooks', JSON.stringify(myBook.arrayOfBooks));
};

export default removeBook;