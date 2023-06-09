import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
        <Routes>
        <Route path="/" element = {<Banner/>} />
        <Route path="/skills" element = {<Skills />} />
        <Route path="/projects" element = {<Projects />} />
        <Route path="/contact" element = {<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
