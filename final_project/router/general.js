const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
    //Write your code here
    return res.status(300).json({message: "Yet to be implemented"});
  });

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(books);
 });

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn
  res.send(books[isbn])
 });
  
// Get book details based on author
 public_users.get("/:author",(req,res)=>{
    const author = req.params.author;
    let filtered_books = books.filter((books) => books.author === author);
    res.send(filtered_books);
});

// Get all books based on title
public_users.get('/title/:title', (req, res)=>{
  const title = req.params.title;

  res.send(books[title]);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const review = req.params.review;
  res.send.apply(books[review]);
 });

module.exports.general = public_users;
