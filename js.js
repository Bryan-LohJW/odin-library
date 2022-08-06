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

        const title = document.createElement('p');
        title.classList.add(`title`);
        title.textContent = library[i].title;

        const author = document.createElement('p');
        author.classList.add(`author`);
        author.textContent = library[i].author;

        const pages = document.createElement('p');
        pages.classList.add(`pages`);
        pages.textContent = library[i].pages;

        const read = document.createElement('button');
        read.classList.add(`readButton`);
        read.addEventListener('click', (e) => {
            container.classList.toggle('read');
        })

        const remove = document.createElement('button');
        library[i].bookNum = i;
        remove.value = library[i].bookNum;
        remove.classList.add(`removeButton`);
        remove.addEventListener('click', (e) => {
            library.splice(library[i].bookNum, 1);
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