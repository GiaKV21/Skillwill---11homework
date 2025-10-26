import React from "react";
import "./App.css";
import BookCard from "./BookCard";

const books = [
  {
    title: "The Hobbit",
    description:
      "A hobbit joins a quest with dwarves and a wizard to reclaim a lost mountain.",
    imageUrl: "https://i.harperapps.com/hcuk/covers/9780007270613.JPG",
    characters: ["Bilbo Baggins", "Gandalf", "Thorin Oakenshield"],
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    description:
      "A young wizard discovers his destiny at Hogwarts School of Witchcraft and Wizardry.",
    imageUrl:
      "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg",
    characters: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Hagrid"],
  },
  {
    title: "A Game of Thrones",
    description:
      "Noble houses vie for power while a darker threat rises in the North.",
    imageUrl:
      "https://cdn.kobo.com/book-images/fbd29721-fa99-4f12-86d0-23805cdb97b0/1200/1200/False/a-game-of-thrones.jpg",
    characters: ["Eddard Stark", "Daenerys Targaryen", "Tyrion Lannister"],
  },
];

function handleShowDetails(title, characters) {
  console.log(`Title: ${title}`);
  console.log("Characters:", characters.join(", "));
}

export default function App() {
  return (
    <main className="app">
      <h1 className="page-title">Books</h1>
      <section className="grid">
        {books.map((book) => (
          <BookCard key={book.title} {...book} onShow={handleShowDetails} />
        ))}
      </section>
    </main>
  );
}
