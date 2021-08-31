import React, {useEffect, useState} from 'react'
import axios from 'axios'
import BookList from './BookList';
import BookForm from './BookForm';
import './App.css';

function App() {
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    getBooks();
  }, [])

  const getBooks = async () =>{
    try {
      let result = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5")
      console.log(result.data.data)
      setBooks(result.data.data)
    } catch (err) {
      alert("error")
    }
  }

  const addBook = (newBook) => {
    let newBooks = [newBook, ...books]
    setBooks(newBooks)
  }

  const deleteBook = (isbn) => {
    let newBooks = books.filter(b => b.isbn !== isbn)
    setBooks(newBooks)
  }

  const updateBook = (book) => {
    let updatedBooks = books.map(b => b.isbn === book.isbn ? book : b)
    setBooks(updatedBooks)
  }

  return (
    <div className="app">
      <h1 className="title">Tom's Book App</h1>
      <div className="addWrapper">
        <button onClick={()=> setShowForm(!showForm)} className="addButton">Add Book?</button>
        {showForm && <BookForm addBook={addBook} setShowForm={setShowForm} />}
      </div>
      <BookList books={books} deleteBook={deleteBook} updateBook={updateBook}/>
    </div>
  );
}

export default App;
