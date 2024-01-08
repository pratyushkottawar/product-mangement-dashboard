// import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// const BookDetails = ({ books }) => {
//   const { id } = useParams();
//   let tempBook = [];
//   if (books) {
//     tempBook = books.filter((book) => book.id == id);
//   }
//   console.log(tempBook);
//   return (

//     <div className="book-details" style={{ display: "flex", width: "50%" }}>
//       <div style={{ margin: "25px" }}>
//         <img src={tempBook.thumbnail} alt="BG" style={{ maxHeight: "500px" }} />
//       </div>
//       <div style={{ margin: "30px" }}>
//         <p style={{ fontSize: "25px", fontWeight: "bold" }}>Hello {id}</p>
//         <p style={{ paddingTop: "30px" }}>Publisher : </p>
//         <p style={{ paddingTop: "10px" }}>Author : </p>
//         <p style={{ paddingTop: "10px" }}>Publishing Year : </p>
//         <p style={{ paddingTop: "10px" }}>EAN Code : </p>
//         <p style={{ paddingTop: "10px" }}>Copies In Stock : </p>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;

import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BookDetails = ({ books }) => {
  const { id } = useParams();

  return (
    <>
      {books &&
        books.map(
          (book) =>
            book.id == id && (
              <div
                className="book-details"
                style={{ display: "flex" }}
                key={book.id}
              >
                <div style={{ margin: "25px", width: "20em" }}>
                  <img
                    src={book.thumbnail}
                    alt="BG"
                    style={{
                      paddingRight: "40px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div style={{ margin: "30px" }}>
                  <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                    {book.title}
                  </p>
                  <p style={{ paddingTop: "40px" }}>
                    Publisher : {book.publisher}
                  </p>
                  <p style={{ paddingTop: "20px" }}>Author : {book.author}</p>
                  <p style={{ paddingTop: "20px" }}>
                    Publishing Year : {book.publishingYear}
                  </p>
                  <p style={{ paddingTop: "20px" }}>
                    EAN Code : {book.eanCode}
                  </p>
                  <p style={{ paddingTop: "20px" }}>
                    Copies In Stock : {book.copiesInStock}
                  </p>
                </div>
              </div>
            )
        )}
    </>
  );
};

export default BookDetails;
