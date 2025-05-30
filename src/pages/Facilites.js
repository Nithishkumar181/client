import React from 'react';
import './Facilites.css';
import { Navigate, useNavigate } from 'react-router-dom';

const resorts = [
  {
    image: 'https://wallpapers.com/images/thumbnail/maldives-floating-cottage-1920x1080-hd-beach-desktop-dbh577ugq54t84mr.webp',
    title: 'Luxury Beach Resort',
    description: 'Escape to paradise with luxury, comfort, and breathtaking views.',
    note: 'Party Dinner Hall Available',
  },
  {
    image: 'https://wallpapers.com/images/thumbnail/maldives-overwater-villa-sunset-9stcso73ygefn60b.webp',
    title: 'Oceanfront Comfort',
    description: 'A beachfront resort combines stunning views with world-class comfort.',
    note: 'All types of parties available',
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    title: 'Mountain Retreat',
    description: 'A haven for adventure lovers and nature seekers.',
    note: 'Meals, drinks, and activities included',
  },
  {
    image: 'https://wallpapers.com/images/thumbnail/striking-maldives-tropical-desktop-xdt3a7tjxc26i2fi.webp',
    title: 'All-Inclusive Luxury',
    description: 'Stress-free vacations with everything taken care of.',
    note: 'Spa, yoga, and wellness facilities',
  },
  {
    image: 'https://wallpapers.com/images/thumbnail/maldives-beach-summer-254srxamegiltred.webp',
    title: 'Poolside Elegance',
    description: 'Resorts that blend hospitality, nature, and comfort.',
    note: 'Elegant rooms, villas, or overwater bungalows',
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    title: 'Mountain Retreat',
    description: 'A haven for adventure lovers and nature seekers.',
    note: 'Meals, drinks, and activities included',
  },
  {
    image: 'https://wallpapers.com/images/thumbnail/striking-maldives-tropical-desktop-xdt3a7tjxc26i2fi.webp',
    title: 'All-Inclusive Luxury',
    description: 'Stress-free vacations with everything taken care of.',
    note: 'Spa, yoga, and wellness facilities',
  },
  {
    image: 'https://wallpapers.com/images/thumbnail/maldives-beach-summer-254srxamegiltred.webp',
    title: 'Poolside Elegance',
    description: 'Resorts that blend hospitality, nature, and comfort.',
    note: 'Elegant rooms, villas, or overwater bungalows',
  },
];

const Facilities = () => {
       const navigate = useNavigate();
  return (
    <div className="facilities">
      <div className="top-right-btn">
      <button onClick={()=>navigate('/Register')} className="book-now-small">Book Now</button>
    </div>
      <h1 className="page-title" >🌴 Our Luxury Resorts 🌅</h1>
      <div className="resort-grid">
        {resorts.map((resort, index) => (
          <div className="resort-card" key={index}>
            <img src={resort.image} alt={resort.title} className="resort-img" />
            <div className="resort-content">
              <h2>{resort.title}</h2>
              <p>{resort.description}</p>
              <p className="note">{resort.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Facilities;
