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
