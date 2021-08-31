import React, {useEffect, useState} from 'react'
import axios from 'axios'
import BookList from './BookList';
import BookForm from './BookForm';

function App() {
  const [books, setBooks] = useState([])

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

  return (
    <div>
      <h1>Tom's Book App</h1>
      <BookForm func={addBook}/>
      <BookList books={books}/>
    </div>
  );
}

export default App;
