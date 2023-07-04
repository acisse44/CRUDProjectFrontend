import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudentThunk } from '../../Redux/students/students.actions';
import "../../CSS/campusForm.css"

function AddNewStudent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    imageUrl: '',
    email: '',
    gpa: '',
    campusId: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!studentData.firstName || !studentData.lastName || 
        !studentData.email || !studentData.gpa || !studentData.campusId) {
      alert('Please fill out all required fields.');
      return;
    }
    dispatch(addStudentThunk(studentData));

    setStudentData({
      firstName: '',
      lastName: '',
      imageUrl: '',
      email: '',
      gpa: '',
      campusId: '',
    });
    setSubmitted(true);
  };

  if (submitted) {
    navigate("/students");
    return null;
  }

  return (
    <div>
      <h1 className="form-title">Add A New Student</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="firstName" className="input-label">
            First Name:
            <input
              id="firstName"
              className="input-field"
              type="text"
              name="firstName"
              value={studentData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="lastName" className="input-label">
            Last Name:
            <input
              id="lastName"
              className="input-field"
              type="text"
              name="lastName"
              value={studentData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"

            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="imageUrl" className="input-label">
            Image URL:
            <input
              id="imageUrl"
              className="input-field"
              type="text"
              name="imageUrl"
              value={studentData.imageUrl}
              onChange={handleChange}
              placeholder="Enter your image URL"

            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="email" className="input-label">
            Email:
            <input
              id="email"
              className="input-field"
              type="text"
              name="email"
              value={studentData.email}
              onChange={handleChange}
              placeholder="Enter your email address"

            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="gpa" className="input-label">
            GPA:
            <input
              id="gpa"
              className="input-field"
              type="text"
              name="gpa"
              value={studentData.gpa}
              onChange={handleChange}
              placeholder="Enter your GPA"
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="campusId" className="input-selectlabel">
            Campus:
            <select
              id="campusId"
              className="input-select"
              name="campusId"
              value={studentData.campusId}
              onChange={handleChange}
            >
              <option value="">Select a campus</option>
              {allCampuses.map((campus) => (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button className="button-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewStudent;