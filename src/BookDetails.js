import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BookDetails = ({ books }) => {
  const { id } = useParams();

  return (
    <div className="book-details" style={{ display: "flex", width: "50%" }}>
      <div style={{ margin: "25px" }}>
        <img
          src="https://imgs.search.brave.com/lnUAPCut3Mmh2B0o1EAzwOd-w_22hNk9GkF7tMMwfeY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmhh/Z2F2YWQtZ2l0YS1h/cy1pdC1pcy1ib29r/LWNvdmVyLWt3N2ps/aGY2cmEyejk1bmku/anBn"
          alt="BG"
          style={{ maxHeight: "500px" }}
        />
      </div>
      <div style={{ margin: "30px" }}>
        <p style={{ fontSize: "25px", fontWeight: "bold" }}>Hello {id}</p>
        <p style={{ paddingTop: "30px" }}>Publisher : </p>
        <p style={{ paddingTop: "10px" }}>Author : </p>
        <p style={{ paddingTop: "10px" }}>Publishing Year : </p>
        <p style={{ paddingTop: "10px" }}>EAN Code : </p>
        <p style={{ paddingTop: "10px" }}>Copies In Stock : </p>
      </div>
    </div>
  );
};

export default BookDetails;
