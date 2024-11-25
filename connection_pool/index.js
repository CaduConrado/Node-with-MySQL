const express = require("express");
const exphbs = require("express-handlebars");
const pool = require("./db/conn");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/books/addBook", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const pages = req.body.pages;
  const publisher = req.body.publisher;

  const sql = `INSERT INTO books (??, ??, ??, ??) VALUES (?, ?, ?, ?)`;
  const data = [
    "title",
    "author",
    "pages",
    "publisher",
    title,
    author,
    pages,
    publisher,
  ];
  pool.query(sql, data, function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect("/");
    console.log("Livro cadastrado.");
  });
});

app.get("/books", (req, res) => {
  const sql = `SELECT * FROM books`;

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;
    console.log(books);
    res.render("books", { books });
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM books WHERE ?? = ?`;
  const data = ["id", id];

  pool.query(sql, data, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    const book = data[0];

    res.render("book", { book });
  });
});

app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE ?? = ?`;
  const data = ["id", id];

  pool.query(sql, data, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0];

    res.render("editBook", { book });
  });
});

app.post("/books/updateBook", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const author = req.body.author;
  const pages = req.body.pages;
  const publisher = req.body.publisher;
  console.log(id);

  const sql = `UPDATE books SET ?? = ?, ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?`;
  const data = [
    "title",
    "author",
    "pages",
    "publisher",
    "id",
    title,
    author,
    pages,
    publisher,
    id,
  ];

  pool.query(sql, data, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.post("/books/remove/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM books WHERE ?? = ?`;
  const data = ["id", id];
  pool.query(sql, data, function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect("/books");
  });
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
