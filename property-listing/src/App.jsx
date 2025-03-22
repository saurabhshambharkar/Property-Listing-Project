import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertyProvider } from './context/PropertyContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  return (
    <PropertyProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </PropertyProvider>
  );
}

export default App;
