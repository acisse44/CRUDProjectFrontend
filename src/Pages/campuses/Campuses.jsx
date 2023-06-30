import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {  fetchAllCampusesThunk }  from "../../Redux/campuses/campuses.actions"
import CampusesList from '../../Components/CampusesList';

 function Campuses() {
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  console.log(allCampuses);
  const dispatch = useDispatch()
  const fetchAllCampuses = () => {
    return dispatch(fetchAllCampusesThunk());
  }

  useEffect(() => {
    fetchAllCampuses()
  }, [])

  return (
    <div>
      <h1 id = "campusHeading"> All Campuses</h1> 
      <button>Add Campus</button>
        <div id="campusesList">
          <CampusesList list={allCampuses} />
        </div>
    </div>
  )
}


export default Campuses;