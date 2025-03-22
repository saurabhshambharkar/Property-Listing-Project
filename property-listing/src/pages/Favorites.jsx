import { Link } from 'react-router-dom';
import { useProperty } from '../context/PropertyContext';
import '../styles/Favorites.css';

const Favorites = () => {
  const { favorites, getPropertyById } = useProperty();

  const favoriteProperties = favorites.map(id => getPropertyById(id));

  return (
    <div className="favorites-page">
      <h1>Your Favorite Properties</h1>
      {favoriteProperties.length === 0 ? (
        <div className="no-favorites">
          <p>You haven't added any properties to your favorites yet.</p>
          <Link to="/search" className="browse-button">
            Browse Properties
          </Link>
        </div>
      ) : (
        <div className="favorites-grid">
          {favoriteProperties.map((property) => (
            <Link
              to={`/property/${property.id}`}
              key={property.id}
              className="property-card"
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
  );
};

export default Favorites; 