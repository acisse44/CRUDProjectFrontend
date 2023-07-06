import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCampusThunk } from "../../Redux/campuses/campuses.actions";
import SingleCampusList from "../../Components/SingleCampusList";
import { useNavigate, useParams } from "react-router-dom";
import "../../CSS/SingleCampusList.css";

function Campus() {
  const campus = useSelector((state) => state.campuses.singleCampus);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchSingleCampus = () => {
    return dispatch(fetchSingleCampusThunk(id));
  };

  useEffect(() => {
    fetchSingleCampus();
  }, [id]);

  return (
    <div>
      <h1 className= "campusHeading">Campus</h1>
      <div id="singleCampusList">
        <SingleCampusList campus={campus} />
      </div>
    </div>
  );
}

export default Campus;
