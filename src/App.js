import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SideNav from './components/SideNav';


function App() {
  const location = useLocation();

  return (
    // <div className="App">
    //   <NavBar />
    //   <Banner />
    //   <Projects />
    //   <Contact />
    //   <Footer />
    // </div>
    <>
      {/* <NavBar /> */}
      <SideNav />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Banner />} />
            <Route index element={<Banner />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    <Footer />
    </>
  );
}

export default App;
