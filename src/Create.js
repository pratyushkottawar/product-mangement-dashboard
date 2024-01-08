import { useState } from "react";

const Create = ({ books }) => {
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [author, setAuthor] = useState("");
  const [publishingYear, setPublishingYear] = useState("");
  const [eanCode, setEanCode] = useState("");
  const [copiesInStock, setCopiesInStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      thumbnail,
      title,
      publisher,
      author,
      publishingYear,
      eanCode,
      copiesInStock,
    };

    books = [...books, book];
    console.log(books);

    // fetch("https://mocki.io/v1/ee0353d4-0cb7-49f3-831a-6f18818a26e3", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(book),
    // }).then(() => {
    //   console.log("new book added");
    // });
  };

  return (
    <div className="create">
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <label>Thumbnail:</label>
        <input
          type="text"
          required
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Publisher:</label>
        <input
          type="text"
          required
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <label>Author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Publishing Year:</label>
        <input
          type="text"
          required
          value={publishingYear}
          onChange={(e) => setPublishingYear(e.target.value)}
        />
        <label>EAN Code:</label>
        <input
          type="text"
          required
          value={eanCode}
          onChange={(e) => setEanCode(e.target.value)}
        />
        <label>Copies in Stock:</label>
        <input
          type="text"
          required
          value={copiesInStock}
          onChange={(e) => setCopiesInStock(e.target.value)}
        />
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default Create;
