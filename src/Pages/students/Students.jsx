import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {  fetchAllStudentsThunk }  from "../../Redux/students/students.actions"
import StudentsList from "../../Components/StudentsList"

 function Students() {
  const allStudents = useSelector((state) => state.students.allStudents)
  const dispatch = useDispatch()
  const fetchAllStudents = () => {
    return dispatch(fetchAllStudentsThunk());
  }

  useEffect(() => {
    fetchAllStudents()
  }, [])

  return (
    <div>
      <h1 id = "studentHeading"> All Students</h1> 
      <button>Add Student</button>
        <div id="studentsList">
          <StudentsList list={allStudents} />
        </div>
    </div>
  )
}


export default Students;