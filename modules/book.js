export class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
    this.id = new Date().getTime().toString();
    this.addBtn = document.querySelector('.add-btn');
    this.titleInput = document.querySelector('.title-input');
    this.authorInput = document.querySelector('.author-input');
    this.listOfbooks = document.querySelector('.list-of-books');
    this.arrayOfBooks = JSON.parse(localStorage.getItem('arrayOfBooks')) || [];
    this.mainContainer = document.querySelector('.main-container');
    // containers
    this.container = document.querySelector('.list-container');
    this.formContainer = document.querySelector('.form-container');
    this.contactContainer = document.querySelector('.contact-container');
    // nav items
    this.listShow = document.querySelector('.list-show');
    this.addNew = document.querySelector('.add-new');
    this.contact = document.querySelector('.contact');
    // nav event listeners
    this.listShow.addEventListener('click', this.showList.bind(this));
    this.addNew.addEventListener('click', this.showNew.bind(this));
    this.contact.addEventListener('click', this.showContact.bind(this));
  }

  showList() {
    this.container.classList.add('show');
    this.formContainer.classList.remove('show');
    this.contactContainer.classList.remove('show');
  }

  showNew() {
    this.formContainer.classList.add('show');
    this.container.classList.remove('show');
    this.contactContainer.classList.remove('show');
  }

  showContact() {
    this.contactContainer.classList.add('show');
    this.formContainer.classList.remove('show');
    this.container.classList.remove('show');
  }
}

export const myBook = new Book();