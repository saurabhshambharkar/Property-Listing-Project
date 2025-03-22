import { createContext, useContext, useState } from 'react';

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Mock data for properties
  const properties = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      price: '$2,500/month',
      location: 'Downtown',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa'
      ],
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sq ft',
      type: 'apartment',
      amenities: ['parking', 'gym', 'security'],
      description: 'This modern apartment features floor-to-ceiling windows, high-end finishes, and stunning city views. The open-concept living area is perfect for entertaining, while the kitchen boasts granite countertops and stainless steel appliances.',
      agent: {
        name: 'John Doe',
        phone: '(555) 123-4567',
        email: 'john.doe@example.com',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      }
    },
    {
      id: 2,
      title: 'Luxury Villa with Pool',
      price: '$5,000/month',
      location: 'Suburbs',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
      ],
      bedrooms: 4,
      bathrooms: 3,
      area: '2,500 sq ft',
      type: 'villa',
      amenities: ['parking', 'pool', 'security'],
      description: 'This luxurious villa offers a private pool, spacious living areas, and beautiful landscaping. The property features high ceilings, premium finishes, and a gourmet kitchen perfect for family gatherings.',
      agent: {
        name: 'Jane Smith',
        phone: '(555) 987-6543',
        email: 'jane.smith@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
      }
    },
    {
      id: 3,
      title: 'Cozy Studio Apartment',
      price: '$1,800/month',
      location: 'City Center',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa'
      ],
      bedrooms: 1,
      bathrooms: 1,
      area: '800 sq ft',
      type: 'apartment',
      amenities: ['parking', 'security'],
      description: 'This cozy studio apartment is perfect for singles or couples. It features an efficient layout, modern appliances, and plenty of natural light. Located in the heart of the city, it offers easy access to shopping, dining, and entertainment.',
      agent: {
        name: 'Mike Johnson',
        phone: '(555) 456-7890',
        email: 'mike.johnson@example.com',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
      }
    },
    {
      id: 4,
      title: 'Penthouse Suite',
      price: '$8,500/month',
      location: 'Downtown',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811'
      ],
      bedrooms: 3,
      bathrooms: 3,
      area: '3,200 sq ft',
      type: 'apartment',
      amenities: ['parking', 'gym', 'pool', 'security'],
      description: 'This stunning penthouse offers panoramic city views, private terrace, and luxury finishes throughout. Features include a gourmet kitchen, home theater, and spa-like master bathroom.',
      agent: {
        name: 'Sarah Wilson',
        phone: '(555) 234-5678',
        email: 'sarah.wilson@example.com',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
      }
    },
    {
      id: 5,
      title: 'Family Home with Garden',
      price: '$3,800/month',
      location: 'Suburbs',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
      ],
      bedrooms: 3,
      bathrooms: 2,
      area: '1,800 sq ft',
      type: 'house',
      amenities: ['parking', 'garden', 'security'],
      description: 'This charming family home features a spacious backyard, modern kitchen, and comfortable living areas. Perfect for families looking for space and comfort.',
      agent: {
        name: 'David Brown',
        phone: '(555) 345-6789',
        email: 'david.brown@example.com',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
      }
    },
    {
      id: 6,
      title: 'Luxury Condo',
      price: '$4,200/month',
      location: 'City Center',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811'
      ],
      bedrooms: 2,
      bathrooms: 2,
      area: '1,500 sq ft',
      type: 'apartment',
      amenities: ['parking', 'gym', 'pool', 'security'],
      description: 'This luxury condo offers high-end finishes, city views, and resort-style amenities. The building features a rooftop pool, fitness center, and 24/7 concierge service.',
      agent: {
        name: 'Emily Davis',
        phone: '(555) 456-7890',
        email: 'emily.davis@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
      }
    },
    {
      id: 7,
      title: 'Beachfront Villa',
      price: '$12,000/month',
      location: 'Beach Area',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
      ],
      bedrooms: 5,
      bathrooms: 4,
      area: '4,000 sq ft',
      type: 'villa',
      amenities: ['parking', 'pool', 'beach access', 'security'],
      description: 'This stunning beachfront villa offers direct beach access, infinity pool, and panoramic ocean views. The property features multiple living areas, gourmet kitchen, and outdoor entertainment spaces.',
      agent: {
        name: 'Robert Taylor',
        phone: '(555) 567-8901',
        email: 'robert.taylor@example.com',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
      }
    },
    {
      id: 8,
      title: 'Mountain View Cabin',
      price: '$2,800/month',
      location: 'Mountain Area',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
      ],
      bedrooms: 2,
      bathrooms: 1,
      area: '1,200 sq ft',
      type: 'house',
      amenities: ['parking', 'fireplace', 'security'],
      description: 'This cozy cabin offers stunning mountain views and a peaceful retreat from city life. Features include a wood-burning fireplace, wrap-around deck, and modern amenities.',
      agent: {
        name: 'Lisa Anderson',
        phone: '(555) 678-9012',
        email: 'lisa.anderson@example.com',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
      }
    },
    {
      id: 9,
      title: 'Historic Townhouse',
      price: '$4,500/month',
      location: 'Historic District',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811'
      ],
      bedrooms: 3,
      bathrooms: 2,
      area: '2,000 sq ft',
      type: 'house',
      amenities: ['parking', 'garden', 'security'],
      description: 'This beautifully restored historic townhouse combines classic architecture with modern amenities. Features include original hardwood floors, crown molding, and a private garden.',
      agent: {
        name: 'Michael White',
        phone: '(555) 789-0123',
        email: 'michael.white@example.com',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
      }
    },
    {
      id: 10,
      title: 'Loft Apartment',
      price: '$3,200/month',
      location: 'Arts District',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811'
      ],
      bedrooms: 2,
      bathrooms: 2,
      area: '1,400 sq ft',
      type: 'apartment',
      amenities: ['parking', 'gym', 'security'],
      description: 'This industrial-style loft features high ceilings, exposed brick walls, and large windows. Located in the vibrant arts district, it offers easy access to galleries, restaurants, and nightlife.',
      agent: {
        name: 'Jennifer Lee',
        phone: '(555) 890-1234',
        email: 'jennifer.lee@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
      }
    },
    {
      id: 11,
      title: 'Golf Course Villa',
      price: '$6,500/month',
      location: 'Golf Course Area',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
      ],
      bedrooms: 3,
      bathrooms: 2,
      area: '2,800 sq ft',
      type: 'villa',
      amenities: ['parking', 'pool', 'golf access', 'security'],
      description: 'This elegant villa overlooks the golf course and offers stunning views. Features include a private pool, gourmet kitchen, and spacious outdoor living areas.',
      agent: {
        name: 'William Clark',
        phone: '(555) 901-2345',
        email: 'william.clark@example.com',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
      }
    },
    {
      id: 12,
      title: 'Riverside Apartment',
      price: '$2,900/month',
      location: 'Riverside',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811'
      ],
      bedrooms: 2,
      bathrooms: 1,
      area: '1,100 sq ft',
      type: 'apartment',
      amenities: ['parking', 'security'],
      description: 'This charming apartment offers river views and easy access to walking trails. Features include a balcony, updated kitchen, and comfortable living space.',
      agent: {
        name: 'Rachel Green',
        phone: '(555) 012-3456',
        email: 'rachel.green@example.com',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
      }
    },
    {
      id: 13,
      title: 'Modern Townhouse',
      price: '$4,800/month',
      location: 'Uptown',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
      ],
      bedrooms: 3,
      bathrooms: 2,
      area: '2,200 sq ft',
      type: 'house',
      amenities: ['parking', 'garden', 'security'],
      description: 'This modern townhouse features sleek design, smart home technology, and a private rooftop terrace. Located in a trendy neighborhood with easy access to shopping and dining.',
      agent: {
        name: 'Thomas Wright',
        phone: '(555) 123-4567',
        email: 'thomas.wright@example.com',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
      }
    },
    {
      id: 14,
      title: 'Luxury Penthouse',
      price: '$15,000/month',
      location: 'Downtown',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811'
      ],
      bedrooms: 4,
      bathrooms: 4,
      area: '4,500 sq ft',
      type: 'apartment',
      amenities: ['parking', 'gym', 'pool', 'security'],
      description: 'This spectacular penthouse offers 360-degree city views, private elevator, and luxury finishes throughout. Features include a wine cellar, home theater, and rooftop garden.',
      agent: {
        name: 'Sophia Chen',
        phone: '(555) 234-5678',
        email: 'sophia.chen@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
      }
    },
    {
      id: 15,
      title: 'Country Estate',
      price: '$9,500/month',
      location: 'Countryside',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
      ],
      bedrooms: 5,
      bathrooms: 4,
      area: '5,000 sq ft',
      type: 'villa',
      amenities: ['parking', 'pool', 'tennis court', 'security'],
      description: 'This magnificent estate offers privacy and luxury in a country setting. Features include a tennis court, swimming pool, guest house, and extensive gardens.',
      agent: {
        name: 'James Wilson',
        phone: '(555) 345-6789',
        email: 'james.wilson@example.com',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
      }
    }
  ];

  const searchProperties = (filters) => {
    return properties.filter(property => {
      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = property.title.toLowerCase().includes(query);
        const matchesLocation = property.location.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation) {
          return false;
        }
      }

      // Property type filter
      if (filters.propertyType !== 'all' && property.type !== filters.propertyType) {
        return false;
      }

      // Price range filter
      if (filters.priceRange !== 'all') {
        const price = parseInt(property.price.replace(/[^0-9]/g, ''));
        switch (filters.priceRange) {
          case 'under-1000':
            if (price >= 1000) return false;
            break;
          case '1000-2000':
            if (price < 1000 || price > 2000) return false;
            break;
          case '2000-3000':
            if (price < 2000 || price > 3000) return false;
            break;
          case 'over-3000':
            if (price <= 3000) return false;
            break;
        }
      }

      // Bedrooms filter
      if (filters.bedrooms !== 'all' && property.bedrooms !== parseInt(filters.bedrooms)) {
        return false;
      }

      // Bathrooms filter
      if (filters.bathrooms !== 'all' && property.bathrooms !== parseInt(filters.bathrooms)) {
        return false;
      }

      // Amenities filter
      if (filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every(amenity =>
          property.amenities.includes(amenity)
        );
        if (!hasAllAmenities) return false;
      }

      return true;
    });
  };

  const toggleFavorite = (propertyId) => {
    setFavorites(prev => {
      if (prev.includes(propertyId)) {
        return prev.filter(id => id !== propertyId);
      } else {
        return [...prev, propertyId];
      }
    });
  };

  const isFavorite = (propertyId) => {
    return favorites.includes(propertyId);
  };

  const getPropertyById = (id) => {
    return properties.find(property => property.id === parseInt(id));
  };

  return (
    <PropertyContext.Provider value={{
      properties,
      favorites,
      searchProperties,
      toggleFavorite,
      isFavorite,
      getPropertyById
    }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
}; 