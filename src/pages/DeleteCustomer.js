import React, { useState } from 'react';
import axios from 'axios';
import './DeleteCustomer.css';



function DeleteCustomer() {
  const [room_id, setRoomId] = useState('');
   
  const handleDelete = async () => {
    await axios.delete(`https://lastbackends.onrender.com/delete-booking/${room_id}`);
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
