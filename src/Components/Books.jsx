import React, { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    const fetchBooks = async () => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDYL8yd_1JcXapstxcErV8Rqa9yXXRDmPA`);
        const data = await response.json();
        setBooks(data.items || []);
    };

    const handleSearch = () => {
        fetchBooks();
    };

    return (
        <div className="header">
            <div className="row1">
                <h1>This is a library of books of your choice</h1>
            </div>
            <div className="row2">
                <h2>Search your book:</h2>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Enter your book name..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                
                <div className="book-list">
                    {books.length > 0 ? (
                        books.map((book) => (
                            <div key={book.id} className="book-card">
                                <h3>{book.volumeInfo.title}</h3>
                                <p>{book.volumeInfo.authors?.join(", ")}</p>
                                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                            </div>
                        ))
                    ) : (
                        <p>No books found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Books;
