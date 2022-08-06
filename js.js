let library = [];

function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.bookNum = library.length;
}

const createBook = function() {
        //get form with DOM
        const title = document.getElementById('title');
        const author = document.getElementById('author');
        const pages = document.getElementById('pages');
    
        //create book object
        const book = new Book(title.value, author.value, pages.value);
        library.push(book);
        book.addBook();

        //reset form
        title.value = "";
        author.value = "";
        pages.value = 0;
}

Book.prototype.toLibrary = function() {
    //update DOM
    const shelf = document.querySelector('.shelf');
    for (let i = 0; i < library.length; i++) {
        const container = document.createElement('div');
        container.classList.add(`book`);
        container.classList.add(`number${i}`);

        const title = document.createElement('p');
        title.classList.add(`title`);
        title.classList.add(`number${i}`);
        title.textContent = this.title;

        const author = document.createElement('p');
        author.classList.add(`author`);
        author.classList.add(`number${i}`);
        author.textContent = this.author;

        const pages = document.createElement('p');
        pages.classList.add(`pages`);
        pages.classList.add(`number${i}`);
        pages.textContent = this.pages;

        const read = document.createElement('button');
        read.classList.add(`readButton`);
        read.classList.add(`number${i}`);
        read.addEventListener('click', (e) => {
            container.classList.toggle('read');
        })

        const remove = document.createElement('button');
        remove.value = this.bookNum;
        remove.classList.add(`removeButton`);
        remove.classList.add(`number${i}`);
        remove.addEventListener('click', (e) => {
            library.splice(this.bookNum, 1);
            this.addBook();
        })

        container.appendChild(title);
        container.appendChild(author);
        container.appendChild(pages);
        container.appendChild(read);
        container.appendChild(remove);
        shelf.appendChild(container);
    }
}

Book.prototype.removeLibrary = function() {
    const shelf = document.querySelector('.shelf');
    while (shelf.firstChild) {
        shelf.removeChild(shelf.lastChild);
    }
}

Book.prototype.addBook = function() {
    this.removeLibrary();
    this.toLibrary();
}