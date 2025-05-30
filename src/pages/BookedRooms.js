import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookedRooms.css';

const roomsData = [
    {
      id: 1,
      title: 'KG Apartment',
      image: 'https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.webp?a=1&b=1&s=612x612&w=0&k=20&c=UZ72TuOX4FJrasB3Ft5K7Lqzj8r2gTQubccH2CDLg2w=',
      description: 'Modern elegance met comfort, with high-tech amenities, soundproof walls, and a curated minibar.',
      price: '₹2,999 per night',
    },
    {
      id: 2,
      title: 'Ocean View Suite',
      image: 'https://media.istockphoto.com/id/957080876/photo/dark-wooden-luxury-bedroom-corner.jpg?s=612x612&w=0&k=20&c=f3kUPd83oTdAOSQtE1dmJptztSqLJfgEYki4PN26A3A=',
      description: 'Wake up to the sound of waves in this luxurious suite with a panoramic sea view.',
      price: '₹4,499 per night',
    },
    {
      id: 3,
      title: 'KG Apartment',
      image: 'https://thumbs.dreamstime.com/b/master-bedroom-presidential-suite-five-star-hotel-day-time-32794035.jpg?w=768',
      description: 'Modern elegance met comfort, with high-tech amenities, soundproof walls, and a curated minibar.',
      price: '₹2,999 per night',
    },
    {
      id: 4,
      title: 'Ocean View Suite',
      image: 'https://thumbs.dreamstime.com/b/luxury-hotel-room-2-29598961.jpg?w=768',
      description: 'Wake up to the sound of waves in this luxurious suite with a panoramic sea view.',
      price: '₹4,499 per night',
    },
    {
      id: 5,
      title: 'KG Apartment',
      image: 'https://media.gettyimages.com/id/184609057/photo/luxury-hotel-room.jpg?s=612x612&w=0&k=20&c=NN1OTddvUxGx-CNSHYe2SQvsV7diMg8AByIlnHM39Xw=',
      description: 'Modern elegance met comfort, with high-tech amenities, soundproof walls, and a curated minibar.',
      price: '₹2,999 per night',
    },
    {
      id: 6,
      title: 'Ocean View Suite',
      image: 'https://thumbs.dreamstime.com/b/red-room-hotel-2217528.jpg?w=768',
      description: 'Wake up to the sound of waves in this luxurious suite with a panoramic sea view.',
      price: '₹4,499 per night',
    },
    {
      id: 7,
      title: 'KG Apartment',
      image: 'https://thumbs.dreamstime.com/b/hotel-room-22008848.jpg?w=768',
      description: 'Modern elegance met comfort, with high-tech amenities, soundproof walls, and a curated minibar.',
      price: '₹2,999 per night',
    },
    {
      id: 8,
      title: 'Ocean View Suite',
      image: 'https://thumbs.dreamstime.com/b/luxury-hotel-room-2-29598961.jpg?w=768',
      description: 'Wake up to the sound of waves in this luxurious suite with a panoramic sea view.',
      price: '₹4,499 per night',
    },
    {
      id: 9,
      title: 'KG Apartment',
      image: 'https://thumbs.dreamstime.com/b/hotel-room-22007891.jpg?w=768',
      description: 'Modern elegance met comfort, with high-tech amenities, soundproof walls, and a curated minibar.',
      price: '₹2,999 per night',
    },
];

const BookedRooms = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
<<<<<<< HEAD
    axios.get('https://livebackend-1-07tz.onrender.com/bookings')
=======
    axios.get('https://lastbackends.onrender.com/bookings')
>>>>>>> aec2135 (Initial commit with backend URL updates)
      .then((res) => setBookings(res.data))
      .catch((err) => console.error('Error fetching bookings:', err));
  };

  const deleteBooking = (id) => {
<<<<<<< HEAD
    axios.delete(`https://livebackend-1-07tz.onrender.com/bookings/${id}`)
=======
    axios.delete(`https://lastbackends.onrender.com/bookings/${id}`)
>>>>>>> aec2135 (Initial commit with backend URL updates)
      .then(() => {
        setBookings((prevBookings) => prevBookings.filter((b) => b.id !== id));
      })
      .catch((err) => console.error('Error deleting booking:', err));
  };

  const getRoomDetails = (roomId) => {
    return roomsData.find((room) => room.id === parseInt(roomId));
  };

  return (
    <div className="booked-rooms-container">
      <h2 className="heading" style={{ color: "white" }}>Booked Rooms</h2>
      
      {bookings.length === 0 ? (
        <p className="no-bookings" style={{ color: "white", textAlign: "center" }}>
          No bookings available.
        </p>
      ) : (
        <div className="booked-rooms-grid">
          {bookings.map((booking) => {
            const room = getRoomDetails(booking.room_id);
            return (
              room && (
                <div key={booking.id} className="booked-room-card">
                  <img src={room.image} alt={room.title} className="room-img" />
                  <div className="room-details">
                    <h3>{room.title}</h3>
                    <p><strong>Customer:</strong> {booking.customer_name}</p>
                    <p><strong>Mobile:</strong> {booking.customer_mobileNo}</p>
                    <p><strong>Room Price:</strong> {room.price}</p>
                    <button
                      className="remove-btn"
                      onClick={() => deleteBooking(booking.id)}
                    >
                      Remove Booking
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookedRooms;
