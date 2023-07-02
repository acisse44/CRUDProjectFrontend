import React from 'react';
import '../App/App.css';

function Students(props) {
  const { allStudents, allCampuses, handleDelete } = props;
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
              <div id="student-name">{student.firstName} {student.lastName}</div>
              <div id="student-email">{student.email}</div>
              <div id="student-campus">{getCampusName(student.campusId)}</div>
              <button className="button-edit">Edit</button>
              <button className="button-delete" onClick={() => handleDelete(student.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Students;