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
            </div>
          </div>

          {students && students.length > 0 ? (
            <div>
              <h2>Students</h2>
              <div className="student-container">
                {students.map((student) => (
                  <div key={student.id} className="student">
                    <img
                      src={student.imageUrl}
                      alt={student.firstName}
                      className="student-image"
                    />
                    <h1 className="student-name">
                      <Link to={`/students/${student.id}`}>
                        {student.firstName} {student.lastName}
                      </Link>
                    </h1>
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
