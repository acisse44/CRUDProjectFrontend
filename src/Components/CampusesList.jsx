import React from 'react';
import '../App/App.css';

function CampusesList(props) {
  const { allCampuses, handleDelete } = props;

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
              <h1 id="campus-name">{campus.description}</h1>
              <p id="campus-students">{campus.id} students</p>
              <button className="button-edit">Edit</button>
              <button className="button-delete" onClick={() => handleDelete(campus.id)}>
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