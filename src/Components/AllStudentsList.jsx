import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App/App.css';

function Students(props) {
  const { allStudents, allCampuses, handleDelete } = props;
  const campusesArray = Object.values(allCampuses);
  const navigate = useNavigate();

  const getCampusName = (campusId) => {
    const campus = campusesArray.find((campus) => campus.id === campusId);
    return campus ? campus.name : 'Unknown Campus';
  };

  const handleEdit = (studentId) => {
    navigate(`/students/${studentId}/edit`);
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
              <button className="button-edit button-size" onClick={() => handleEdit(student.id)}>Edit</button>
              <button className="student-button-delete button-size" onClick={() => handleDelete(student.id)}>
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