import React, { useState } from "react";
import { api } from '../api';
import './UpdateCustomer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'; 

function UpdateCustomer() {
  const [roomId, setRoomId] = useState('');
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_age: '',
    customer_address: '',
    customer_mobileNo: '',
    customer_aadharno: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!roomId.trim()) {
      setError('Please enter a Room ID');
      return false;
    }

    // Check if at least one field is filled
    const hasChanges = Object.values(formData).some(value => value.trim() !== '');
    if (!hasChanges) {
      setError('Please fill at least one field to update');
      return false;
    }

    return true;
  };

  const handleUpdate = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Remove empty fields from the update data
      const updateData = Object.entries(formData).reduce((acc, [key, value]) => {
        if (value.trim() !== '') {
          acc[key] = value;
        }
        return acc;
      }, {});

      await api.updateBooking(roomId, updateData);
      setSuccess('Booking updated successfully');
      
      // Clear form after successful update
      setRoomId('');
      setFormData({
        customer_name: '',
        customer_age: '',
        customer_address: '',
        customer_mobileNo: '',
        customer_aadharno: ''
      });
    } catch (err) {
      setError(err.message || 'Failed to update booking. Please try again.');
      console.error('Error updating booking:', err);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: 'customer_name', label: 'Customer Name', type: 'text' },
    { name: 'customer_age', label: 'Age', type: 'number' },
    { name: 'customer_address', label: 'Address', type: 'text' },
    { name: 'customer_mobileNo', label: 'Mobile Number', type: 'tel' },
    { name: 'customer_aadharno', label: 'Aadhar Number', type: 'text' }
  ];

  return (
    <div className="update-container">
      <div className="form-card">
        <h2 className="title">
          <FontAwesomeIcon icon={faUserEdit} className="icon" /> Update Booking
        </h2>

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
            className="input"
            type="text"
            placeholder="Room ID"
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
            disabled={loading}
          />
        </div>

        {fields.map(field => (
          <div key={field.name} className="input-group">
            <input
              type={field.type}
              name={field.name}
              className="input"
              placeholder={field.label}
              value={formData[field.name]}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
        ))}

        <button 
          className="update-button" 
          onClick={handleUpdate}
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Booking'}
        </button>
      </div>
    </div>
  );
}

export default UpdateCustomer;
