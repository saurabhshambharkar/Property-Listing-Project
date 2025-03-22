import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProperty } from '../context/PropertyContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { favorites, searchProperties } = useProperty();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/search', { state: { searchQuery } });
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          PropertyFinder
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/search" className="nav-link">Search</Link>
          <Link to="/favorites" className="nav-link">
            Favorites
            {favorites.length > 0 && <span className="favorite-count">{favorites.length}</span>}
          </Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar; 