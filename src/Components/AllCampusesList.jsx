import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App/App.css';

function CampusesList(props) {
  const { allCampuses, handleDelete } = props;
  const navigate = useNavigate();
  const studentsCount = (campus) => {
    return campus.students && campus.students.length > 0 ? campus.students.length : 0;
  }

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
        <div id="campus-container">
          {allCampuses.map((campus) => (
            <div key={campus.id} id="campus">
              {campus.imageUrl && <img src={campus.imageUrl} alt={campus.name} id="campusImage" />}
              <h1 id="campus-name">
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              </h1>
              <p id="campus-students">{studentsCount(campus)} students</p>
              <button className="button-edit button-size" onClick={() => handleEdit(campus.id)}>Edit</button>
              <button className="button-delete button-size" onClick={() => handleDelete(campus.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CampusesList;