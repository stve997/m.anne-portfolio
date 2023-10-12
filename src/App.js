import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <NavBar />
    //   <Banner />
    //   <Projects />
    //   <Contact />
    //   <Footer />
    // </div>
    <>
    <Routes>
      <Route path='/' element={<Banner />} />
        <Route index element={<Banner />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
    </Routes>
    <NavBar />
    <Footer />
    </>
  );
}

export default App;
