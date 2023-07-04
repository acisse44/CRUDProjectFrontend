import React from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';

function Students(props) {
  const { allStudents, allCampuses } = props;
  const campusesArray = Object.values(allCampuses);

  const getCampusName = (campusId) => {
    const campus = campusesArray.find((campus) => campus.id === campusId);
    return campus ? campus.name : 'Unknown Campus';
  };


  return (
    <div>
      {!allStudents || allStudents.length === 0 ? (
        <div>
          <div>Empty</div>
          <div>No students</div>
        </div>
      ) : (
        <div id="student-container">
          {allStudents.map((student) => (
            <div key={student.id} id="student">
              <img src={student.imageUrl} alt={student.firstName} id="studentImage" />
              <h1 id="student-name">
              <Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link>
              </h1>
              <h1 id="student-campus">{getCampusName(student.campusId)}</h1>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Students;