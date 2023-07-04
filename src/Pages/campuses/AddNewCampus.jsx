import { useDispatch } from 'react-redux';
import { addCampusThunk } from '../../Redux/campuses/campuses.actions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewCampus() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [campusData, setCampusData] = useState({
    name: '',
    imageUrl: '',
    description: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCampusData((prevState) => ({ ...prevState, [name]: value,}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCampusThunk(campusData));

    setCampusData({
      name: '',
      imageUrl: '',
      description: '',
      address: '',
    });
    setSubmitted(true);
  };

  if (submitted) {
    navigate("/campuses");
    return null;
  }

  return (
    <div>
      <h1 className="form-title">Add A New Campus</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <label className="input-label" htmlFor="name">
            Campus Name:
            <input
              className="input-field"
              type="text"
              id="name"
              name="name"
              value={campusData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="input">
          <label className="input-label" htmlFor="imageUrl">
            Image URL:
            <input
              className="input-field"
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={campusData.imageUrl}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="input">
          <label className="input-label" htmlFor="description">
            Description:
            <input
              className="input-field"
              type="text"
              id="description"
              name="description"
              value={campusData.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="input">
          <label className="input-label" htmlFor="address">
            Address:
            <input
              className="input-field"
              type="text"
              id="address"
              name="address"
              value={campusData.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="button-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewCampus;