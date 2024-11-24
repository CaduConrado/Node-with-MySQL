const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

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

  const sql = `INSERT INTO books (title, author, pages, publisher) VALUES ("${title}", "${author}", "${pages}", "${publisher}")`;
  conn.query(sql, function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect("/");
    console.log("Livro cadastrado.");
  });
});

app.get("/books", (req, res) => {
  const sql = `SELECT * FROM books`;

  conn.query(sql, function (err, data) {
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
  const sql = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(sql, function (err, data) {
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

  const sql = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(sql, function (err, data) {
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

  const sql = `UPDATE books SET title = '${title}', author = '${author}', pages = '${pages}', publisher = '${publisher}' WHERE id = '${id}'`;

  conn.query(sql, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.post("/books/remove/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM books WHERE id = ${id}`;

  conn.query(sql, function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect("/books");
  });
});
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Connected to MySql");
  app.listen(port);
});