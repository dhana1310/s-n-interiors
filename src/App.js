import React from "react";
import Gallery from "./components/Gallery";
import Nav from "./components/Navbar";
import './App.css';
import Contact from "./components/Contact";
import Description from "./components/Description";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Nav />
      <Description />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
