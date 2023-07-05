import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/AllStudentsList.css";
import "../CSS/EditAddForms.css";

function Students(props) {
  const { allStudents, allCampuses, handleDelete } = props;
  const campusesArray = Object.values(allCampuses);
  const navigate = useNavigate();

  const getCampusName = (campusId) => {
    const campus = campusesArray.find((campus) => campus.id === campusId);
    return campus ? campus.name : "Unknown Campus";
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
        <div className="all-students-container">
          {allStudents.map((student) => (
            <div key={student.id} className="single-student-container">
              <img
                src={student.imageUrl}
                alt={student.firstName}
                className="student-image"
              />
              <div className="student-details">
                <h2>
                  <Link to={`/students/${student.id}`}>
                    {student.firstName} {student.lastName}
                  </Link>
                </h2>
                <p>{getCampusName(student.campusId)}</p>
              </div>
              <div className="buttons-container">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(student.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Students;
