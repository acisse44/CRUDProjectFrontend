import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/AllCampusesList.css";
import "../CSS/EditAddForms.css";

function CampusesList(props) {
  const { allCampuses, handleDelete } = props;
  const navigate = useNavigate();
  const studentsCount = (campus) => {
    return campus.students && campus.students.length > 0
      ? campus.students.length
      : 0;
  };

  const handleEdit = (campusId) => {
    navigate(`/campuses/${campusId}/edit`);
  };

  return (
    <div>
      {!allCampuses || allCampuses.length === 0 ? (
        <div>
          <div>Empty</div>
          <div>No campuses</div>
        </div>
      ) : (
        <div className="all-campuses-container">
          {allCampuses.map((campus) => (
            <div key={campus.id} className="single-campus-container">
              <img
                src={campus.imageUrl}
                alt={campus.name}
                className="campusImage"
              />
              <div className="campus-details">
                <h2>
                  <Link
                    to={`/campuses/${campus.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {campus.name}
                  </Link>
                </h2>
                <p>{studentsCount(campus)} students</p>
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
          ))}
        </div>
      )}
    </div>
  );
}

export default CampusesList;
