const form = document.getElementById("book-form");

class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
};

class UI{
    addBookToList(book) {
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="close">X</a></td>
        `
        list.appendChild(row);
    }
    showAlert(message, classname) {

        const div = document.createElement("div");

        div.className = `alert ${classname}`;

        div.textContent = message;

        const container = document.querySelector(".container");

        container.insertBefore(div, document.getElementById("book-form"));

        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 3000);
    }
}



form.addEventListener("submit", function (e) {

    const title = document.getElementById("title").value;

    const author = document.getElementById("author").value;

    const isbn = document.getElementById("isbn").value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    if (title === "" || author === "" || isbn === "") {

        ui.showAlert("you should fill all fields", "error");

    } else {
        ui.addBookToList(book);

        ui.showAlert("Book Added", "success");
    }
    e.preventDefault();
})