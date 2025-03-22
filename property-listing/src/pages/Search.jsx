import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useProperty } from '../context/PropertyContext';
import '../styles/Search.css';

const Search = () => {
  const { searchProperties } = useProperty();
  const location = useLocation();
  const [filters, setFilters] = useState({
    propertyType: 'all',
    priceRange: 'all',
    bedrooms: 'all',
    bathrooms: 'all',
    amenities: [],
    sortBy: 'newest',
    searchQuery: location.state?.searchQuery || ''
  });

  const [viewMode, setViewMode] = useState('grid');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = searchProperties(filters);
    setSearchResults(results);
  }, [filters, searchProperties]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters(prev => ({
        ...prev,
        amenities: checked
          ? [...prev.amenities, value]
          : prev.amenities.filter(item => item !== value)
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSearchQueryChange = (e) => {
    setFilters(prev => ({
      ...prev,
      searchQuery: e.target.value
    }));
  };

  return (
    <div className="search-page">
      <div className="search-sidebar">
        <h2>Filters</h2>
        <div className="filter-section">
          <h3>Search</h3>
          <input
            type="text"
            placeholder="Search by title or location..."
            value={filters.searchQuery}
            onChange={handleSearchQueryChange}
            className="search-input"
          />
        </div>

        <div className="filter-section">
          <h3>Property Type</h3>
          <select
            name="propertyType"
            value={filters.propertyType}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="all">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <div className="filter-section">
          <h3>Price Range</h3>
          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="all">All Prices</option>
            <option value="under-1000">Under $1,000</option>
            <option value="1000-2000">$1,000 - $2,000</option>
            <option value="2000-3000">$2,000 - $3,000</option>
            <option value="over-3000">Over $3,000</option>
          </select>
        </div>

        <div className="filter-section">
          <h3>Bedrooms</h3>
          <select
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="all">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>
        </div>

        <div className="filter-section">
          <h3>Bathrooms</h3>
          <select
            name="bathrooms"
            value={filters.bathrooms}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="all">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>
        </div>

        <div className="filter-section">
          <h3>Amenities</h3>
          <div className="amenities-checkboxes">
            <label>
              <input
                type="checkbox"
                value="parking"
                checked={filters.amenities.includes('parking')}
                onChange={handleFilterChange}
              />
              Parking
            </label>
            <label>
              <input
                type="checkbox"
                value="pool"
                checked={filters.amenities.includes('pool')}
                onChange={handleFilterChange}
              />
              Pool
            </label>
            <label>
              <input
                type="checkbox"
                value="gym"
                checked={filters.amenities.includes('gym')}
                onChange={handleFilterChange}
              />
              Gym
            </label>
            <label>
              <input
                type="checkbox"
                value="security"
                checked={filters.amenities.includes('security')}
                onChange={handleFilterChange}
              />
              Security
            </label>
          </div>
        </div>
      </div>

      <div className="search-results">
        <div className="search-header">
          <h2>Search Results ({searchResults.length})</h2>
          <div className="view-controls">
            <select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleFilterChange}
              className="sort-select"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <div className="view-buttons">
              <button
                className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                Grid
              </button>
              <button
                className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {searchResults.length === 0 ? (
          <div className="no-results">
            <p>No properties found matching your criteria.</p>
          </div>
        ) : (
          <div className={`property-grid ${viewMode}`}>
            {searchResults.map((property) => (
              <Link
                to={`/property/${property.id}`}
                key={property.id}
                className={`property-card ${viewMode}`}
              >
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                </div>
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p className="property-price">{property.price}</p>
                  <p className="property-location">{property.location}</p>
                  <div className="property-details">
                    <span>{property.bedrooms} beds</span>
                    <span>{property.bathrooms} baths</span>
                    <span>{property.area}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search; 