import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    propertyType: 'all',
    priceRange: 'all'
  });

  // Mock data for featured properties
  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      price: '$2,500/month',
      location: 'Downtown',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sq ft'
    },
    {
      id: 2,
      title: 'Luxury Villa with Pool',
      price: '$5,000/month',
      location: 'Suburbs',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      bedrooms: 4,
      bathrooms: 3,
      area: '2,500 sq ft'
    },
    {
      id: 3,
      title: 'Cozy Studio Apartment',
      price: '$1,800/month',
      location: 'City Center',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      bedrooms: 1,
      bathrooms: 1,
      area: '800 sq ft'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search params:', searchParams);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Property</h1>
          <p>Discover the perfect place to call home</p>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter location..."
              value={searchParams.location}
              onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
              className="search-input"
            />
            <select
              value={searchParams.propertyType}
              onChange={(e) => setSearchParams({ ...searchParams, propertyType: e.target.value })}
              className="search-select"
            >
              <option value="all">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
            </select>
            <select
              value={searchParams.priceRange}
              onChange={(e) => setSearchParams({ ...searchParams, priceRange: e.target.value })}
              className="search-select"
            >
              <option value="all">All Prices</option>
              <option value="under-1000">Under $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-3000">$2,000 - $3,000</option>
              <option value="over-3000">Over $3,000</option>
            </select>
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          {featuredProperties.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id} className="property-card">
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
      </section>
    </div>
  );
};

export default Home; 