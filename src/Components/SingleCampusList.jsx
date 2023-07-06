import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAStudentThunk } from "../Redux/students/students.actions";
import { fetchSingleCampusThunk } from "../Redux/campuses/campuses.actions";
import "../CSS/SingleCampusList.css";

function SingleCampusList(props) {
  const { campus } = props;
  const students = campus.students;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const studentsCount = (campus) => {
    return campus.students && campus.students.length > 0
      ? campus.students.length
      : 0;
  };

  const handleDelete = (id) => {
    // Refreshes the page automatically after you delete
    dispatch(deleteAStudentThunk(id)).then(() =>
      dispatch(fetchSingleCampusThunk(campus.id))
    );
  };

  const handleEdit = (studentId) => {
    navigate(`/students/${studentId}/edit`);
  };

  return (
    <div className="campus-container">
      {!campus && campus.length === 0 ? (
        <div>
          <div>Empty</div>
          <div>No campus</div>
        </div>
      ) : (
        <div>
          <div className="campus" key={campus.id}>
            <div>
              <img
                src={campus.imageUrl}
                alt={campus.Name}
                className="campus-image"
              />
            </div>
            <div>
              <h2 className="campus-name">{campus.name}</h2>
              <div className="campus-address">{campus.address}</div>
              <div className="campus-description">{campus.description}</div>
              <div className="campus-student-count">
                Number of students: {studentsCount(campus)}
              </div>
              <div className="buttons-container">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(campus.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(campus.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          {students && students.length > 0 ? (
            <div>
              <h2>Students</h2>
              <div className="all-students-container">
                {students.map((student) => (
                  <div key={student.id} className="single-student-container">
                    <img
                      src={student.imageUrl}
                      alt={student.firstName}
                      className="student-image"
                    />
                    <h1>
                      <Link to={`/students/${student.id}`}>
                        {student.firstName} {student.lastName}
                      </Link>
                    </h1>
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
