import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BookDetails = () => {
  const { id } = useParams();

  return (
    <div className="book-details">
      <p>Hello {id}</p>
    </div>
  );
};

export default BookDetails;
