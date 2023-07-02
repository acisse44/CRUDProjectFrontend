import React, { useState } from 'react';

function AddNewCampus() {
  const [campusName, setCampusName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

  const handleChange = (event) => {
    setCampusName(event.target.value);
    setImageURL(event.target.value);
    setDescription(event.target.value);
    setAddress(event.target.value);
  };

  return (
    <div>
      <h1>Add Campus Form</h1>
      <form>
        <label>
          Campus Name:
          <input type="text" value={campusName} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" value={imageURL} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default AddNewCampus;
