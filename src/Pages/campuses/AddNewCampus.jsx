import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCampusThunk } from '../../Redux/campuses/campuses.actions';
import Campuses from '../campuses/Campuses';
import "../../CSS/campusForm.css"

function AddNewCampus() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCampusNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const campusData = {
      name,
      imageUrl,
      description,
      address,
    };
    dispatch(addCampusThunk(campusData));

    setName('');
    setImageUrl('');
    setDescription('');
    setAddress('');
    setSubmitted(true);
  };


  if (submitted) {
    navigate("/campuses");
    return null;
  }

  return (
    <div>
      <h1 class="form-title">Add A New Campus</h1>
      <form class="form" onSubmit={handleSubmit}>
        <div class="input">
          <label class="input-label">
            Campus Name:
            <input class="input-field" type="text" value={name} onChange={handleCampusNameChange} />
          </label>
        </div>
        <div class="input">
          <label class="input-label">
            Image URL:
            <input class="input-field" type="text" value={imageUrl} onChange={handleImageUrlChange} />
          </label>
        </div>
        <div class="input">
          <label class="input-label">
            Description:
            <input class="input-field" type="text" value={description} onChange={handleDescriptionChange} />
          </label>
        </div>
        <div class="input">
          <label class="input-label">
            Address:
            <input class="input-field" type="text" value={address} onChange={handleAddressChange} />
          </label>
        </div>
        <button class="button-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewCampus;