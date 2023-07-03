import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentThunk } from '../../Redux/students/students.actions';
import Students from '../students/Students';
import "../../CSS/campusForm.css"

function AddNewStudent() {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campuses); // Assuming you have a 'campuses' slice of state in your Redux store

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
    return <Students />;
  }

  return (
    <div>
      <h1 class="form-title">Add A New Student</h1>
      <form class="form" onSubmit={handleSubmit}>
        <div class="input">
          <label class="input-label">
            First Name:
            <input class="input-field" type="text" value={firstName} onChange={handleFirstNameChange} />
          </label>
        </div>
        <div class="input">
          <label class="input-label">
            Last Name:
            <input class="input-field" type="text" value={lastName} onChange={handleLastNameChange} />
          </label>
        </div >
        <div class="input">
          <label class="input-label">
            Image URL:
            <input class="input-field" type="text" value={imageUrl} onChange={handleImageUrlChange} />
          </label>
        </div>
        <div class="input">
          <label class="input-label">
            Email:
            <input class="input-field" type="text" value={email} onChange={handleEmailChange} />
          </label>
        </div>
        <div class="input">
          <label class="input-label">
            GPA:
            <input class="input-field" type="text" value={gpa} onChange={handleGpaChange} />
          </label>
        </div>
        <div class="input">
          <label class="input-selectlabel">
            Campus:
            <select class="input-select" value={campusId} onChange={handleCampusChange}>
              <option value="">Select a campus</option>
              {allCampuses.map((campus) => (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button class="button-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewStudent;