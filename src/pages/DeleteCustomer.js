import React, { useState } from 'react';
import axios from 'axios';
import './DeleteCustomer.css';



function DeleteCustomer() {
  const [room_id, setRoomId] = useState('');
   
  const handleDelete = async () => {
<<<<<<< HEAD
    await axios.delete(`https://livebackend-1-07tz.onrender.com/delete-booking/${room_id}`);
=======
    await axios.delete(`https://lastbackends.onrender.com/delete-booking/${room_id}`);
>>>>>>> aec2135 (Initial commit with backend URL updates)
    alert("Booking Deleted");
  };

  return (
    <div class="car">
  <div className="delete-container">
    <h2>Delete Booking</h2>
    <input placeholder="Room ID" onChange={e => setRoomId(e.target.value)} /><br />
    <button onClick={handleDelete}>Delete</button>
  </div>
  </div>
);
}
export default DeleteCustomer;
