import React, { useState } from "react";
import axios from "axios";
import './UpdateCustomer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'; 

function UpdateCustomer() {
  const [room_id, setRoomId] = useState();
  const [updatedata, setupdateData] = useState({});

  const handleChange = e =>
    setupdateData({ ...updatedata, [e.target.name]: e.target.value });

  const update = async () => {
    await axios.put(`https://lastbackends.onrender.com/update-booking/${room_id}`, updatedata);
    alert("Booking updated");
  };

  return (
    <div className="update-container">
      <div className="form-card">
        <h2 className="title">
          <FontAwesomeIcon icon={faUserEdit} className="icon" /> Update Booking
        </h2>
        <input
          className="input"
          placeholder="Room ID"
          onChange={e => setRoomId(e.target.value)}
        />
        <br />
        {["customer_name", "customer_age", "customer_address", "customer_mobileNo", "customer_aadharno"].map(field => (
          <input
            key={field}
            name={field}
            className="input"
            placeholder={field.replace("_", " ")}
            onChange={handleChange}
          />
        ))}
        <br />
        <button className="update-button" onClick={update}>Update</button>
      </div>
    </div>
  );
}

export default UpdateCustomer;
