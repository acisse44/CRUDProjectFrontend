import React from "react";
import { useDispatch } from "react-redux";
import {  deleteACampusThunk }  from "../Redux/campuses/campuses.actions"
import "../App/App.css"

function CampusesList(props) {
  const { allCampuses } = props;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteACampusThunk(id));
  }

  return (
    <div>
      {allCampuses.length === 0 ? (
        <div>
          <div>Empty</div>
          <div>No campuses</div>
        </div>
      ) : (
        <div id="campus-container"> 
          {allCampuses.map((allCampuses) => (
            <div key={allCampuses.id} id="campus">
              <img src={allCampuses.imageUrl} alt={allCampuses.Name} id="campusImage" />
              <h1 id="campus-name">{allCampuses.description}</h1>
              <p id="campus-students">{allCampuses.id} students</p>
              <button class="button-edit">Edit</button>
              <button class="button-delete" onClick={() => handleDelete(allCampuses.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CampusesList;