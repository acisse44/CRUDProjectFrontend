import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCampusThunk } from "../../Redux/campuses/campuses.actions";
import { deleteAStudentThunk } from "../../Redux/students/students.actions";
import SingleCampusList from "../../Components/SingleCampusList";
import { useNavigate, useParams } from "react-router-dom";

function Campus() {
  const campus = useSelector((state) => state.campuses.singleCampus);
  //console.log(campus);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchSingleCampus = () => {
    return dispatch(fetchSingleCampusThunk(id));
  };

  const handleEdit = () => {
    navigate(`/campuses/${id}/edit`);
  };

  useEffect(() => {
    fetchSingleCampus();
  }, [id]);

  return (
    <div>
      <h1>Campus</h1>
      <button className="button-edit" onClick={handleEdit}>
        Edit
      </button>
      <div id="singleCampusList">
        <SingleCampusList campus={campus} />
      </div>
    </div>
  );
}

export default Campus;
