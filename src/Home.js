import { Link } from "react-router-dom";

const Home = ({ books }) => {
  console.log(books);
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
