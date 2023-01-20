import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';

import Page from "./components/Page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from './components/Header/NavBar';

function App() {

  const [pages] = useState([
    {
      name: "about me"
    },
    {
      name: "portfolio"
    },
    {
      name: "contact"
    },
    {
      name: "resume"
    },
  ]);

  const [ currentPage, setCurrentPage ] = useState(pages[0]);

  return (
    <div>
      <Header>
        <NavBar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} 
        ></NavBar>
        {console.log("Current:" + currentPage + " All: " + pages)}
      </Header>
      <main>
        <Page currentPage={currentPage}></Page> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
