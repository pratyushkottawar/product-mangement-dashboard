import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BookDetails from "./BookDetails";

function App() {
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
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home books={books} />
            </Route>
            <Route exact path="/create">
              <Create books={books} />
            </Route>
            <Route path="/book/:id">
              <BookDetails books={books} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
