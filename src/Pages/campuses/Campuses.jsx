import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {  fetchAllCampusesThunk }  from "../../Redux/campuses/campuses.actions"
import CampusesList from '../../Components/CampusesList';
import "../../App/App.css"

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
      <h1 class="title">All Campuses</h1> 
      <button class ="button-add">Add Campuses</button>
        <div id="campusesList">
          <CampusesList allCampuses={allCampuses} />
        </div>
    </div>
  )
}


export default Campuses;