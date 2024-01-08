import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch("https://mocki.io/v1/97aeab97-6465-4634-aecc-a8644173d69a")
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
            <Link to={`/book/${book.id}`}>
              <div className="picture-background">
                <img className="picture" src={book.thumbnail} alt="hello" />
              </div>
              <p className="description">{book.title}</p>
              <p className="author">~{book.author}</p>
              <p className="copiesInStock">
                Copies in stock : {book.copiesInStock}
              </p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
