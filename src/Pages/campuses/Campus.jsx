import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {  fetchSingleCampusThunk }  from "../../Redux/campuses/campuses.actions"
import SingleCampusList from "../../Components/SingleCampusList"
import { useParams } from 'react-router-dom';

 function Campus() {
  const singleCampus = useSelector((state) => state.campuses.singleCampus);
  console.log(singleCampus);
  const dispatch = useDispatch()
  const { id } = useParams();
  const fetchSingleCampus = () => {
    return dispatch(fetchSingleCampusThunk(id));
  }

  useEffect(() => {
    fetchSingleCampus()
  }, [id])

  return (
    <div>
      <h1>Campus</h1> 
      <button>Edit</button>
        <div id="singleCampusList">
          <SingleCampusList campus={singleCampus} />
        </div>
    </div>
  )
}


export default Campus;