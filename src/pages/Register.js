import React, { useState } from 'react';
import axios from 'axios';
import './Home.css'

const AddCustomer = () => {
  const [data, setData] = useState({
    room_id: '',
    customer_name: '',
    customer_age: '',
    customer_address: '',
    customer_mobileNo: '',
    customer_aadharno: ''
  });

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
<<<<<<< HEAD
    await axios.post('https://livebackend-1-07tz.onrender.com/add-booking/', data);
=======
    await axios.post('https://lastbackends.onrender.com/add-booking/', data);
>>>>>>> aec2135 (Initial commit with backend URL updates)
    alert('Booking Added');
  };

  return (
    <div className="toy-form">
      <h2 className="title"> User Register </h2>
      {Object.keys(data).map(field => (
        <div key={field} className="input-group">
          <input
            name={field}
            placeholder={field.replace(/_/g, ' ')}
            onChange={handleChange}
            className="toy-input"
          />
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>
         Submit
      </button>
    </div>
  );
};

export default AddCustomer;
