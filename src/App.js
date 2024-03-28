import logo from './logo.svg';
import './App.css';
import Layout from'./Pages/Layout'
import Home from'./Pages/Home'
import About from'./Pages/About'
import Shop from'./Pages/Shop'
import Contact from'./Pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          
          <Route path="Shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>

    
    
    </>
  );
}

export default App;
