import { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch("https://mocki.io/v1/ee0353d4-0cb7-49f3-831a-6f18818a26e3")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  return (
    <div className="home">
      {books &&
        books.map((book) => (
          <div className="book-preview" key={book.id}>
            <h2>{book.title}</h2>
          </div>
        ))}
    </div>
  );
};

export default Home;
