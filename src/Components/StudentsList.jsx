import React from "react";
import { useDispatch } from "react-redux";
import {  deleteAStudentThunk }  from "../Redux/students/students.actions"
import "../App/App.css";

function StudentsallStudents(props) {
  const { allStudents } = props;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteAStudentThunk(id));
  }
  
  return (
    <div>
      {allStudents.length === 0 ? (
        <div>
          <div>Empty</div>
          <div>No students</div>
        </div>
      ) : (
        <div>
          {allStudents.map((allStudents) => (
            <div id="student" key={allStudents.id}>
              <img src={allStudents.imageUrl} alt={allStudents.firstName} id="studentImage" />
              <div>{allStudents.firstName} {allStudents.lastName}</div>
              <div>{allStudents.email}</div>
              <button onClick={() => handleDelete(allStudents.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentsallStudents;