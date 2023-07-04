import React from "react";
import { useNavigate, Link } from 'react-router-dom';

function SingleCampusList(props) {
  const { campus, handleDelete } = props;
  const students = campus.students;
  const navigate = useNavigate();


  const handleEdit = (studentId) => {
    navigate(`/students/${studentId}/edit`);
  };

  return (
    <div className="single-campus-container">
      { !campus && campus.length === 0 ? (
        <div>
          <div>Empty</div>
          <div>No campus</div>
        </div>
      ) : (
        <div>
          <div className="campus" key={campus.id}>
            <img src={campus.imageUrl} alt={campus.Name} className="campus-image" />
            <div className="campus-description">{campus.description}</div>
            <div className="campus-address">{campus.address}</div>
          </div>

      { students && students.length > 0 ? (
        <div>
          <h2>Students</h2>
          <div id="student-container">
            {students.map((student) => (
              <div key={student.id} id="student">
                <img src={student.imageUrl} alt={student.firstName} id="studentImage" />
                <h1 id="student-name">
                <Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link>
                </h1>
                <button className="button-edit button-size" onClick={() => handleEdit(student.id)}>Edit</button>
                <button className="student-button-delete button-size" onClick={() => handleDelete(student.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
          <div>No students</div>
        )}
      </div>
      )}
    </div>
  );
}

export default SingleCampusList;