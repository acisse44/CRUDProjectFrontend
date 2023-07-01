import React from "react";
import { useDispatch } from "react-redux";
import {  deleteACampusThunk }  from "../Redux/campuses/campuses.actions"
import "../App/App.css";

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
        <div>
          {allCampuses.map((allCampuses) => (
            <div key={allCampuses.id} id="campus">
              <img src={allCampuses.imageUrl} alt={allCampuses.Name} id="campusImage" />
              <div>{allCampuses.description}</div>
              <div>{allCampuses.address}</div>
              <button onClick={() => handleDelete(allCampuses.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CampusesList;