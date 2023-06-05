import { myBook } from './book.js';
import removeBook from './remove.js';

const displayBook = () => {
  myBook.arrayOfBooks.forEach((book) => {
    const article = document.createElement('article');
    article.classList.add('book-container');
    const attr = document.createAttribute('data-id');
    attr.value = book.id;
    article.setAttributeNode(attr);
    article.innerHTML = ` <div class="title-author-container">
                                <p class="book-title">"${book.title}" by</p>
                                <pre class="book-author"> "${book.author}"</pre>
                            </div>
                            
                            <button class="remove-btn">Remove</button>
                           
                                `;
    myBook.listOfbooks.appendChild(article);
    myBook.listOfbooks.style.display = 'block';
    const removeBtn = article.querySelectorAll('.remove-btn');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', removeBook);
    });
    myBook.container.classList.add('show');
  });
};

export default displayBook;