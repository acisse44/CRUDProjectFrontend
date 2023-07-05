import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchAllCampusesThunk,
  deleteACampusThunk,
} from "../../Redux/campuses/campuses.actions";
import CampusesList from "../../Components/AllCampusesList";
import "../../App/App.css";
import { fetchAllStudentsThunk } from "../../Redux/students/students.actions";

function Campuses() {
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAllCampuses = () => {
    dispatch(fetchAllCampusesThunk());
    dispatch(fetchAllStudentsThunk());
  };

  const handleDelete = (id) => {
    dispatch(deleteACampusThunk(id));
  };

  const handleAddCampus = () => {
    navigate("/campuses/add");
  };

  useEffect(() => {
    fetchAllCampuses();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "60px" }} className="title">
        All Campuses
      </h1>
      <button className="button-add" onClick={handleAddCampus}>
        Add Campus
      </button>
      <div id="campusesList">
        <CampusesList allCampuses={allCampuses} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default Campuses;
