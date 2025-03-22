import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProperty } from '../context/PropertyContext';
import '../styles/PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const { getPropertyById, toggleFavorite, isFavorite } = useProperty();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const property = getPropertyById(id);

  if (!property) {
    return (
      <div className="property-details">
        <div className="error-message">
          <h2>Property not found</h2>
          <p>The property you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="property-details">
      <div className="image-carousel">
        <button className="carousel-button prev" onClick={prevImage}>
          &#10094;
        </button>
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="main-image"
        />
        <button className="carousel-button next" onClick={nextImage}>
          &#10095;
        </button>
        <div className="image-thumbnails">
          {property.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="property-content">
        <div className="property-header">
          <div>
            <h1>{property.title}</h1>
            <p className="price">{property.price}</p>
          </div>
          <button
            className={`favorite-button ${isFavorite(property.id) ? 'active' : ''}`}
            onClick={() => toggleFavorite(property.id)}
          >
            {isFavorite(property.id) ? '❤️' : '🤍'}
          </button>
        </div>

        <div className="property-info">
          <div className="info-item">
            <span className="label">Location:</span>
            <span className="value">{property.location}</span>
          </div>
          <div className="info-item">
            <span className="label">Bedrooms:</span>
            <span className="value">{property.bedrooms}</span>
          </div>
          <div className="info-item">
            <span className="label">Bathrooms:</span>
            <span className="value">{property.bathrooms}</span>
          </div>
          <div className="info-item">
            <span className="label">Area:</span>
            <span className="value">{property.area}</span>
          </div>
        </div>

        <div className="property-description">
          <h2>Description</h2>
          <p>{property.description}</p>
        </div>

        <div className="property-amenities">
          <h2>Amenities</h2>
          <div className="amenities-grid">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                {amenity}
              </div>
            ))}
          </div>
        </div>

        <div className="agent-info">
          <h2>Contact Agent</h2>
          <div className="agent-card">
            <img src={property.agent.image} alt={property.agent.name} className="agent-image" />
            <div className="agent-details">
              <h3>{property.agent.name}</h3>
              <p>{property.agent.phone}</p>
              <p>{property.agent.email}</p>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails; 