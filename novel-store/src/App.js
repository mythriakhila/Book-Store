import React from "react";
import Header from "./components/Header";
import { Routes ,Route} from "react-router-dom";

import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Addbook from "./components/Addbook";
import Books from "./components/Book/Books";
import BookDetails from "./components/Book/BookDetails";
function App() {
  return <React.Fragment>
    <header>
<Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/add" element={<Addbook/>} exact/>
        <Route path="/books" element={<Books/>} exact/>
        <Route path="/aboutus" element={<Aboutus/>} exact/>
        <Route path="/books/:id" element={<BookDetails/>} exact/>

      </Routes>
    </main>
  </React.Fragment>
}

export default App;
