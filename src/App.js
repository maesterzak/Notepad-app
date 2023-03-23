import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { useEffect } from 'react/cjs/react.development';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/homePage';
import Navbar from './components/PageComponents/Navbar';
import Footer from './components/PageComponents/Footer';
import AddPage from './pages/addPage';
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import RadioButtons from './pages/practicePage';
config.autoAddCss = false;

function App() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/addpage' element = {<AddPage />} />
          <Route path='/radiobuttons' element = {<RadioButtons />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
