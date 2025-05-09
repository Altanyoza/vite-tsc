import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';


function App() {
  const [count, setCount] = useState<number>(0);

  return (
    
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
