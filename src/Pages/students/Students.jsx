import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import {  fetchAllStudentsThunk, deleteAStudentThunk }  from "../../Redux/students/students.actions"
import StudentsList from "../../Components/StudentsList"

 function Students() {
  const allStudents = useSelector((state) => state.students.allStudents)
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const fetchAllStudents = () => {
    return dispatch(fetchAllStudentsThunk());
  }

  const handleDelete = (id) => {
    dispatch(deleteAStudentThunk(id));
  };

  const handleAddStudent = () => {
    navigate('/students/add');
  };

  useEffect(() => {
    fetchAllStudents();
  }, [])

  return (
    <div>
      <h1 style = {{fontSize: '60px'}}className= "title"> All Students</h1> 
      <button className="button-add" onClick={handleAddStudent}>Add Student</button>
        <div id="studentsList">
          <StudentsList allStudents={allStudents} allCampuses={allCampuses} handleDelete={handleDelete}/>
        </div>
    </div>
  )
}

export default Students;