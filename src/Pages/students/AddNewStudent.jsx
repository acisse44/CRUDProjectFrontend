import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentThunk } from '../../Redux/students/students.actions';
import { useNavigate } from 'react-router-dom';

function AddNewStudent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [email, setEmail] = useState('');
  const [gpa, setGpa] = useState('');
  const [campusId, setCampusId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const allCampuses = useSelector((state) => state.campuses.allCampuses);


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGpaChange = (event) => {
    setGpa(event.target.value);
  };

  const handleCampusChange = (event) => {
    setCampusId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const studentData = {
      firstName,
      lastName,
      imageUrl,
      email,
      gpa,
      campusId,
    };
    dispatch(addStudentThunk(studentData));

    setFirstName('');
    setLastName('');
    setImageUrl('');
    setEmail('');
    setGpa('');
    setCampusId('');
    setSubmitted(true);
  };

  if (submitted) {
    navigate("/students");
    return null;
  }

  return (
    <div>
      <h1>Add A New Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} />
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
            Email:
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>
        </div>
        <div>
          <label>
            GPA:
            <input type="text" value={gpa} onChange={handleGpaChange} />
          </label>
        </div>
        <div>
          <label>
            Campus:
            <select value={campusId} onChange={handleCampusChange}>
              <option value="">Select a campus</option>
              {allCampuses.map((campus) => (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewStudent;