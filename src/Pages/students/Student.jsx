import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {  fetchSingleStudentThunk, deleteAStudentThunk}  from "../../Redux/students/students.actions"
import SingleStudentList from "../../Components/SingleStudentList"
import { useParams } from 'react-router-dom';

 function Student() {
  const singleStudent = useSelector((state) => state.students.singleStudent);
  console.log(singleStudent);
  const dispatch = useDispatch()
  const { id } = useParams();
  const fetchSingleStudent = () => {
    return dispatch(fetchSingleStudentThunk(id));
  }

   useEffect(() => {
     fetchSingleStudent()
   }, [id]);

  return (
    <div>
<h1 id="student-Heading" style={{ fontSize: '55px', fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif' }}>Student</h1>
      <button>Edit</button>
        <div id="singleStudentList">
          <SingleStudentList student={singleStudent} />
        </div>
    </div>
  )
}


export default Student;