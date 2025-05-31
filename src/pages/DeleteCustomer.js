import React, { useState } from 'react';
import { api } from '../api';
import './DeleteCustomer.css';

function DeleteCustomer() {
  const [roomId, setRoomId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
   
  const handleDelete = async () => {
<<<<<<< HEAD
    if (!roomId.trim()) {
      setError('Please enter a Room ID');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await api.deleteBooking(roomId);
      setSuccess('Booking deleted successfully');
      setRoomId(''); // Clear input after successful deletion
    } catch (err) {
      setError(err.message || 'Failed to delete booking. Please try again.');
      console.error('Error deleting booking:', err);
    } finally {
      setLoading(false);
    }
=======
    await axios.delete(`https://lastbackends.onrender.com/delete-booking/${room_id}`);
    alert("Booking Deleted");
>>>>>>> e917f14f3fe629bb650af9f53e8ce86f240a203e
  };

  return (
    <div className="car">
      <div className="delete-container">
        <h2>Delete Booking</h2>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {success && (
          <div className="success-message">
            {success}
          </div>
        )}

        <div className="input-group">
          <input 
            type="text"
            placeholder="Room ID" 
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
            disabled={loading}
          />
        </div>

        <button 
          onClick={handleDelete}
          disabled={loading}
          className="delete-button"
        >
          {loading ? 'Deleting...' : 'Delete Booking'}
        </button>
      </div>
    </div>
  );
}

export default DeleteCustomer;
