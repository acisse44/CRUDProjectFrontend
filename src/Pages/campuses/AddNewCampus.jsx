import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCampusThunk } from '../../Redux/campuses/campuses.actions';

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
      <h1>Add A New Campus</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Campus Name:
            <input type="text" value={name} onChange={handleCampusNameChange} />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input type="text" value={description} onChange={handleDescriptionChange} />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input type="text" value={address} onChange={handleAddressChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewCampus;