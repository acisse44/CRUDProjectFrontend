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
    <div id = "addingNewCampus">
      <h1 id = "addCampus"> Add a New Campus</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <input style = {{backgroundColor: 'white', border: '1px solid black'}}type="text" id="campNameInput" value={name} onChange={handleCampusNameChange} placeholder="Enter Campus Name" />
        </div>
        <div>
            <input style = {{backgroundColor: 'white', border: '1px solid black'}}type="text" id="campImgInput"value={imageUrl} onChange={handleImageUrlChange} placeholder="Enter Image URL" />
        </div>
        <div>
            <textarea style = {{border: '1px solid black'}}type="text" id="campDescInput"value={description} onChange={handleDescriptionChange} placeholder="Enter Description" />
        </div>
        <div>
            <input style = {{backgroundColor: 'white', border: '1px solid black'}}type="text" id="campAddyInput"value={address} onChange={handleAddressChange} placeholder="Enter Address"/>
        </div>
        <button type="submit" id="campSubmit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewCampus;