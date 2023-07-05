import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import { deleteAStudentThunk } from "../Redux/students/students.actions";

function SingleStudentList(props) {
  const { student } = props;
  const dispatch = useDispatch();
  const campus = student.campus;
  const navigate = useNavigate();
  const studentsCount = (campus) => {
    return campus.students && campus.students.length > 0 ? campus.students.length : 0;
  }

  const handleEdit = (id, option) => {
    if (option === 1) {
      navigate(`/students/${id}/edit`);
    } else {
      navigate(`/campuses/${id}/edit`);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteAStudentThunk(id));
  };

  return (
    <div className="single-student-container">
      {!student ? (
        <div>
          <div>Empty</div>
          <div>No student</div>
        </div>
      ) : (

          <div>
            <div id="singleStudent" key={student.id}>
                <div>
                  <img src={student.imageUrl} alt={student.firstName} id="singleStudentImage" style={{width: '350px', height: '250px'}}/>
                </div>
                <div>
                    <h2 id="first-name" style ={{fontSize: '50px', marginRight: '35px', marginTop: '50px', marginLeft: '35px',  marginBottom: '135px', fontFamily: 'Lucida Sans'}}>{student.firstName} {student.lastName}</h2>
                <div>
                <div id = "student-email" style = {{ marginBottom: '10px', fontSize: '25px'}}>Email: {student.email}</div>
                <div id = "student-GPA" style = {{marginBottom: '60px', fontSize: '25px'}}> GPA: {student.gpa}</div>
              </div>
              <button className="button-edit" onClick={() => handleEdit(student.id,1)}>Edit</button>
             <button className="button-delete" onClick={() => handleDelete(student.id, 1)}>Delete</button>
            </div>
          </div>

          {campus ? (
            <h2>Campus</h2>
          ) : (
            <div>No campus</div>
          )}

          {campus && (
             <div key={campus.id} id="campus">
             {campus.imageUrl && <img src={campus.imageUrl} alt={campus.name} id="campusImage" />}
             <h1 id="campus-name">
               <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
             </h1>
             <p id="campus-students">{studentsCount(campus)} students</p>
           </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SingleStudentList;