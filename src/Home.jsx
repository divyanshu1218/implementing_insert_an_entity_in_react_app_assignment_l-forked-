// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import BookCard from "./components/BookCard"// Ensure the correct path to BookCard
import books from "./booksData"; // Ensure the correct path to booksData
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the "Add Book" button click
  const handleAddBookClick = () => {
    navigate("/add-book"); // Navigate to the "Add Book" form page
  };

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      {/* Add the "Add Book" button */}
      <button onClick={handleAddBookClick} className="add-book-button">
        Add Book
      </button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;